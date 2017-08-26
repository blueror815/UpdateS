import React,{ PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Relay from 'react-relay';

import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';

import { ViewerRoute } from '../../../routes/ViewerRoute';
import icons from '../../../../src/theme/images';
import SportunitySummary from '../../../../src/customPropType/SportunitySummary';
import Modal from '../../../../src/presentational/Modal';
import { updateParticipantsModal } from '../../../../src/action/sportunityAction';

import DetailCellItem from './DetailCellItem';
import Organizer from './DetailCellItem/organizer';
import ParticipantsList from './ParticipantsList';
import { styles } from './styles';
import Header from './Header';
import ChatButton from './ChatButton';
import Status from './StatusView';
import Description from './DescriptionView';
import Cancelation from './CancelationView';
import Price from './PriceView';
import DateSportunity from './DateView';
import ButtonSportunity from './ButtonSportunity';
import UpdateSportunity from './mutation/UpdateSportunity'


/**
 *
 */
class EventDetailPage extends Component{

  constructor(props){
    super(props);
    this.goToChat = this.goToChat.bind(this);
    this.state ={
      isParticipant : false,
      cancel: false,
      isOrganized: false,
    }
  }


  componentWillMount() {
    const {sportunity, user} = this.props;
    if(user){
      const isOrganized = sportunity.organizers.find((item) => item && item.organizer && item.organizer.id === user.id)
      let isParticipant = sportunity.participants.find((item) => item && item.id === user.id);


      if(!isParticipant){
        isParticipant = sportunity.waiting.find((item) => item && item.id === user.id)
      }

      if(isOrganized){
        this.setState({isOrganized: true});
      }
      if(isParticipant){
        this.setState({isParticipant: true});
      }
    }
  }
  

  goToChat(){
    const event = this.props.sportunity;
    if(this.state.isParticipant||this.state.isOrganized)
      NavigationActions.chatsportunity({ id: event.id, title: event.title});
    else{
      const admin = event.organizers.find((item) => item.isAdmin);
      if(admin && admin.organizer && admin.organizer.id)
        NavigationActions.chatuser({ id: admin.organizer.id, title: admin.organizer.pseudo});
    }
  }

  cancelParticipation(){
    const cancel = !this.state.cancel;
    this.setState({cancel})
  }

  goToUser = (id) => {
    NavigationActions.profile({ userId: id});
  }
  /**
   *
   */
  render(){
    const {status, isLoggedIn, updateParticipantsModal, selectedKind, isParticipantsModalVisible, sportunity } = this.props;
    
    console.log('sportunitysportunity', sportunity)
    return (
      <View style={styles.container}>

        <ScrollView style={styles.scrollView}>
          
          <Header sportunity={sportunity} />
          <Status status={status} sportunity={sportunity} />
          <Description sportunity={sportunity}/>
          <DateSportunity sportunity={sportunity}/>
          

          <TouchableOpacity style={styles.rowContainer}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Image style={styles.icon} source={icons.ellipse_bar} />
              <Text style={[styles.title,{alignItems: 'center'}]} numberOfLines={1}>
                Export activity to a calendar program
              </Text>
              <Image style={styles.icon} source={icons.down_arrow} />
            </View>
          </TouchableOpacity>

          <DetailCellItem venue={sportunity.venue} address={sportunity.address} />
          { sportunity.organizers && sportunity.organizers.map((item, index) =>
            <Organizer key={index} user={item.organizer} goToUser={this.goToUser} />
            )
          }
          { isLoggedIn && <ChatButton sportunity={sportunity}  goToChat={this.goToChat} /> }
          

          <TouchableOpacity style={styles.rowContainer} onPress={() => updateParticipantsModal(true)}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={styles.title} numberOfLines={1}>
                {sportunity.participants && sportunity.participants.length} People are going
              </Text>
              <Image style={styles.icon} source={icons.down_arrow} />
            </View>
          </TouchableOpacity>

          <Price price={sportunity.price} />

              
          <Cancelation cancel={this.state.cancel} onPress={() => this.cancelParticipation()} />
          <ButtonSportunity 
            isOrganized={this.state.isOrganized}
            isLoggedIn={isLoggedIn}
            status={status}
            isParticipant={this.state.isParticipant}
            viewer={this.props.viewer}
            sportunity={sportunity}
            user={this.props.user}
          />

          <View>
            <View style={styles.seperator} />
            <Image
              style={styles.hblIcon}
              source={icons.w_share}
            />
          </View>
        </ScrollView>
        <Modal
          isModalVisible={isParticipantsModalVisible}
          openCloseModal={() => updateParticipantsModal(false)}
          title='participants'
        >
          <ParticipantsList sportunity={sportunity} />
        </Modal>
      </View>
    );
  }
}

EventDetailPage.propTypes = {

  viewer: PropTypes.object.isRequired,
  status: PropTypes.object.isRequired,
  isParticipantsModalVisible: PropTypes.bool.isRequired,
  updateParticipantsModal: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  selectedKind: PropTypes.string.isRequired

};

const stateToProps = (state) => ({
  status: state.sportunityActivity.status,
  isParticipantsModalVisible: state.sportunityActivity.isParticipantsModalVisible,
  isLoggedIn: state.sportunityDrawer.isLoggedIn,
  selectedKind: state.sportunityList.selectedKind,
});

const dispatchToProps = (dispatch) => ({
  updateParticipantsModal: (status) => dispatch(updateParticipantsModal(status))
});

export default Relay.createContainer(connect(stateToProps, dispatchToProps)(EventDetailPage), {
  fragments: {
    viewer: () => Relay.QL`
    fragment on Viewer{
      ${ButtonSportunity.getFragment('viewer')}
    }`,
    user: () => Relay.QL`
      fragment on User {
        id
        ${ButtonSportunity.getFragment('user')}
      }
    `,
    sportunity: () => Relay.QL`
      fragment on Sportunity {
        id
        title
        participants{
          id
        }
        waiting{
          id
        }
        ${Header.getFragment('sportunity')}
        ${Status.getFragment('sportunity')}
        ${Description.getFragment('sportunity')}
        ${ParticipantsList.getFragment('sportunity')}
        ${DateSportunity.getFragment('sportunity')}

        price{
          ${Price.getFragment('price')}
        }
        address{
          ${DetailCellItem.getFragment('address')}
        }
        venue{
          ${DetailCellItem.getFragment('venue')}
        }
        organizers{
          isAdmin
          organizer{
            id
            ${Organizer.getFragment('user')}
          }
        }
        ${ButtonSportunity.getFragment('sportunity')}
      }
    `
  }
});

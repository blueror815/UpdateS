import React, {Component, PropTypes} from 'react';
import { View, Text, } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import SportunityFilterKind from '../SportunityPage/SportunityFilterKind';
import Add from '../../Button/Add';
import change from '../../../action/changeSportunityFilterKind';
import styles from './style';

class NoLoginPage extends Component{
  
  changeKind = (slectedKind) => {
    this.props.changeKind(slectedKind);
    
    if(slectedKind === 'Booked')
      Actions.booked();
    else if(slectedKind === 'Organized')
      Actions.organized();
    else
      Actions.available();
    
  }

  render(){
  	const selectedKind= this.props.selectedKind;
  	return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text>You are not connected. Login or register to  {selectedKind === 'Organized' ? 'organize': 'book'} sportunities</Text>
          {
            selectedKind === 'Organized' ?
            <View style={styles.buttonAddFooter}>
              <Add Action={Actions.new_activity} />
            </View>
            :
            null
          }
        </View>
       
        <View style={styles.footer}>
          <SportunityFilterKind selectedKind={selectedKind} changeKind={this.changeKind} />
        </View>
        
      </View>
  	)
  }
}

const stateToProps = (state) => ({
  selectedKind: state.sportunityList.selectedKind,
});
const dispatchToProps = (dispatch) => ({
  changeKind: (kind) => dispatch(change(kind)),
});

NoLoginPage.propTypes = {
  selectedKind: PropTypes.string.isRequired,
  changeKind: PropTypes.func.isRequired,
};

export default connect(stateToProps,dispatchToProps)(NoLoginPage);

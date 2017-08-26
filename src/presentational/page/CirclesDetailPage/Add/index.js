
import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Input from '../../../../presentational/Input';
import inputStyles from '../../../Input/style';
import styles from './style';

class Add extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
    }
  }

  addMember = () =>  {
    this.props.addMember({pseudo: this.state.pseudo});
    this.setState({pseudo: ''});
  }

  render() {
  	const {onPress} = this.props;
  	return (
      <View>
        <Input
          styles={[inputStyles.input]}
          inputIconStyles={inputStyles.icon}
          placeholder={"pseudo or Email"}
          updateText={(pseudo) => this.setState({pseudo})}
        />
        <TouchableOpacity
          onPress={() => this.addMember()}
        >
          <View style={styles.container}>
            <Text style={styles.textInput}>
              Add
            </Text>
          </View>
        </TouchableOpacity>
      </View>
  	)
  }
  
}

export default Add;
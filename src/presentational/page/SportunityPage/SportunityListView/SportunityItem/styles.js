/**
 * Created by BaeBae on 8/11/16.
 */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2
  },
  leftBar: {
    width: 5,
    alignSelf: 'stretch'
  },
  content: {
    flex: 1,
    flexDirection: 'column'
  },
  seperator: {
    height: 2,
  },
});

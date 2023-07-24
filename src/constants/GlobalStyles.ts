import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  flexGrow: {
    flexGrow: 1,
  },
  relative: {
    position: 'relative',
  },
  disabledButton: {
    backgroundColor: Colors.gray,
  },
  disabledText: {
    color: Colors.gray,
  },
  textInput: {
    backgroundColor: Colors.lightGray,
    marginVertical: 5,
    padding: 10,
    fontSize: 15,
    lineHeight: 15.5,
    paddingBottom: 0,
    flex: 1,
  },
});

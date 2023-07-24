import { StyleSheet, Dimensions } from 'react-native';
import Colors from '~/constants/Colors';

const buttonCommon = {
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 50,
  shadowColor: Colors.black,
  shadowOffset: { width: 2, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
};
const styles = StyleSheet.create({
  //@ts-ignore
  roundedIconButton: {
    ...buttonCommon,
    width: 50,
    height: 50,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderColor: Colors.lightGray,
  },
  //@ts-ignore
  roundedTextButton: {
    ...buttonCommon,
    width: 66,
    height: 66,
    backgroundColor: Colors.blue,
  },
  textLabel: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 22,
  },
  topLeft: {
    top: 15,
    left: 10,
  },
  topRight: {
    top: 15,
    right: 10,
  },
  bottomLeft: {
    bottom: 15,
    left: 10,
  },
  bottomRight: {
    bottom: 15,
    right: 10,
  },
  bottomCenter: {
    bottom: 15,
    left: Dimensions.get('window').width / 2 - 36,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import Colors from '~/constants/Colors';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#00000055',
  },
  declineButton: {
    backgroundColor: Colors.black,
    padding: 15,
    borderRadius: 50,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  declineText: {
    color: Colors.gray,
    fontWeight: '600',
  },
  popupContainer: {
    backgroundColor: Colors.black,
    height: 270,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uberType: {
    fontSize: 18,
    color: Colors.white,
  },
  userPicture: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginHorizontal: 15,
  },
  stars: {
    color: Colors.gray,
  },
  detailContainer: {
    width: '100%',
    alignItems: 'center',
  },
  time: {
    color: Colors.gray,
    fontSize: 40,
  },
  distance: {
    color: Colors.gray,
    fontSize: 20,
  },
  message: {
    color: Colors.gray,
    fontSize: 18,
  },
});

export default styles;

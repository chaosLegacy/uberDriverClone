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
    height: 150,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 55,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uberType: {
    fontSize: 16,
    color: Colors.gray,
  },
  userPicture: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  stars: {
    color: Colors.gray,
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
  orderDetails: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slideContainer: {
    marginTop: 20,
    width: '100%',
  },
  slideTitle: {
    fontWeight: '600',
    fontSize: 15,
  },
});

export default styles;

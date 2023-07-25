import { StyleSheet } from 'react-native';
import Colors from '~/constants/Colors';

const styles = StyleSheet.create({
  footerContainer: {
    height: 68,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    color: Colors.darkGray,
    fontWeight: '600',
    fontSize: 18,
  },
  orderContainer: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    color: Colors.darkGray,
    fontSize: 15,
  },
  userPicture: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginHorizontal: 15,
    marginVertical: 2,
  },
  time: {
    color: Colors.darkGray,
    fontSize: 18,
    fontWeight: '600',
  },
  distance: {
    color: Colors.darkGray,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;

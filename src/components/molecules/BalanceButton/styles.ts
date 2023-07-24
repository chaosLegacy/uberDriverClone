import { StyleSheet, Dimensions } from 'react-native';
import Colors from '~/constants/Colors';

const styles = StyleSheet.create({
  balanceContainer: {
    position: 'absolute',
    top: 20,
    backgroundColor: Colors.black,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    left: Dimensions.get('window').width / 2 - 36,
  },
  balanceCurrency: {
    color: Colors.white,
    fontSize: 18,
    marginRight: 5,
  },
  balanceText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 18,
  },
});

export default styles;

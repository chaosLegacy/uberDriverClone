import { StyleSheet } from 'react-native';
import Colors from '~/constants/Colors';

const styles = StyleSheet.create({
  footerContainer: {
    height: 60,
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
});

export default styles;

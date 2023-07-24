import { StyleSheet } from 'react-native';
import Colors from '~/constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -6,
  },
  title: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: Colors.lightBlue,
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;

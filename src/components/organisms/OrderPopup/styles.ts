import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    height: Dimensions.get('window').height - 80,
  },
  mapView: {
    width: '100%',
    height: '100%',
  },
  marker: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default styles;

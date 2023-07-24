import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';

const requestAndroidLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Uber app requires Location Permission',
        message:
          'Uber App App needs access to your location ' +
          'so you can take awesome rides.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
const requestIosLocation = Geolocation.requestAuthorization();
export { requestAndroidLocationPermission, requestIosLocation };

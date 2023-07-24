/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
// @ts-ignore
navigator.geolocation = require('@react-native-community/geolocation');
import 'react-native-gesture-handler';
import HomeScreen from '~/screens/HomeScreen';
import Container from '~/components/atoms/Container';
import GlobalStyles from '~/constants/GlobalStyles';
import {
  requestAndroidLocationPermission,
  requestIosLocation,
} from '~/utils/permissions';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestAndroidLocationPermission();
    } else if (Platform.OS === 'ios') {
      requestIosLocation;
    }
  }, []);

  return (
    <SafeAreaView style={[GlobalStyles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={GlobalStyles.flexGrow}>
        <Container>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <HomeScreen />
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

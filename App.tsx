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
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';
import awsExports from '~/aws-exports';
Amplify.configure({
  ...awsExports,
  Analytics: {
    disabled: true,
  },
});

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
    <GestureHandlerRootView style={{ flex: 1 }}>
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
    </GestureHandlerRootView>
  );
}

export default withAuthenticator(App);

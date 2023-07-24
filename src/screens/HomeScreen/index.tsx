import React, { useState } from 'react';
import Map from '~/components/molecules/Map';
import Container from '~/components/atoms/Container';
import MapFooter from '~/components/molecules/MapFooter';
import { View } from 'react-native';
import GlobalStyles from '~/constants/GlobalStyles';
import MapButton from '~/components/molecules/MapButton';
import Colors from '~/constants/Colors';
import BalanceButton from '~/components/molecules/BalanceButton';

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  const onSearch = () => {
    console.warn('searching...');
  };
  const onPressBalance = () => {
    console.warn('balance...');
  };
  const onPressGo = () => {
    setIsOnline(!isOnline);
  };
  return (
    <Container>
      <View style={GlobalStyles.relative}>
        <Map />
        <BalanceButton balance={'0.00'} onPress={onPressBalance} />
        <MapButton
          name="menu"
          onPress={onSearch}
          icon={'list'}
          position={'top-left'}
        />
        <MapButton
          name="search"
          onPress={onSearch}
          icon={'search'}
          position={'top-right'}
        />
        <MapButton
          name="shield"
          onPress={onSearch}
          icon={'shield'}
          position={'bottom-left'}
          color={Colors.blue}
          size={24}
        />
        <MapButton
          name="comment"
          onPress={onSearch}
          icon={'comment'}
          position={'bottom-right'}
        />
        <MapButton
          name="go"
          onPress={onPressGo}
          label={isOnline ? 'END' : 'GO'}
          position={'bottom-center'}
        />
      </View>
      <MapFooter onlineStatus={isOnline} />
    </Container>
  );
};

export default HomeScreen;

import React from 'react';
import { Text, View, Pressable } from 'react-native';
import Container from '~/components/atoms/Container';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '~/constants/Colors';
import styles from './styles';

type MapFooterProps = {
  onlineStatus: boolean;
};
const MapFooter = ({ onlineStatus }: MapFooterProps) => {
  const renderStatusMessage = (): string => {
    return onlineStatus ? "You're online" : "You're offline";
  };
  return (
    <Container>
      <View style={styles.footerContainer}>
        <Pressable>
          <Entypo name="sound-mix" size={20} color={Colors.darkGray} />
        </Pressable>
        <Text style={styles.footerText}>{renderStatusMessage()}</Text>
        <Pressable>
          <Entypo name="list" size={23} color={Colors.darkGray} />
        </Pressable>
      </View>
    </Container>
  );
};

export default MapFooter;

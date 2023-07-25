import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Container from '~/components/atoms/Container';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '~/constants/Colors';
import styles from './styles';
import { OrderInput } from '~/types';

type MapFooterProps = {
  newOrder?: OrderInput;
  onlineStatus: boolean;
};
const MapFooter = ({ newOrder, onlineStatus }: MapFooterProps) => {
  const orderTemplate = (order: OrderInput, isDroppingOff?: boolean) => {
    return (
      <View style={styles.orderContainer}>
        <View style={styles.row}>
          <Text style={styles.time}>
            {order.duration ? order.duration.toFixed(1) : '?'} min
          </Text>
          <Image
            source={require('assets/images/default.jpeg')}
            style={styles.userPicture}
          />
          <Text style={styles.distance}>
            {order.distance ? order.distance.toFixed(1) : '?'} km
          </Text>
        </View>
        <Text style={styles.userName}>{`${
          isDroppingOff ? 'Dropping off' : 'Picking up'
        } ${order.user.name}`}</Text>
      </View>
    );
  };
  const renderStatusMessage = () => {
    if (newOrder) {
      if (newOrder.pickedUp) {
        return orderTemplate(newOrder, true);
      }
      return orderTemplate(newOrder);
    }
    return (
      <Text style={styles.footerText}>
        {onlineStatus ? "You're online" : "You're offline"}
      </Text>
    );
  };
  return (
    <Container>
      <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Entypo name="sound-mix" size={20} color={Colors.darkGray} />
        </TouchableOpacity>
        <Text style={styles.footerText}>{renderStatusMessage()}</Text>
        <TouchableOpacity>
          <Entypo name="list" size={23} color={Colors.darkGray} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default MapFooter;

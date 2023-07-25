import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '~/constants/Colors';
import SlideButton from 'rn-slide-button';
import { OrderInput } from '~/types';

type OrderStatusProps = {
  currentOrder: OrderInput;
  closePopup?: boolean;
  status: 'PICK UP' | 'DROP OFF';
  onDecline: () => void;
  onConfirmPickUp: () => void;
  onConfirmDropOff: () => void;
};

const OrderStatus = ({
  currentOrder,
  closePopup = false,
  status,
  onDecline,
  onConfirmPickUp,
  onConfirmDropOff,
}: OrderStatusProps) => {
  if (closePopup) {
    return <View />;
  }
  const confirmButtonTemplate = () => {
    switch (status) {
      case 'PICK UP':
        return (
          <SlideButton
            title={`CONFIRM ${currentOrder.type.toUpperCase()}`}
            height={50}
            borderRadius={5}
            icon={
              <AntDesign name="doubleright" size={18} color={Colors.darkGray} />
            }
            animation
            reverseSlideEnabled={false}
            containerStyle={styles.slideContainer}
            onReachedToEnd={onConfirmPickUp}
          />
        );
      case 'DROP OFF':
        return (
          <SlideButton
            title={`COMPLETE ${currentOrder.type.toUpperCase()}`}
            height={50}
            borderRadius={5}
            icon={<AntDesign name="doubleright" size={18} color={Colors.red} />}
            animation
            reverseSlideEnabled={false}
            containerStyle={[
              styles.slideContainer,
              { backgroundColor: Colors.red },
            ]}
            underlayStyle={{ backgroundColor: Colors.lightRed }}
            onReachedToEnd={onConfirmDropOff}
          />
        );
      default:
        <View />;
    }
  };
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={onDecline}
        disabled={status === 'DROP OFF'}
        style={styles.declineButton}>
        <AntDesign name="close" size={18} color={Colors.gray} />
        <Text style={styles.declineText}>Decline</Text>
      </TouchableOpacity>
      <View style={styles.popupContainer}>
        <View style={styles.orderDetails}>
          <TouchableOpacity>
            <Feather name="phone-forwarded" size={20} color={Colors.gray} />
          </TouchableOpacity>
          <View style={styles.row}>
            <Image
              source={require('assets/images/default.jpeg')}
              style={styles.userPicture}
            />
            <View>
              <Text style={styles.message}>{currentOrder.user.name}</Text>
              <Text style={styles.stars}>
                <AntDesign name="star" size={18} color={Colors.gray} />{' '}
                {currentOrder.user.rating}
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Feather name="user" size={23} color={Colors.gray} />
          </TouchableOpacity>
        </View>
        {confirmButtonTemplate()}
      </View>
    </View>
  );
};

export default OrderStatus;

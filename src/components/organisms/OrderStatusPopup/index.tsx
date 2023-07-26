import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '~/constants/Colors';
import SlideButton from 'rn-slide-button';
import { Order } from '~/API';
import { ORDER_STATUS } from '~/constants';

type OrderStatusProps = {
  currentOrder: Order;
  status: ORDER_STATUS;
  closePopup?: boolean;
  onDecline: () => void;
  onConfirmPickUp: (order: Order) => void;
  onConfirmDropOff: (order: Order) => void;
};

const OrderStatus = ({
  currentOrder,
  status,
  closePopup = false,
  onDecline,
  onConfirmPickUp,
  onConfirmDropOff,
}: OrderStatusProps) => {
  if (closePopup) {
    return <View />;
  }
  const confirmButtonTemplate = () => {
    switch (status) {
      case ORDER_STATUS['PICKED-UP']:
        return (
          <SlideButton
            title="CONFIRM PICK UP"
            height={50}
            borderRadius={5}
            icon={
              <AntDesign name="doubleright" size={18} color={Colors.blue} />
            }
            animation
            reverseSlideEnabled={false}
            containerStyle={styles.slideContainer}
            titleStyle={styles.slideTitle}
            onReachedToEnd={() => onConfirmPickUp(currentOrder)}
          />
        );
      case ORDER_STATUS['DROP-OFF']:
        return (
          <SlideButton
            title="CONFIRM DROP OFF"
            height={50}
            borderRadius={5}
            icon={<AntDesign name="doubleright" size={18} color={Colors.red} />}
            animation
            reverseSlideEnabled={false}
            containerStyle={[
              styles.slideContainer,
              { backgroundColor: Colors.red },
            ]}
            titleStyle={styles.slideTitle}
            underlayStyle={{ backgroundColor: Colors.lightRed }}
            onReachedToEnd={() => onConfirmDropOff(currentOrder)}
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
        disabled={status === ORDER_STATUS['DROP-OFF']}
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
            <Text style={styles.uberType}>{currentOrder.type}</Text>

            {currentOrder.user && (
              <>
                {currentOrder.user.avatar ? (
                  <Image
                    source={{ uri: currentOrder.user.avatar }}
                    style={styles.userPicture}
                  />
                ) : (
                  <Image
                    source={require('assets/images/default.jpeg')}
                    style={styles.userPicture}
                  />
                )}
                <View>
                  <Text style={styles.message}>{currentOrder.user.name}</Text>
                  <Text style={styles.stars}>
                    <AntDesign name="star" size={18} color={Colors.gray} />{' '}
                    {currentOrder.user.rating}
                  </Text>
                </View>
              </>
            )}
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

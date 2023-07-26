import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '~/constants/Colors';
import SlideButton from 'rn-slide-button';
import { Order } from '~/API';
import { MapDirectionProps } from '~/types';

type NewOrderPopupProps = {
  newOrder: Order;
  direction?: MapDirectionProps;
  closePopup?: boolean;
  onDecline: () => void;
  onAccept: (newOrder: Order) => void;
};

const NewOrderPopup = ({
  newOrder,
  direction,
  closePopup = false,
  onDecline,
  onAccept,
}: NewOrderPopupProps) => {
  if (closePopup) {
    return <View />;
  }
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onDecline} style={styles.declineButton}>
        <AntDesign name="close" size={18} color={Colors.gray} />
        <Text style={styles.declineText}>Decline</Text>
      </TouchableOpacity>
      <View style={styles.popupContainer}>
        <View style={styles.row}>
          <Text style={styles.uberType}>{newOrder.type}</Text>
          {newOrder.user && (
            <>
              {newOrder.user.avatar ? (
                <Image
                  source={{ uri: newOrder.user.avatar }}
                  style={styles.userPicture}
                />
              ) : (
                <Image
                  source={require('assets/images/default.jpeg')}
                  style={styles.userPicture}
                />
              )}

              <Text style={styles.stars}>
                <AntDesign name="star" size={18} color={Colors.gray} />{' '}
                {newOrder.user.rating}
              </Text>
            </>
          )}
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.time}>
            {direction ? direction.duration.toFixed(1) : '?'} min
          </Text>
          <Text style={styles.distance}>
            {direction ? direction.distance.toFixed(1) : '?'} km
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <SlideButton
            title="Slide To Accept"
            height={50}
            borderRadius={10}
            icon={
              <AntDesign name="doubleright" size={18} color={Colors.blue} />
            }
            animation
            reverseSlideEnabled={false}
            onReachedToEnd={() => onAccept(newOrder)}
          />
          <Text style={styles.message}>
            <AntDesign name="star" size={18} color={Colors.gray} /> Toward your
            destination
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NewOrderPopup;

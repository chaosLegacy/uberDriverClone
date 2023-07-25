import React, { useEffect, useState, useRef } from 'react';
import Map from '~/components/molecules/Map';
import Container from '~/components/atoms/Container';
import MapFooter from '~/components/molecules/MapFooter';
import { View } from 'react-native';
import GlobalStyles from '~/constants/GlobalStyles';
import MapButton from '~/components/molecules/MapButton';
import Colors from '~/constants/Colors';
import BalanceButton from '~/components/molecules/BalanceButton';
import NewOrderPopup from '~/components/organisms/NewOrderPopup';
import OrderStatusPopup from '~/components/organisms/OrderStatusPopup';
import { OrderInput } from '~/types';
import MapDirections from '~/components/molecules/MapDirections';
import MapMarker from '~/components/molecules/MapMarker';
import MapView, { LatLng, UserLocationChangeEvent } from 'react-native-maps';
import { height, moveBetweenTwoPoints, width } from '~/utils';

const HomeTemplate = () => {
  // Mock client directions: origin: L'atelier du 6 Nantes, destination: Centre Commercial Atlantis
  const wayPoint = {
    clientPickUp: {
      latitude: 47.2050727, //startPoint.geometry.location.lat,
      longitude: -1.534918, //startPoint.geometry.location.lng,
    },
    clientDropOff: {
      latitude: 47.2256543, //endPoint.geometry.location.lat,
      longitude: -1.6361498, //endPoint.geometry.location.lng,
    },
  };

  const { clientPickUp, clientDropOff } = wayPoint;
  const mapRef = useRef<MapView>(null);
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [closeNewOrderPopup, setCloseNewOrderPopup] = useState<boolean>(false);
  const [closeStatusOrderPopup, setStatusCloseOrderPopup] =
    useState<boolean>(false);
  const [newOrder, setNewOrder] = useState<OrderInput>();
  const [driverPosition, setDriverPosition] = useState<LatLng>();
  const [destinationPosition, setDestinationPosition] =
    useState<LatLng>(clientPickUp);

  useEffect(() => {
    setTimeout(() => {
      setNewOrder({
        accept: false,
        type: 'UberX',
        userId: '123456',
        user: {
          email: 'test@gmail.com',
          name: 'Youssef',
          rating: '4.6',
          username: 'chaoslegacy',
          id: '123456',
        },
        id: 'IR89348948',
        createdAt: new Date().toDateString(),
        destLat: clientDropOff.latitude,
        destLong: clientDropOff.longitude,
        originLat: clientPickUp.latitude,
        originLong: clientPickUp.longitude,
        pickedUp: false,
      });
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (newOrder && newOrder.accept && driverPosition) {
      const currentPoint = driverPosition;
      const endPoint = clientPickUp;
      const moveInterval = moveBetweenTwoPoints({
        speed: 0.2,
        currentPoint,
        endPoint,
        setPosition: setDriverPosition, // Update the currentPoint with the new position
      });
      // Clean up the interval when the component unmounts
      return () => {
        clearInterval(moveInterval);
      };
    }
  }, [newOrder, driverPosition, clientPickUp]);

  const onDeclineOrder = () => {
    console.log('Order declined...');
    setNewOrder(undefined);
    setCloseNewOrderPopup(true);
  };
  const onAcceptOrder = (order: OrderInput) => {
    console.log('Order accepted...');
    setCloseNewOrderPopup(true);
    setNewOrder({
      ...order,
      accept: true,
    });
  };
  const onConfirmPickUp = () => {
    console.log('Confirm pick up');
    if (newOrder?.pickedUp) {
      setDestinationPosition(clientDropOff);
    }
    setStatusCloseOrderPopup(true);
  };
  const onConfirmDropOff = () => {
    console.log('Confirm pick up');
    setStatusCloseOrderPopup(true);
  };
  const onSearch = () => {
    console.warn('searching...');
  };
  const onPressBalance = () => {
    console.warn('balance...');
  };
  const onPressGo = () => {
    setIsOnline(!isOnline);
  };
  // Bring Driver location one time
  const onDriverLocationChange = (event: UserLocationChangeEvent) => {
    setDriverPosition(event.nativeEvent.coordinate);
  };
  const onDirectionReady = (
    distance: number,
    duration: number,
    coordinates: LatLng[],
  ) => {
    //Callback that is called when the routing has successfully finished. Note: distance returned in kilometers and duration in minutes.
    console.log(
      'Direction found: distance ' + distance + ' duration= ' + duration,
    );
    if (newOrder) {
      setNewOrder({
        ...newOrder,
        distance,
        duration,
        pickedUp: newOrder.pickedUp || distance <= 0.006,
      });
      if (mapRef && mapRef.current) {
        mapRef.current.fitToCoordinates(coordinates, {
          edgePadding: {
            right: width / 20,
            bottom: height / 20,
            left: width / 20,
            top: height / 20,
          },
        });
      }
    }
  };
  return (
    <Container>
      <View style={GlobalStyles.relative}>
        <Map ref={mapRef} onLocationChange={onDriverLocationChange}>
          {newOrder && driverPosition && destinationPosition && (
            <>
              <MapDirections
                origin={driverPosition}
                destination={destinationPosition}
                onDirectionChange={onDirectionReady}
              />
              <MapMarker coordinate={driverPosition} title="Origin" />
              <MapMarker coordinate={destinationPosition} title="Destination" />
            </>
          )}
        </Map>
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
      <MapFooter onlineStatus={isOnline} newOrder={newOrder} />
      {newOrder && (
        <>
          <NewOrderPopup
            onDecline={onDeclineOrder}
            onAccept={onAcceptOrder}
            newOrder={newOrder}
            closePopup={closeNewOrderPopup}
          />
          {newOrder.pickedUp && (
            <OrderStatusPopup
              currentOrder={newOrder}
              onDecline={onDeclineOrder}
              onConfirmPickUp={onConfirmPickUp}
              onConfirmDropOff={onConfirmDropOff}
              closePopup={closeStatusOrderPopup}
              status={newOrder.pickedUp ? 'PICK UP' : 'DROP OFF'}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default HomeTemplate;

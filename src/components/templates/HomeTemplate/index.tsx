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
import { CognitoUserExt, MapDirectionProps } from '~/types';
import MapDirections from '~/components/molecules/MapDirections';
import MapMarker from '~/components/molecules/MapMarker';
import MapView, { LatLng, UserLocationChangeEvent } from 'react-native-maps';
import { height, moveBetweenTwoPoints, width } from '~/utils';
import { _getDriverCarByUserId, _updateDriverCar } from '~/services/car';
import { _getAuthenticatedUser } from '~/services/user';
import { Car, Order, UpdateCarInput } from '~/API';
import { DISTANCE_THRESHOLD, ORDER_STATUS } from '~/constants';
import { _getOrdersList, _getOrderById, _updateOrder } from '~/services/order';

const HomeTemplate = () => {
  const mapRef = useRef<MapView>(null);
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [closeNewOrderPopup, setCloseNewOrderPopup] = useState<boolean>(false);
  const [closeStatusOrderPopup, setStatusCloseOrderPopup] =
    useState<boolean>(true);
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const [newOrder, setNewOrder] = useState<Order>();
  const [driverPosition, setDriverPosition] = useState<LatLng>();
  const [destinationPosition, setDestinationPosition] = useState<LatLng>();
  const [currentUser, setCurrentUser] = useState<CognitoUserExt>();
  const [driverCar, setDriverCar] = useState<Car | UpdateCarInput>();
  const [mapDirection, setMapDirection] = useState<MapDirectionProps>();
  const [orderStatus, setOrderStatus] = useState<ORDER_STATUS>(
    ORDER_STATUS.NEW,
  );

  const fetchAuthenticatedUser = async () => {
    const authenticatedUser = await _getAuthenticatedUser();
    setCurrentUser(authenticatedUser);
  };
  const fetchOrdersList = async () => {
    const orders = await _getOrdersList();
    setOrdersList(orders || []);
  };
  const fetchDriverCar = async (user: CognitoUserExt) => {
    const myCar = await _getDriverCarByUserId(user);
    setDriverCar(myCar);
    if (myCar) {
      setIsOnline(!!myCar.isAvailable);
    }
  };
  const updateDriverCar = async (car: UpdateCarInput) => {
    await _updateDriverCar(car);
    setDriverCar(car);
  };

  const fetchOrderById = async (orderId: string) => {
    const myOrder = await _getOrderById(orderId);
    setNewOrder(myOrder);
  };
  const updateOrderStatus = async (id: string, status: string) => {
    _updateOrder({
      id,
      status,
    });
  };

  useEffect(() => {
    fetchAuthenticatedUser();
  }, []);

  useEffect(() => {
    if (isOnline) {
      fetchOrdersList();
    }
  }, [isOnline]);

  useEffect(() => {
    if (currentUser) {
      fetchDriverCar(currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    if (ordersList.length) {
      const myOrder = ordersList[0];
      fetchOrderById(myOrder.id);
      setDestinationPosition({
        latitude: myOrder.destLat,
        longitude: myOrder.destLong,
      });
      setCloseNewOrderPopup(false);
    } else {
      setDestinationPosition(undefined);
      setNewOrder(undefined);
    }
  }, [ordersList]);

  useEffect(() => {
    if (
      newOrder &&
      (newOrder.status === ORDER_STATUS[ORDER_STATUS.CONFIRMED] ||
        newOrder.status === ORDER_STATUS[ORDER_STATUS['PICKED-UP']]) &&
      driverPosition &&
      destinationPosition
    ) {
      const currentPoint = driverPosition;
      const endPoint = destinationPosition;
      const moveInterval = moveBetweenTwoPoints({
        speed: 0.2,
        //minDistance: DISTANCE_THRESHOLD,
        currentPoint,
        endPoint,
        setPosition: setDriverPosition, // Update the currentPoint with the new position
      });
      // Clean up the interval when the component unmounts
      return () => {
        clearInterval(moveInterval);
      };
    }
  }, [newOrder, driverPosition, destinationPosition]);

  const onDeclineOrder = () => {
    console.log('Order declined...');
    setOrdersList(ordersList.slice(1));
    setDestinationPosition(undefined);
    setCloseNewOrderPopup(true);
  };
  const onAcceptOrder = (order: Order) => {
    console.log('Order accepted...');
    const status = ORDER_STATUS[ORDER_STATUS.CONFIRMED];
    setNewOrder({
      ...order,
      status,
    });
    updateOrderStatus(order.id, status);
    setDestinationPosition({
      latitude: order.originLat,
      longitude: order.originLong,
    });
    setCloseNewOrderPopup(true);
  };
  const onConfirmPickUp = (order: Order) => {
    console.log('Confirm pick up');
    const status = ORDER_STATUS[ORDER_STATUS['PICKED-UP']];
    setNewOrder({
      ...order,
      status,
    });
    updateOrderStatus(order.id, status);
    setDestinationPosition({
      latitude: order.destLat,
      longitude: order.destLong,
    });
    setStatusCloseOrderPopup(true);
  };
  const onConfirmDropOff = (order: Order) => {
    console.log('Confirm drop off ', order.id);
    const status = ORDER_STATUS[ORDER_STATUS.COMPLETED];
    setNewOrder({
      ...order,
      status,
    });
    updateOrderStatus(order.id, status);
    setDestinationPosition(undefined);
    setNewOrder(undefined);
    setStatusCloseOrderPopup(true);
  };
  const onSearch = () => {
    console.warn('searching...');
  };
  const onPressBalance = () => {
    console.warn('balance...');
  };
  const onPressGo = async () => {
    if (driverCar) {
      const updatedCar: UpdateCarInput = {
        id: driverCar.id,
        isAvailable: !isOnline,
      };
      await updateDriverCar(updatedCar);
      setIsOnline(!isOnline);
    }
  };
  // Bring Driver location one time
  const onDriverLocationChange = (event: UserLocationChangeEvent) => {
    setDriverPosition(event.nativeEvent.coordinate);
    setTimeout(() => {
      if (driverCar && event.nativeEvent.coordinate) {
        const { latitude, longitude, heading } = event.nativeEvent.coordinate;
        const updatedCar: UpdateCarInput = {
          id: driverCar.id,
          latitude,
          longitude,
          heading,
        };
        updateDriverCar(updatedCar);
      }
    }, 2000); // update DB each 2 sec
  };
  const onDirectionReady = ({
    distance,
    duration,
    coordinates,
  }: MapDirectionProps) => {
    //Callback that is called when the routing has successfully finished. Note: distance returned in kilometers and duration in minutes.
    setMapDirection({ distance, duration, coordinates });
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

    if (newOrder) {
      if (
        newOrder.status === ORDER_STATUS[ORDER_STATUS.CONFIRMED] &&
        distance < DISTANCE_THRESHOLD
      ) {
        setOrderStatus(ORDER_STATUS['PICKED-UP']);
        setStatusCloseOrderPopup(false);
      } else if (
        newOrder.status === ORDER_STATUS[ORDER_STATUS['PICKED-UP']] &&
        distance < DISTANCE_THRESHOLD
      ) {
        setOrderStatus(ORDER_STATUS['DROP-OFF']);
        setStatusCloseOrderPopup(false); // status drop off
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
      <MapFooter
        newOrder={newOrder}
        orderStatus={orderStatus}
        onlineStatus={isOnline}
        direction={mapDirection}
      />
      {newOrder && (
        <>
          <NewOrderPopup
            newOrder={newOrder}
            direction={mapDirection}
            closePopup={closeNewOrderPopup}
            onDecline={onDeclineOrder}
            onAccept={onAcceptOrder}
          />
          <OrderStatusPopup
            currentOrder={newOrder}
            status={orderStatus}
            onDecline={onDeclineOrder}
            onConfirmPickUp={onConfirmPickUp}
            onConfirmDropOff={onConfirmDropOff}
            closePopup={closeStatusOrderPopup}
          />
        </>
      )}
    </Container>
  );
};

export default HomeTemplate;

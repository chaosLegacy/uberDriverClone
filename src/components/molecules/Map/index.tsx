import React, { forwardRef, useEffect, useState } from 'react';

import MapView, {
  PROVIDER_GOOGLE,
  Region,
  UserLocationChangeEvent,
} from 'react-native-maps';

import styles from './styles';
import { View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

type IMapProps = {
  coordinate?: Region;
  showsMyLocationButton?: boolean;
  onLocationChange?: (event: UserLocationChangeEvent) => void;
  children?: React.ReactNode;
};

const Map = forwardRef<MapView, IMapProps>((props, ref) => {
  const {
    coordinate,
    showsMyLocationButton = false,
    onLocationChange,
    children,
  } = props;
  const [region, setRegion] = useState({
    latitude: 0.0,
    longitude: 0.0,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0122,
  });
  useEffect(() => {
    if (coordinate) {
      setRegion(coordinate);
    } else {
      Geolocation.getCurrentPosition(position => {
        setRegion(prevState => ({
          ...prevState,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      });
    }
  }, [coordinate]);

  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={ref}
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        followsUserLocation
        showsMyLocationButton={showsMyLocationButton}
        onUserLocationChange={onLocationChange}
        initialRegion={region}
        region={region}>
        <>{children}</>
      </MapView>
    </View>
  );
});

export default Map;

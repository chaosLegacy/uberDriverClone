import React from 'react';
import styles from './styles';
import { Marker, LatLng } from 'react-native-maps';
import { Image } from 'react-native';
import { getImageByCarType } from '~/utils';

type MapMarkerProps = {
  coordinate: LatLng;
  title?: string;
  car?: {
    heading: number;
    type: string;
  };
};
const MapMarker = ({ coordinate, title, car }: MapMarkerProps) => {
  return (
    <Marker coordinate={coordinate} title={title}>
      {car && (
        <Image
          source={getImageByCarType(car.type, true)}
          style={[
            styles.marker,
            car.heading
              ? {
                  transform: [
                    {
                      rotate: `${car.heading}deg`,
                    },
                  ],
                }
              : {},
          ]}
        />
      )}
    </Marker>
  );
};

export default MapMarker;

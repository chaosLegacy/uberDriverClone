import React from 'react';
import MapViewDirections, {
  MapViewDirectionsOrigin,
  MapViewDirectionsDestination,
  MapDirectionsResponse,
} from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '@env';
import Colors from '~/constants/Colors';
import { MapDirectionProps } from '~/types';

type MapDirectionsProps = {
  origin?: MapViewDirectionsOrigin;
  destination?: MapViewDirectionsDestination;
  onDirectionChange?: ({
    distance,
    duration,
    coordinates,
  }: MapDirectionProps) => void;
};

const MapDirections = ({
  origin,
  destination,
  onDirectionChange,
}: MapDirectionsProps) => {
  const onReady = (...args: MapDirectionsResponse[]) => {
    const { distance, duration, coordinates } = args[0];
    onDirectionChange && onDirectionChange({ distance, duration, coordinates });
  };
  return (
    <MapViewDirections
      apikey={GOOGLE_MAPS_API_KEY}
      origin={origin}
      destination={destination}
      strokeWidth={4}
      strokeColor={Colors.black}
      onReady={onReady}
    />
  );
};

export default MapDirections;

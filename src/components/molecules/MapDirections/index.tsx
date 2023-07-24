import React from 'react';
import MapViewDirections, {
  MapViewDirectionsOrigin,
  MapViewDirectionsDestination,
} from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '@env';
import Colors from '~/constants/Colors';

type MapDirectionsProps = {
  origin?: MapViewDirectionsOrigin;
  destination?: MapViewDirectionsDestination;
};

const MapDirections = ({ origin, destination }: MapDirectionsProps) => {
  return (
    <MapViewDirections
      apikey={GOOGLE_MAPS_API_KEY}
      origin={origin}
      destination={destination}
      strokeWidth={4}
      strokeColor={Colors.black}
    />
  );
};

export default MapDirections;

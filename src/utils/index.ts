import { Dimensions } from 'react-native';
import { LatLng } from 'react-native-maps';

const getImageByCarType = (type: string, isMap?: boolean) => {
  switch (type) {
    case 'UberX':
      return isMap
        ? require('assets/images/top-UberX.png')
        : require('assets/images/UberX.jpeg');
    case 'Comfort':
      return isMap
        ? require('assets/images/top-Comfort.png')
        : require('assets/images/Comfort.jpeg');
    case 'UberXL':
      return isMap
        ? require('assets/images/top-UberXL.png')
        : require('assets/images/UberXL.jpeg');
  }
};

// Function to calculate the distance between two points
const calculateDistance = (point1: LatLng, point2: LatLng) => {
  const latDiff = point2.latitude - point1.latitude;
  const lngDiff = point2.longitude - point1.longitude;
  return Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
};

type moveBetweenTwoPointsProps = {
  speed?: number;
  duration?: number;
  minDistance?: number;
  currentPoint: LatLng;
  endPoint: LatLng;
  setPosition: (value: React.SetStateAction<LatLng | undefined>) => void;
};
const moveBetweenTwoPoints = ({
  speed = 0.2, // Adjust the speed as desired (higher value for faster movement)
  duration = 2000, // Update every 2 seconds
  minDistance = 0.0001,
  currentPoint,
  endPoint,
  setPosition,
}: moveBetweenTwoPointsProps): NodeJS.Timer => {
  const moveInterval = setInterval(() => {
    const distance = calculateDistance(currentPoint, endPoint);
    // If the distance is negligible, stop the movement
    if (distance < minDistance) {
      clearInterval(moveInterval);
      return;
    }

    // Calculate the movement increment
    const dx = (endPoint.latitude - currentPoint.latitude) * speed;
    const dy = (endPoint.longitude - currentPoint.longitude) * speed;

    // Update the currentPoint with the new position
    setPosition({
      latitude: currentPoint.latitude + dx,
      longitude: currentPoint.longitude + dy,
    });
  }, duration); // Update every 2 seconds
  return moveInterval;
};

const { width, height } = Dimensions.get('window');

export {
  getImageByCarType,
  calculateDistance,
  moveBetweenTwoPoints,
  width,
  height,
};

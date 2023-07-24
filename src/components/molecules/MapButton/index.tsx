import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '~/constants/Colors';

type MapButtonProps = {
  name: string;
  onPress: () => void;
  icon?: string;
  label?: string;
  color?: string;
  size?: number;
  position:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center';
};
const MapButton = ({
  onPress,
  icon,
  label,
  color,
  size,
  position,
}: MapButtonProps) => {
  if (!icon && !label) {
    return <View />;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        icon ? styles.roundedIconButton : styles.roundedTextButton,
        position === 'top-left'
          ? styles.topLeft
          : position === 'top-right'
          ? styles.topRight
          : position === 'bottom-left'
          ? styles.bottomLeft
          : position === 'bottom-right'
          ? styles.bottomRight
          : styles.bottomCenter,
      ]}>
      {icon && (
        <FontAwesome
          name={icon}
          size={size || 18}
          color={color || Colors.darkGray}
        />
      )}
      {label && <Text style={styles.textLabel}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default MapButton;

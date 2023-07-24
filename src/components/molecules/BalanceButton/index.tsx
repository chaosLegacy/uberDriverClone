import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type BalanceButtonProps = {
  balance: string;
  onPress: () => void;
};
const BalanceButton = ({ balance = '0.00', onPress }: BalanceButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.balanceContainer}>
      <Text style={styles.balanceCurrency}>$</Text>
      <Text style={styles.balanceText}>{balance}</Text>
    </TouchableOpacity>
  );
};

export default BalanceButton;

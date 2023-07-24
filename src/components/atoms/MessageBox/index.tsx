import { Text, View } from 'react-native';
import React from 'react';
import styles from './styles';

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dicta,
        ipsum qui eum accusantium ipsa quidem nostrum officia facilis.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default index;

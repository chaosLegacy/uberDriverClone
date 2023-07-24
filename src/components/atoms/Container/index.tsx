import { View } from 'react-native';
import React from 'react';
import GlobalStyles from '~/constants/GlobalStyles';

type IContainerProps = {
  children?: React.ReactNode;
};
const Container = ({ children }: IContainerProps) => {
  return <View style={GlobalStyles.container}>{children}</View>;
};

export default Container;

import React from 'react';
import Map from '~/components/molecules/Map';
import MessageBox from '~/components/atoms/MessageBox';
import Container from '~/components/atoms/Container';

const HomeScreen = () => {
  return (
    <Container>
      <Map />
      <MessageBox />
    </Container>
  );
};

export default HomeScreen;

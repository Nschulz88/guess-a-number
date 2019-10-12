// @flow

import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Header, Left, Title, Body, Right } from 'native-base';

type MainHeaderProps = {
  title: string,
};

const styles = StyleSheet.create({
  body: {
    flex: 3,
  },
  header: {
    height: 80,
    paddingTop: StatusBar.currentHeight,
  },
});

const MainHeader = ({ title }: MainHeaderProps): React.Node => {
  return (
    <Header style={styles.header}>
      <Left />
      <Body style={styles.body}>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

export default MainHeader;

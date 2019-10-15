/* eslint-disable react/require-default-props */
// @flow

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';

type BoldTextProps = {
  children: string | React.Node,
  style?: any,
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans_Bold',
  },
});

const BoldText = ({ children, style }: BoldTextProps): React.Node => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default BoldText;

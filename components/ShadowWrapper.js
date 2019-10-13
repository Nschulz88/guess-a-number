// @flow

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';

type ShadowWrapperProps = {
  style: Object,
  children: any,
};

const styles = StyleSheet.create({
  shadowWrapper: {
    shadowOpacity: 0.26,
    shadowRadius: 6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: '#fff',
    elevation: 6,
  },
});

const ShadowWrapper = ({ children, style }: ShadowWrapperProps): React.Node => {
  return <View style={{ ...styles.shadowWrapper, ...style }}>{children}</View>;
};

export default ShadowWrapper;

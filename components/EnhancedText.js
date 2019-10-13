/* eslint-disable react/require-default-props */
// @flow

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import colors from '../constants/colors';

type EnhancedTextContainerProps = {
  children: any,
};

const styles = StyleSheet.create({
  enhancedContainer: {
    borderRadius: 10,
    backgroundColor: colors.primary,
    padding: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
  },
});

const EnhancedTextContainer = ({
  children,
}: EnhancedTextContainerProps): React.Node => {
  return (
    <View style={styles.enhancedContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default EnhancedTextContainer;

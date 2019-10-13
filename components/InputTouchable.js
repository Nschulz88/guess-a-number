/* eslint-disable react/require-default-props */
// @flow

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Text } from 'native-base';

type InputTouchableProps = {
  containerStyle?: Object,
  textStyle?: Object,
  value: string,
  onPressHandler: Object => void,
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 20,
    paddingVertical: 10,
  },
});

const InputTouchable = ({
  value,
  containerStyle,
  textStyle,
  onPressHandler,
}: InputTouchableProps): React.Node => {
  return (
    <Item
      style={{ ...styles.inputContainer, ...containerStyle }}
      regular
      onPress={e => onPressHandler(e)}
    >
      <Text style={{ ...styles.textInput, ...textStyle }}>{value}</Text>
    </Item>
  );
};

export default InputTouchable;

// @flow

import * as React from 'react';
import range from 'lodash.range';
import { StyleSheet, View, Keyboard } from 'react-native';
import { Button, Item, Text } from 'native-base';
import PickerModal from '../modals/Picker';

const { useState } = React;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    alignItems: 'center',
    width: 300,
    maxWidth: '80%',
  },
  text: {
    fontFamily: 'Roboto_medium',
    fontSize: 20,
    padding: 10,
  },
  textInput: {
    width: 40,
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    paddingVertical: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
  },
});

const StartGameScreen = (): React.Node => {
  const [pickedNumber, setPickedNumber] = useState('?');
  const [showPickerModal, openModal] = useState(false);

  const handleNumberPicker = selection => {
    setPickedNumber(selection);
    setTimeout(() => openModal(false), 1500);
  };

  const numberOptions = range(1, 101);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.form}>
        <Text style={styles.text}>Select a number</Text>
        <Item
          regular
          onPress={e => {
            e.preventDefault();
            Keyboard.dismiss();
            openModal(true);
          }}
        >
          <Text style={styles.textInput}>{pickedNumber}</Text>
        </Item>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            danger
            onPress={() => {
              setPickedNumber('?');
            }}
          >
            <Text>Reset</Text>
          </Button>
          <Button style={styles.button} success>
            <Text>Confirm</Text>
          </Button>
        </View>
      </View>
      <PickerModal
        showPickerModal={showPickerModal}
        selectionOptionsArray={numberOptions}
        selectedValue={pickedNumber}
        setPickedNumber={handleNumberPicker}
        openModal={openModal}
      />
    </View>
  );
};

export default StartGameScreen;

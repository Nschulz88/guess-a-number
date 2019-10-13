// @flow

import * as React from 'react';
import range from 'lodash.range';
import { StyleSheet, Keyboard, Alert } from 'react-native';
import { Button, Text, View } from 'native-base';
import PickerModal from '../modals/Picker';
import ShadowWrapper from '../components/ShadowWrapper';
import InputTouchable from '../components/InputTouchable';
import EnhancedTextContainer from '../components/EnhancedText';

const { useState } = React;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    padding: 20,
    maxWidth: '80%',
    borderRadius: 10,
  },
  confirmationWrapper: {
    alignItems: 'center',
    padding: 20,
    maxWidth: '80%',
    borderRadius: 10,
    margin: 20,
  },
  mainText: {
    fontFamily: 'Roboto_medium',
    fontSize: 22,
    paddingBottom: 30,
  },
  subText: {
    fontSize: 18,
    padding: 10,
  },
  button: {
    marginHorizontal: 10,
    justifyContent: 'center',
    paddingVertical: 0,
    minWidth: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
  },
});

type StartGameScreenProps = {
  startGameHandler: (void | number) => void,
};

const StartGameScreen = ({
  startGameHandler,
}: StartGameScreenProps): React.Node => {
  const [enteredValue, setEnteredValue] = useState('?');
  const [pickedNumber, setPickedNumber] = useState();
  const [showPickerModal, openModal] = useState(false);
  const [confirmed, setConfirmation] = useState(false);

  const handleNumberPicker = selection => {
    setEnteredValue(selection);
    setTimeout(() => openModal(false), 1500);
  };

  const resetInputHandler = () => {
    setEnteredValue('?');
    setConfirmation(false);
  };

  const confirmationHandler = () => {
    if (enteredValue === '?') {
      Alert.alert('Invalid Number', 'Number has to be between 1 - 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      setConfirmation(false);
      return;
    }
    setConfirmation(true);
    setPickedNumber(parseInt(enteredValue, 10));
  };

  const numberOptions = range(1, 100);

  let confirmationToast;

  if (confirmed) {
    confirmationToast = (
      <ShadowWrapper style={styles.confirmationWrapper}>
        <Text>Your Choice:</Text>
        <EnhancedTextContainer>{enteredValue}</EnhancedTextContainer>
        <Button
          style={styles.button}
          success
          onPress={() => startGameHandler(pickedNumber)}
        >
          <Text>START GAME</Text>
        </Button>
      </ShadowWrapper>
    );
  }

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.mainText}>Start a new game!</Text>
      <ShadowWrapper style={styles.cardContainer}>
        <Text style={styles.subText}>Select a Number</Text>
        <InputTouchable
          value={enteredValue}
          onPressHandler={e => {
            e.preventDefault();
            Keyboard.dismiss();
            openModal(true);
          }}
        />
        <View style={styles.buttonContainer}>
          <Button style={styles.button} danger onPress={resetInputHandler}>
            <Text>Reset</Text>
          </Button>
          <Button style={styles.button} success onPress={confirmationHandler}>
            <Text>Confirm</Text>
          </Button>
        </View>
      </ShadowWrapper>
      {confirmationToast}
      <PickerModal
        showPickerModal={showPickerModal}
        selectionOptionsArray={numberOptions}
        selectedValue={enteredValue}
        setEnteredValue={handleNumberPicker}
        openModal={openModal}
      />
    </View>
  );
};

export default StartGameScreen;

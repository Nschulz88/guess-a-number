// @flow

import React, { useState } from 'react';
import { TextInput, StyleSheet, Button, View, Modal } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

type GoalInputProps = {
  onAddGoal: string => void,
  modalIsOpen: Boolean,
  isModalOpen: boolean => void,
};

const GoalInput = ({
  onAddGoal,
  modalIsOpen,
  isModalOpen,
}: // $FlowFixMe
GoalInputProps) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  const onAddHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={modalIsOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="Course Goal"
          style={styles.textInput}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => isModalOpen(false)}
            />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={onAddHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

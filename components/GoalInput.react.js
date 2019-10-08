// @flow

import React, { useState } from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

type GoalInputProps = {
  onAddGoal: string => void,
};

const GoalInput = ({
  onAddGoal,
}: // $FlowFixMe
GoalInputProps) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        placeholder="Course Goal"
        style={styles.textInput}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => onAddGoal(enteredGoal)} />
    </View>
  );
};

export default GoalInput;

// @flow

import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem.react';
import GoalInput from './components/GoalInput.react';

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
// $FlowFixMe
const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsOpen, setModalState] = useState(false);

  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setModalState(false);
  };

  const deleteGoalHandler = goalId => {
    setCourseGoals(currentGoals =>
      currentGoals.filter(item => item.key !== goalId),
    );
  };
  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setModalState(true)} />
      <GoalInput
        modalIsOpen={modalIsOpen}
        onAddGoal={addGoalHandler}
        isModalOpen={setModalState}
      />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem onDelete={deleteGoalHandler} item={itemData.item} />
        )}
      />
    </View>
  );
};

export default App;

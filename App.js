// @flow

import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

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

  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
  };
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem item={itemData.item.value} />}
      />
    </View>
  );
};

export default App;

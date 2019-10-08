// @flow

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

type GoalItemProps = {
  item: string,
};
// $FlowFixMe
const GoalItem = ({ item }: GoalItemProps) => {
  return (
    <View style={styles.listItem}>
      <Text>{item}</Text>
    </View>
  );
};

export default GoalItem;

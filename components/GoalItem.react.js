// @flow

import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

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
  onDelete: () => void,
};
// $FlowFixMe
const GoalItem = ({ item, onDelete }: GoalItemProps) => {
  return (
    <TouchableOpacity onPress={() => onDelete(item.key)}>
      <View style={styles.listItem}>
        <Text>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

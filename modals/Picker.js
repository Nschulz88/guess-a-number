// @flow

import * as React from 'react';
import { Picker, Modal, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 200,
  },
});

type PickerProps = {
  showPickerModal: boolean,
  selectionOptionsArray: Array<string>,
  selectedValue: string,
  setEnteredValue: string => void,
  openModal: boolean => void,
};

const PickerModal = ({
  showPickerModal,
  selectionOptionsArray,
  selectedValue,
  setEnteredValue,
  openModal,
}: PickerProps): React.Node => {
  const pickerSelection = selectionOptionsArray.map(selection => (
    <Picker.Item
      key={Math.random().toString()}
      label={selection.toString()}
      value={selection.toString()}
    />
  ));

  return (
    <Modal
      visible={showPickerModal}
      animationType="slide"
      onRequestClose={() => openModal(false)}
    >
      <View style={styles.modal}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 70, width: 100 }}
          onValueChange={itemValue => setEnteredValue(itemValue)}
        >
          {pickerSelection}
        </Picker>
      </View>
    </Modal>
  );
};

export default PickerModal;

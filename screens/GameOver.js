// @flow

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Button } from 'native-base';
import EnhancedText from '../components/EnhancedText';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
});

type GameOverProps = {
  playedRounds: number,
  startOver: () => void,
  computersGuess: number,
};

const GameOver = ({
  playedRounds,
  startOver,
  computersGuess,
}: GameOverProps): React.Node => {
  return (
    <View style={styles.screen}>
      <Text>Your Number is</Text>
      <EnhancedText>{computersGuess}</EnhancedText>
      <Text>I guessed it after only </Text>
      <Text>{playedRounds}</Text>
      <Text>rounds!</Text>
      <Text>I&apos;m a pretty smart computer...</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} info onPress={() => startOver()}>
          <Text>Play again!</Text>
        </Button>
      </View>
    </View>
  );
};

export default GameOver;

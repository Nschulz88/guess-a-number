/* eslint-disable global-require */
// @flow

import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
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
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
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
      <View style={styles.imageContainer}>
        <Image source={require('../assets/success.png')} style={styles.image} />
      </View>
      <Text>I guessed it after only {playedRounds} rounds! </Text>
      <Text>I&apos;m a pretty smart computer...</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} info onPress={startOver}>
          <Text>Play again!</Text>
        </Button>
      </View>
    </View>
  );
};

export default GameOver;

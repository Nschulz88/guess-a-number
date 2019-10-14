/* eslint-disable no-param-reassign */
// @flow

import * as React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Button, Text, View } from 'native-base';
import EnhancedText from '../components/EnhancedText';
import ShadowWrapper from '../components/ShadowWrapper';

const { useState, useRef, useEffect } = React;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    padding: 20,
    maxWidth: '80%',
    borderRadius: 10,
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

const generateRandomNumberBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  }
  return randomNumber;
};

type GameScreenProps = {
  usersPick: number,
  onGameOver: number => void,
};

const GameScreen = ({ usersPick, onGameOver }: GameScreenProps): React.Node => {
  const [numberGuess, setNumberGuess] = useState(
    generateRandomNumberBetween(0, 100, usersPick),
  );
  const [playedRounds, setPlayedRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (numberGuess === usersPick) {
      onGameOver(playedRounds);
    }
  }, [numberGuess, playedRounds, usersPick, onGameOver]);

  const nextGuessHandler = hint => {
    if (
      (hint === 'lower' && numberGuess < usersPick) ||
      (hint === 'higher' && numberGuess > usersPick)
    ) {
      Alert.alert('No cheating!', 'Point me in the right direction, please.');
      return;
    }
    if (hint === 'lower') {
      currentHigh.current = numberGuess;
    } else {
      currentLow.current = numberGuess;
    }
    const nextGuess = generateRandomNumberBetween(
      currentLow.current,
      currentHigh.current,
      numberGuess,
    );
    setNumberGuess(nextGuess);
    setPlayedRounds(playedRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Is this your number?</Text>
      <EnhancedText large>{numberGuess}</EnhancedText>
      <ShadowWrapper style={styles.cardContainer}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            danger
            onPress={() => nextGuessHandler('lower')}
          >
            <Text>Lower</Text>
          </Button>
          <Button
            style={styles.button}
            success
            onPress={() => nextGuessHandler('higher')}
          >
            <Text>Higher</Text>
          </Button>
        </View>
      </ShadowWrapper>
    </View>
  );
};

export default GameScreen;

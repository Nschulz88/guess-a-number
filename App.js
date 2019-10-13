/* eslint-disable global-require */
// @flow

import * as React from 'react';
import { AppLoading } from 'expo';
import { Container } from 'native-base';
import * as Font from 'expo-font';

import MainHeader from './components/MainHeader';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOver';

const { useState } = React;

const App = (): React.Node => {
  const [isReady, setAppReadyState] = useState(false);
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = pickedNumber => {
    setUserNumber(pickedNumber);
    setNumberOfRounds(0);
  };

  const resetGame = () => {
    setUserNumber();
  };

  const gameOverHandler = rounds => {
    setNumberOfRounds(rounds);
  };

  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    setAppReadyState(true);
  };

  loadFonts();

  const renderGameScreen = (currentRounds, number) => {
    if (currentRounds <= 0) {
      return <GameScreen usersPick={number} onGameOver={gameOverHandler} />;
    }
    return (
      <GameOverScreen
        startOver={resetGame}
        playedRounds={numberOfRounds}
        computersGuess={number}
      />
    );
  };

  const activeScreen = userNumber ? (
    renderGameScreen(numberOfRounds, userNumber)
  ) : (
    <StartGameScreen startGameHandler={startGameHandler} />
  );

  return !isReady ? (
    <AppLoading />
  ) : (
    <Container>
      <MainHeader title="Guess a number" />
      {activeScreen}
    </Container>
  );
};

export default App;

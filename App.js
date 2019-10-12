/* eslint-disable global-require */
// @flow

import * as React from 'react';
import { AppLoading } from 'expo';
import { Container } from 'native-base';
import * as Font from 'expo-font';

import MainHeader from './components/MainHeader';
import StartGameScreen from './screens/StartGameScreen';

const { useState } = React;

const App = (): React.Node => {
  const [isReady, setAppReadyState] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    setAppReadyState(true);
  };

  loadFonts();

  return !isReady ? (
    <AppLoading />
  ) : (
    <Container>
      <MainHeader title="Guess a number" />
      <StartGameScreen />
    </Container>
  );
};

export default App;

import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { theme } from '~/global/theme';
import Navigation from '~/navigation';

import ApplicationState from './store/ApplicationState';

const App: FC = () => {
  const { mode } = useSelector((store: ApplicationState) => store.settings);

  return (
    <ThemeProvider theme={theme[mode]}>
      <StatusBar
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme[mode].colors.primary}
      />
      <Navigation />
    </ThemeProvider>
  );
};

export default App;

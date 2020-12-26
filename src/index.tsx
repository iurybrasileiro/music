import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import dark from '~/global/theme/dark';

import Navigation from '~/navigation';

const App: FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={dark.colors.primary}
      />
      <Navigation />
    </ThemeProvider>
  );
};

export default App;

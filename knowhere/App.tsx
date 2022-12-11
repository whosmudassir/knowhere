import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import Welcome from './src/screens/Welcome';
import {theme} from './src/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Welcome />
    </NativeBaseProvider>
  );
}

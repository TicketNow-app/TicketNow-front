import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold, useFonts
} from '@expo-google-fonts/roboto';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { Routes } from './src/routes';

import { AuthProvider } from './src/hooks/auth';

export default function App() {
  //verify if fonts are loaded
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

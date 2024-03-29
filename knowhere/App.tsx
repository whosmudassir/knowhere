import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import {theme} from './src/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import {triggerSignUpActionSheet} from './src/store';

const Stack = createNativeStackNavigator();

export default function App() {
  const isSignUpActionSheetOpen = triggerSignUpActionSheet(
    state => state.isSignUpActionSheetOpen,
  );

  const closeSignUpActionSheet = triggerSignUpActionSheet(
    state => state.closeSignUpActionSheet,
  );

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <Login
          isLoginOpen={isSignUpActionSheetOpen}
          onLoginClose={() => closeSignUpActionSheet()}
        />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

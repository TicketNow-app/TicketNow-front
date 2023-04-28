import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { RegisterSecondStep } from '../screens/RegisterSecondStep';

import {RegisterTemporaryProvider} from '../contexts/registerTemporary'

const { Screen, Navigator } = createNativeStackNavigator();


export function AuthRoutes() {
  return (
    <RegisterTemporaryProvider>
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Screen name="Register" component={Register} />
        <Screen name="RegisterSecondStep" component={RegisterSecondStep} />
        <Screen name="Login" component={Login} />
      </Navigator>
    </RegisterTemporaryProvider>
  );
}

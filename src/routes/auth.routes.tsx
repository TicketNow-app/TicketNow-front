import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';

const { Screen, Navigator } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      {/* <Screen name="Register" component={Register} />
      <Screen name="RegisterSecondStep" component={RegisterSecondStep} /> */}
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}

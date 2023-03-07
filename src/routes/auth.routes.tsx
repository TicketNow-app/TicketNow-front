import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { RegisterSecondStep } from '../screens/RegisterSecondStep';
import { AppRoutes } from './app.routes';

const { Screen, Navigator } = createNativeStackNavigator();

export function AuthRoutes() {
  const signed = true;
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {signed ?
        (
          <>
            <Screen name="AppRoutes" component={AppRoutes} />
          </>
        ) : (
          <>
            <Screen name="Register" component={Register} />
            <Screen name="RegisterSecondStep" component={RegisterSecondStep} />
            <Screen name="Login" component={Login} />
          </>
        )}
    </Navigator>
  );
}

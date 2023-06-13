import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegistrationProvider } from '../hooks/registerProcess';

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { RegisterSecondStep } from '../screens/RegisterSecondStep';
import { TermsOfUse } from '../screens/TermsOfUse';

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
      <Screen name="Register">
        {() => (
          <RegistrationProvider>
            <Register />
          </RegistrationProvider>
        )}
      </Screen>
      <Screen name="RegisterSecondStep">
        {() => (
          <RegistrationProvider>
            <RegisterSecondStep />
          </RegistrationProvider>
        )}
      </Screen>
      <Screen name="Login" component={Login} />
      <Screen name="TermsOfUse" component={TermsOfUse} />
    </Navigator>
  );
}

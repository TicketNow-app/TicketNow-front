import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthRoutes } from './auth.routes';
import { StackRoutes } from './stack.routes';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="AuthRoutes" component={AuthRoutes} />
        <Screen name="StackRoutes" component={StackRoutes} />
      </Navigator>
    </NavigationContainer>
  );
}

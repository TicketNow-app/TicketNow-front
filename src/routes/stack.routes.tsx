import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoutes } from './app.routes';
import { Event } from '../screens/Event';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="AppRoutes" component={AppRoutes} />
      <Screen name="Event" component={Event} />
    </Navigator>
  );
}

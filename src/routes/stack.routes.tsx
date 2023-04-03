import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Event } from '../screens/Event';
import { FriendsList } from '../screens/FriendsList';
import { AppRoutes } from './app.routes';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="AppRoutes" component={AppRoutes} />
      <Screen name="Event" component={Event} />
      <Screen name="FriendsList" component={FriendsList} />
    </Navigator>
  );
}

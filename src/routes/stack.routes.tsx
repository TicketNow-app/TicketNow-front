import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Settings } from '../screens/Settings';
import { Ticket } from '../screens/Ticket';
import { TicketsList } from '../screens/TicketsList';
import { AppRoutes } from './app.routes';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="AppRoutes" component={AppRoutes} />
      <Screen name="Ticket" component={Ticket} />
      <Screen name="TicketsList" component={TicketsList} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
}

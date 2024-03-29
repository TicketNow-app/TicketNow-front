import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoutes } from './app.routes';
import { AboutPromoters } from '../screens/AboutPromoters';
import { Event } from '../screens/Event';
import { FriendsList } from '../screens/FriendsList';
import { FriendView } from '../screens/FriendView';
import { Settings } from '../screens/Settings';
import { TermsOfUse } from '../screens/TermsOfUse';
import { Ticket } from '../screens/Ticket';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="AppRoutes" component={AppRoutes} />
      <Screen name="Ticket" component={Ticket} />
      <Screen name="Event" component={Event} />
      <Screen name="FriendsList" component={FriendsList} />
      <Screen name="Settings" component={Settings} />
      <Screen name="FriendView" component={FriendView} />
      <Screen name="TermsOfUse" component={TermsOfUse} />
      <Screen name="AboutPromoters" component={AboutPromoters} />
    </Navigator>
  );
}

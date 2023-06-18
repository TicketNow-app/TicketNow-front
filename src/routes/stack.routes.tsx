import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoutes } from './app.routes';
import { AboutPromoters } from '../screens/AboutPromoters';
import { EditPassword } from '../screens/EditPassword';
import { EditProfile } from '../screens/EditProfile';
import { Event } from '../screens/Event';
import { FriendsList } from '../screens/FriendsList';
import { FriendView } from '../screens/FriendView';
import { Settings } from '../screens/Settings';
import { TermsOfUse } from '../screens/TermsOfUse';
import { Ticket } from '../screens/Ticket';
import { TicketsSold } from '../screens/TicketsSold';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="AppRoutes" component={AppRoutes} />
      <Screen name="Ticket" component={Ticket} />
      <Screen name="Event" component={Event} />
      <Screen name="FriendsList" component={FriendsList} />
      <Screen name="Settings" component={Settings} />
      <Screen name="TicketsSold" component={TicketsSold} />
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="EditPassword" component={EditPassword} />
      <Screen name="FriendView" component={FriendView} />
      <Screen name="TermsOfUse" component={TermsOfUse} />
      <Screen name="AboutPromoters" component={AboutPromoters} />
    </Navigator>
  );
}

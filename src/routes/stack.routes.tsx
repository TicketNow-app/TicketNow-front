import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Event } from '../screens/Event';
import { Ticket } from '../screens/Ticket';
import { FriendsList } from '../screens/FriendsList';
import { Settings } from '../screens/Settings';
import { SelectTicket } from '../screens/SelectTicket';
import { PaymentMethod } from '../screens/PaymentMethod';
import { PaymentCompleted } from '../screens/PaymentCompleted';
import { AppRoutes } from './app.routes';
import { AboutPromoters } from '../screens/AboutPromoters';

import { FriendView } from '../screens/FriendView';

import { TermsOfUse } from '../screens/TermsOfUse';

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
      <Screen name="SelectTicket" component={SelectTicket} />
      <Screen name="PaymentMethod" component={PaymentMethod} />
      <Screen name="PaymentCompleted" component={PaymentCompleted} />
    </Navigator>
  );
}

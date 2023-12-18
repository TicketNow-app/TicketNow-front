import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { StackRoutes } from './stack.routes';

import { useAuth } from '../hooks/auth';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>{user?.User?.id ? <StackRoutes /> : <AuthRoutes />}</NavigationContainer>
  );
}

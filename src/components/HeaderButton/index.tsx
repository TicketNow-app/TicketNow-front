import { View } from 'react-native';
import { } from "react-native-heroicons/outline";

import { Button } from './styles';

export function HeaderButton({ children, ...rest }) {
  return (
    <Button>
      {children}
    </Button>
  );
}

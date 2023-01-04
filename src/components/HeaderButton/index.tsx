import { Button } from './styles';

export function HeaderButton({ children, ...rest }) {
  return (
    <Button>
      {children}
    </Button>
  );
}

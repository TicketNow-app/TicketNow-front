import { Button } from './styles';

export function HeaderButton({ children, ...rest }) {
  return (
    <Button {...rest}>
      {children}
    </Button>
  );
}

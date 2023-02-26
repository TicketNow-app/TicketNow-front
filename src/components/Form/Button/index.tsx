import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  icon?: React.ReactNode;
}

export function Button({ title, icon, ...rest }: ButtonProps) {
  return (
    <Container {...rest} activeOpacity={0.6}>
      {icon}
      <Title>{title}</Title>
    </Container>
  );
}

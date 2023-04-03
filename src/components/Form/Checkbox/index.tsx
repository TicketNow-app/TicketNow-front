import { CheckboxProps } from 'expo-checkbox';
import React from 'react';

import { Container } from './styles';


export function Checkbox({ ...rest }: CheckboxProps) {
  return (
    <Container {...rest}>
    </Container >
  );
}

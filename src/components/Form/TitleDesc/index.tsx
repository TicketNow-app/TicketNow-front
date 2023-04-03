import React from 'react';

import { Container, Description, Title } from './styles';

interface TitleDescProps {
  title: string;
  desc: string;
}

export function TitleDesc({ title, desc }: TitleDescProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{desc}</Description>
    </Container>
  );
}

import React, { useState } from 'react';
import { ButtonPill, TextPill } from './styles';

interface PillProps {
  title: string;
}

export function Pill({ title }: PillProps) {
  const [selected, setSelected] = useState(false);

  return (
    <ButtonPill onPress={() => setSelected(!selected)} selected={selected}>
      <TextPill>
        {title}
      </TextPill>
    </ButtonPill>
  )
}

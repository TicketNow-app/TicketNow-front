import React from 'react';
import { Input } from './styles';

interface InputSearchProps {
  placeholderText?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export default function InputSearch({ placeholderText, iconLeft, iconRight }: InputSearchProps) {
  return (
    <Input placeholder={placeholderText}>
      {iconLeft}
      {iconRight}
    </Input>
  );
}

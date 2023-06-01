import React from "react";
import { View } from "react-native";

interface FlatListDivisorProps {
  orientation: 'horizontal' | 'vertical';
  size: number;
}

export function FlatListDivisor({ orientation, size }: FlatListDivisorProps) {
  return (
    <View style={{ width: orientation === 'horizontal' ? size : 1, height: orientation === 'vertical' ? size : 1 }} />
  );
}

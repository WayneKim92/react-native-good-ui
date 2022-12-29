import React from 'react';
import { View } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function Hello() {
  return <View>Hello World</View>;
}

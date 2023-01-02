import React from 'react';
import { View, Text } from 'react-native';

export * from './components';
export * from './utils';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function Hello() {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}

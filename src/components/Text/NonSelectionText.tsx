import React from 'react';
import { Platform, TextStyle } from 'react-native';
import { Text, TextProps } from './Text';

export const NonSelectionText = (props: TextProps) => {
  const { children, style, ...otherProps } = props;
  const textStyle = Platform.select({
    web: {
      userSelect: 'none',
    },
  }) as TextStyle;

  return (
    <Text style={[textStyle, style]} {...otherProps}>
      {children}
    </Text>
  );
};

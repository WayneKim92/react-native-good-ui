import React from 'react';
import { Platform, Text, TextProps, TextStyle } from 'react-native';

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

import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';

type TextPreset =
  | 'body1'
  | 'body2'
  | 'header1'
  | 'header2'
  | 'header3'
  | 'header4'
  | 'header5'
  | 'header6'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'overline';

type TextStyles = {
  [key in TextPreset]: TextStyle;
};

interface TextProps extends TextStyle {
  preset?: TextPreset;
  style?: TextStyle;
  children: string;
}

const presetStyles: TextStyles = {
  body1: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  body2: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20.02,
    letterSpacing: 0.17,
  },
  header1: {
    fontWeight: '300',
    fontSize: 96,
    lineHeight: 112.03,
    letterSpacing: -1.5,
  },
  header2: {
    fontWeight: '300',
    fontSize: 60,
    lineHeight: 72,
    letterSpacing: -0.5,
  },
  header3: {
    fontWeight: '400',
    fontSize: 48,
    lineHeight: 56.02,
    letterSpacing: 0,
  },
  header4: {
    fontWeight: '400',
    fontSize: 34,
    lineHeight: 41.99,
    letterSpacing: 0.25,
  },
  header5: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 32.02,
    letterSpacing: 0,
  },
  header6: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21.98,
    letterSpacing: 0.1,
  },
  caption: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 19.92,
    letterSpacing: 0.4,
  },
  overline: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 31.92,
    letterSpacing: 1,
  },
};

export function Text(props: TextProps) {
  const { preset = 'body1', style, children, ...otherProps } = props;

  const textStyle = [presetStyles[preset], style];

  return (
    <RNText style={textStyle} {...otherProps}>
      {children}
    </RNText>
  );
}

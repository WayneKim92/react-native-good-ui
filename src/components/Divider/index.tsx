import React from 'react';
import type { ColorValue, ViewStyle } from 'react-native';
import { Column, Flex } from '../Layout';
import { Text } from '../Text';
import { colors } from '../../theme';
import { EdgeInsets } from '../../utils';

import type { EdgeInsetsPreset } from '../../theme/edgeInsets';

interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  thickness?: number;
  text?: string;
  color?: ColorValue;
  textEdgeInsets?: EdgeInsetsPreset;
}

export function Divider(props: DividerProps) {
  const {
    direction = 'horizontal',
    thickness = 2,
    textEdgeInsets,
    color,
    text,
    ...otherProps
  } = props;

  const containerStyle: ViewStyle = {
    flexGrow: direction === 'vertical' && text ? 1 : undefined,
    flexShrink: direction === 'vertical' && text ? 1 : undefined,
    justifyContent: 'center',
    alignItems: 'center',
    width: direction === 'vertical' ? 'auto' : '100%',
  };
  const dividerStyle: ViewStyle = {
    flexGrow: 1,
    flexShrink: 1,
    width: direction === 'horizontal' ? undefined : thickness,
    height: direction === 'horizontal' ? thickness : undefined,
    backgroundColor: color ? color : colors.palette.neutral300,
  };
  const edgeInsets = textEdgeInsets
    ? direction === 'vertical'
      ? EdgeInsets.vertical(textEdgeInsets)
      : EdgeInsets.horizontal(textEdgeInsets)
    : undefined;

  const divider = (
    <Flex
      direction={direction === 'horizontal' ? 'column' : 'row'}
      style={dividerStyle}
      {...otherProps}
    />
  );

  return (
    <Flex
      style={containerStyle}
      direction={direction === 'horizontal' ? 'row' : 'column'}
    >
      {divider}
      {text ? (
        <>
          <Column edgeInsets={edgeInsets}>
            <Text>{text}</Text>
          </Column>
          {divider}
        </>
      ) : undefined}
    </Flex>
  );
}

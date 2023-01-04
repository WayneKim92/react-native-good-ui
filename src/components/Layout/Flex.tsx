import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { generateRound, generateShadow } from '../../utils/styles';

import type { ViewStyle, FlexStyle } from 'react-native';
import type { AnimatedStyle } from 'react-native-reanimated/lib/types';
import type { Round } from '../../theme/round';
import type { IntRange } from '../../utils/types';
import type { RoundShape } from '../../utils/styles';

interface NonAnimatedFlexProps {
  animatable?: never;
  direction?: 'column' | 'row';
  style?: ViewStyle | ViewStyle[];
  elevation?: IntRange<1, 25>;
  round?: Round;
  roundShape?: RoundShape;
  children?: Element | Element[] | undefined;
  justifyContent?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['justifyContent'];
  flexBasis?: FlexStyle['flexBasis'];
  flexGrow?: FlexStyle['flexGrow'];
  flexShrink?: FlexStyle['flexShrink'];
  flexWrap?: FlexStyle['flexWrap'];
}

interface AnimatedFlexProps
  extends Omit<NonAnimatedFlexProps, 'style' | 'animatable'> {
  animatable: boolean;
  style?: AnimatedStyle;
}

export type FlexProps = NonAnimatedFlexProps | AnimatedFlexProps;

export function Flex(props: FlexProps) {
  const {
    animatable = false,
    direction = 'column',
    style,
    elevation,
    round,
    roundShape = 'all',
    ...rest
  } = props;

  const shadowStyle = elevation ? generateShadow(elevation) : {};
  const roundStyle = generateRound(round, roundShape);
  const viewStyle: ViewStyle = {
    flexDirection: direction,
    ...shadowStyle,
    ...roundStyle,
  };

  // highest priority && "as" to type
  const animatedStyle = style as Animated.AnimateStyle<ViewStyle>;
  const normalStyle = style as ViewStyle;

  return animatable ? (
    <Animated.View style={[viewStyle, animatedStyle]} {...rest} />
  ) : (
    <View style={[viewStyle, normalStyle]} {...rest} />
  );
}

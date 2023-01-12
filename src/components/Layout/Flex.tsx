import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { generateRound, generateShadow } from '../../utils/styles';

import type { ReactElement } from 'react';
import type { ViewStyle, FlexStyle } from 'react-native';
import type { AnimatedStyle } from 'react-native-reanimated/lib/types';
import type { Round } from '../../theme/round';
import type { IntRange } from '../../utils/types';
import type { RoundShape } from '../../utils/styles';

export interface EdgeInsets {
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
}

interface NonAnimatedFlexProps {
  animatable?: never;
  direction?: 'column' | 'row';
  style?: ViewStyle | ViewStyle[];
  elevation?: IntRange<1, 25>;
  // TODO: Refactor round for convenient. Refer to edgeInsets
  round?: Round;
  roundShape?: RoundShape;
  children?: Element | Element[] | ReactElement | ReactElement[] | undefined;
  justifyContent?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['justifyContent'];
  flexBasis?: FlexStyle['flexBasis'];
  flexGrow?: FlexStyle['flexGrow'];
  flexShrink?: FlexStyle['flexShrink'];
  flexWrap?: FlexStyle['flexWrap'];
  edgeInsets?: EdgeInsets;
}

interface AnimatedFlexProps
  extends Omit<NonAnimatedFlexProps, 'style' | 'animatable'> {
  animatable: boolean;
  style?: AnimatedStyle;
}

export type FlexProps = NonAnimatedFlexProps | AnimatedFlexProps;

// TODO: add insets prop to set padding.
export function Flex(props: FlexProps) {
  const {
    animatable = false,
    direction = 'column',
    style,
    elevation,
    round,
    roundShape = 'all',
    edgeInsets = {},
    ...rest
  } = props;

  const shadowStyle = elevation ? generateShadow(elevation) : {};
  const roundStyle = generateRound(round, roundShape);
  const viewStyle: ViewStyle = {
    flexDirection: direction,
    ...shadowStyle,
    ...roundStyle,
    ...edgeInsets,
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

/**
 * If you non-experienced jsDoc, refer to https://devhints.io/jsdoc
 */

import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Spacing, spacing } from '../../theme';
import { isNilOrEmpty } from '../../utils';

interface SpacerDirection {
  /**
   * direction prop determines the direction of the Spacer.
   * @default: 'both'
   */
  direction?: 'both' | 'vertical' | 'horizontal';
}

interface FlexSpacerProps extends SpacerDirection {
  /**
   * flex type is joint 1st place priority. Strictly speaking, this is First.
   * If you don't know flex layout, Reference https://reactnative.dev/docs/flexbox.
   */
  flex: number;
  /**
   * When using the above props, you should never use any other props.
   */
  preset?: never;
  size?: never;
}

interface PresetSpacerProps extends SpacerDirection {
  /**
   * preset type is joint 1st place priority.
   */
  preset: Spacing;
  /**
   * When using the above props, you should never use any other props.
   */
  flex?: never;
  size?: never;
}

interface SizeSpacerProps extends SpacerDirection {
  /**
   * size has the lowest priority.
   * because The use of size is not recommended because UI & UX quality is often poor.
   */
  size?: number;
  /**
   * When using the above props, you should never use any other props.
   */
  preset?: never;
  flex?: never;
}

type SpacerProps = PresetSpacerProps | FlexSpacerProps | SizeSpacerProps;

/**
 * The Spacer component is responsible for handling the space UI.
 * This component can create 3 types of spaces that is flex, preset and size type.
 * You should avoid using "size" prop that allow input in units of "pixels" for coherent spatial processing.
 */
export function Spacer(props: SpacerProps) {
  const { direction = 'both', flex, preset, size: pixelSize, ...rest } = props;

  const presetSize = preset ? spacing[preset] : undefined;
  const value = presetSize ? presetSize : pixelSize;

  const style: ViewStyle = {
    flex: flex ? flex : undefined,
    width:
      direction === 'both' || direction === 'horizontal' ? value : undefined,
    height:
      direction === 'both' || direction === 'vertical' ? value : undefined,
  };

  if (__DEV__ && isNilOrEmpty(value)) {
    console.warn(`Spacer component's value is nil or empty!`);
  }

  return <View style={style} {...rest} />;
}

import { includes } from 'ramda';
import { round } from '../../theme/round';

import type { ViewStyle } from 'react-native';
import type { Round } from '../../theme/round';

/**
 * Other undefined shapes are not recommended.
 * Considering consistent UI & UX, how often do you give rounds diagonally?
 */
export type RoundShape =
  | 'all'
  | 'topEdge'
  | 'bottomEdge'
  | 'leftEdge'
  | 'rightEdge';

export const generateRound = (
  roundSize: Round | undefined,
  roundShape: RoundShape | undefined
) => {
  const size = roundSize ? round[roundSize] : undefined;
  const allRoundStyle: ViewStyle = { borderRadius: size };
  const eachRoundStyle: ViewStyle = {
    borderTopLeftRadius: includes(roundShape, ['leftEdge', 'topEdge'])
      ? size
      : undefined,
    borderTopRightRadius: includes(roundShape, ['topEdge', 'rightEdge'])
      ? size
      : undefined,
    borderBottomLeftRadius: includes(roundShape, ['bottomEdge', 'leftEdge'])
      ? size
      : undefined,
    borderBottomRightRadius: includes(roundShape, ['bottomEdge', 'rightEdge'])
      ? size
      : undefined,
  };

  return roundShape === 'all' ? allRoundStyle : eachRoundStyle;
};

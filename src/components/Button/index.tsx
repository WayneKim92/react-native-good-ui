import React from 'react';
import { StyleSheet, Pressable, ViewStyle } from 'react-native';
import { Row } from '../Layout';
import { EdgeInsets } from '../../utils';
import { colors } from '../../theme';
import { NonSelectionText } from '../Text';
import type { Round } from '../../theme/round';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  round?: Round;
}

export function Button(props: ButtonProps) {
  const { text, onPress, round = 'small', style } = props;

  return (
    <Pressable onPress={onPress}>
      <Row
        elevation={1}
        round={round}
        justifyContent={'center'}
        edgeInsets={EdgeInsets.all('small')}
        style={[styles.container, style]}
      >
        <NonSelectionText style={styles.text}>{text}</NonSelectionText>
      </Row>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette.primary500,
  },
  text: {
    color: colors.palette.neutral100,
  },
});

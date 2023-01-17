import React from 'react';
import { StyleSheet, Pressable, ViewStyle } from 'react-native';
import { Row } from '../Layout';
import { EdgeInsets } from '../../utils';
import { colors } from '../../theme';
import { NonSelectionText } from '../Text';
import type { Round } from '../../theme/round';
import {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  round?: Round;
}

export function Button(props: ButtonProps) {
  const { text, onPress, round = 'small', style } = props;

  const sharedOpacity = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: sharedOpacity.value,
  }));

  return (
    <Pressable
      onPress={() => {
        sharedOpacity.value = withSequence(
          withTiming(0, { duration: 50 }),
          withTiming(1)
        );
        onPress();
      }}
    >
      <Row
        animatable={true}
        elevation={1}
        round={round}
        justifyContent={'center'}
        edgeInsets={EdgeInsets.all('small')}
        style={[styles.container, style, animatedStyle]}
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

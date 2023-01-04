import React, { useState } from 'react';
import { Button, StyleSheet, Text, ViewStyle } from 'react-native';
import { Column, Row, Spacer, storage } from 'react-native-good-ui';
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import type { AnimateStyle } from 'react-native-reanimated';

const storageKey = '@storage_test';

export default function App() {
  const [storageValue, setStorageValue] = useState('');

  React.useEffect(() => {
    const fetch = async () => {
      const aStorage = await storage.load(storageKey);

      if (aStorage) {
        setStorageValue(
          `Storage Value : ${aStorage}, but it will be removed  in the next run.`
        );
        await storage.remove(storageKey);
      } else {
        await storage.save(storageKey, 'hello world');
        setStorageValue(
          `Storage Value : null,  but It will be present in the next run.`
        );
      }
    };

    fetch().then();
  }, []);

  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    } as AnimateStyle<ViewStyle>;
  });

  return (
    <Column style={styles.container}>
      <Spacer direction={'both'} preset={'huge'} />

      <Text>{storageValue}</Text>

      <Spacer direction={'both'} preset={'huge'} />

      <Row
        animatable={true}
        elevation={24}
        round={'medium'}
        roundShape={'all'}
        style={[styles.box, animatedStyles]}
      />

      <Spacer direction={'both'} preset={'large'} />
      <Button
        onPress={() => {
          offset.value = withSpring(Math.random() * 255);
        }}
        title="Move"
      />
    </Column>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#6DB32A',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

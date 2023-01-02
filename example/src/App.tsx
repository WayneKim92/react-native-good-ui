import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {
  multiply,
  Hello,
  Spacer,
  save,
  load,
  remove,
} from 'react-native-good-ui';
import { useState } from 'react';

const storageKey = '@storage_test';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [storageValue, setStorageValue] = useState('');

  React.useEffect(() => {
    multiply(3, 7).then(setResult);

    const fetch = async () => {
      const aStorage = await load(storageKey);

      if (aStorage) {
        setStorageValue(
          `Storage Value : ${aStorage}, but it will be removed  in the next run.`
        );
        await remove(storageKey);
      } else {
        await save(storageKey, 'hello world');
        setStorageValue(
          `Storage Value : null,  but It will be present in the next run.`
        );
      }
    };

    fetch().then();
  }, []);

  return (
    <View style={styles.container}>
      <Hello />

      <Spacer direction={'both'} preset={'huge'} />

      <Text>{storageValue}</Text>

      <Spacer direction={'both'} preset={'huge'} />

      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

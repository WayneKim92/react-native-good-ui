import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Row } from '../Layout';
import { EdgeInsets } from '../../utils';
import { colors } from '../../theme';

interface InputProps {
  placeholder?: string;
  value?: string;
  onSubmit?: (event: any) => void;
}

export function Input(props: InputProps) {
  const { placeholder, value, onSubmit } = props;

  const [currentValue, setCurrentValue] = useState(value);

  const onSubmitEditing = (event: any) => {
    onSubmit && onSubmit(event);
  };

  const textInputStyle = {
    color:
      currentValue === ''
        ? colors.palette.neutral500
        : colors.palette.neutral900,
  };

  return (
    <Row
      justifyContent={'center'}
      edgeInsets={EdgeInsets.all('small')}
      style={styles.container}
    >
      <TextInput
        placeholder={placeholder}
        style={textInputStyle}
        value={currentValue || ''}
        onChangeText={(changedText) => setCurrentValue(changedText)}
        onSubmitEditing={onSubmitEditing}
      />
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.palette.neutral300,
  },
});

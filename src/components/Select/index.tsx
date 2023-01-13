import React, { useState } from 'react';
import {
  Pressable,
  Text,
  ViewStyle,
  Platform,
  StyleSheet,
  TextProps,
} from 'react-native';
import { Column, Row } from '../Layout';
import { EdgeInsets } from '../../utils';

// TODO: Support mobile

// @ts-ignore
const NonSelectionText = ({ children, ...otherProps }: TextProps) => (
  <Text
    // @ts-ignore
    style={Platform.select({
      web: {
        userSelect: 'none',
      },
    })}
    {...otherProps}
  >
    {children}
  </Text>
);

interface SelectProps {
  autoOptionsOpen?: boolean;
  width?: 'auto' | number;
  option?: string;
  options: string[];
  onPress?: () => void;
  onSelect: (option: string) => void;
  style?: ViewStyle;
}

export function Select(props: SelectProps) {
  const {
    autoOptionsOpen = true,
    width = 'auto',
    options,
    onPress,
    onSelect,
  } = props;

  const [currentOption, setCurrentOption] = useState(options[0]);
  const [optionVisible, setOptionVisible] = useState(false);
  const [optionTopPosition, setOptionTopPosition] = useState(0);

  const commonEdgeInsets = EdgeInsets.fromVH('small', 'small');
  const processOptionTopPosition = (event: {
    nativeEvent: { layout: { height: any } };
  }) => {
    setOptionTopPosition(event.nativeEvent.layout.height);
  };
  const onSelectPress = () => {
    onPress && onPress();
    setOptionVisible((prevValue) => !prevValue);
  };

  return (
    <Column
      style={styles.container}
      onMouseEnter={() => autoOptionsOpen && setOptionVisible(true)}
      onMouseLeave={() => autoOptionsOpen && setOptionVisible(false)}
    >
      <Pressable onPress={onSelectPress}>
        <Column
          edgeInsets={commonEdgeInsets}
          justifyContent={'center'}
          style={[
            styles.selectContainer,
            { width: width === 'auto' ? undefined : width },
          ]}
          onLayout={processOptionTopPosition}
        >
          <NonSelectionText>{currentOption}</NonSelectionText>
        </Column>
      </Pressable>

      {optionVisible ? (
        <Column style={[styles.optionContainer, { top: optionTopPosition }]}>
          {options.map((option, index) => (
            <Pressable
              // @ts-ignore
              onPress={() => {
                setOptionVisible(false);
                setCurrentOption(options[index]);
                onSelect(options[index] as string);
              }}
              key={index}
            >
              <Row edgeInsets={commonEdgeInsets} style={[styles.option]}>
                <NonSelectionText numberOfLines={1}>{option}</NonSelectionText>
              </Row>
            </Pressable>
          ))}
        </Column>
      ) : null}
    </Column>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  selectContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  optionContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
  },
  option: {
    borderBottomWidth: 1,
    borderColor: 'gary',
  },
});
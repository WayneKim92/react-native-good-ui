import React, { useState } from 'react';
import { Pressable, ViewStyle, StyleSheet } from 'react-native';
import { EdgeInsets } from '../../utils';
import { colors, ZIndex } from '../../theme';
import { Column, Row } from '../Layout';
import { Icon } from '../Icon';
import { Spacer } from '../Spacer';
import { NonSelectionText } from '../Text';

// TODO: Support mobile

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
    autoOptionsOpen = false,
    width = 'auto',
    style,
    options,
    onPress,
    onSelect,
  } = props;

  const [currentOption, setCurrentOption] = useState(options[0]);
  const [optionVisible, setOptionVisible] = useState(false);
  const [optionTopPosition, setOptionTopPosition] = useState(0);

  const commonEdgeInsets = EdgeInsets.fromVH('small', 'small');
  const processOptionTopPosition = (event: {
    nativeEvent: { layout: { height: any; width: any } };
  }) => {
    setOptionTopPosition(event.nativeEvent.layout.height);
  };
  const onSelectPress = () => {
    onPress && onPress();
    setOptionVisible((prevValue) => !prevValue);
  };

  return (
    <Column
      style={[styles.container, style]}
      onMouseEnter={() => autoOptionsOpen && setOptionVisible(true)}
      onMouseLeave={() => autoOptionsOpen && setOptionVisible(false)}
    >
      <Pressable onPress={onSelectPress}>
        <Row
          edgeInsets={commonEdgeInsets}
          alignItems={'center'}
          style={[
            styles.selectContainer,
            { width: width === 'auto' ? undefined : width },
          ]}
          onLayout={processOptionTopPosition}
        >
          <NonSelectionText>{currentOption}</NonSelectionText>
          <Spacer flex={1} />
          <Icon
            icon={optionVisible ? 'arrowDropUpFilled' : 'arrowDropDownFilled'}
          />
        </Row>
      </Pressable>

      {optionVisible ? (
        <Column
          style={[
            styles.optionContainer,
            { top: optionTopPosition },
            { width: width === 'auto' ? undefined : width },
          ]}
        >
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
    zIndex: ZIndex.float,
  },
  selectContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.palette.neutral300,
    backgroundColor: colors.palette.neutral100,
  },
  optionContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.palette.neutral100,
  },
  option: {
    borderBottomWidth: 1,
    borderColor: colors.palette.neutral300,
  },
});

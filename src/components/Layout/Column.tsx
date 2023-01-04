import React from 'react';
import { Flex } from './Flex';

import type { FlexProps } from './Flex';

interface ColumnProps extends Omit<FlexProps, 'direction'> {}

export function Column(props: ColumnProps) {
  // @ts-ignore
  return <Flex direction={'column'} {...props} />;
}

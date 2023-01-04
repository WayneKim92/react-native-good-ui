import React from 'react';
import { Flex } from './Flex';

import type { FlexProps } from './Flex';

interface RowProps extends Omit<FlexProps, 'direction'> {}

export function Row(props: RowProps) {
  // @ts-ignore
  return <Flex direction={'row'} {...props} />;
}

/**
 * Use edgeInsetsPreset to handle inner whitespace.
 */
export const edgeInsetsPreset = {
  micro: 2,
  tiny: 4,
  small: 8,
  extraSmall: 12,
  medium: 16,
  large: 24,
  extraLarge: 32,
  huge: 48,
  massive: 64,
} as const;

export type EdgeInsetsPreset = keyof typeof edgeInsetsPreset;

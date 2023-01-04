/**
 * Use these Round for border-radius your app.
 */
export const round = {
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

export type Round = keyof typeof round;

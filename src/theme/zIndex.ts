export const zIndex = {
  float: 1000,
  dialog: 1300,
  tooltip: 1500,
  important: 9999,
} as const;

export type ZIndex = keyof typeof zIndex;

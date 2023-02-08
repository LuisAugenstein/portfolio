import { useMemo } from 'react';

// TODO: Find out how to dynamically load tailwindConfig
const tailwindScreens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export type ScreenConfig = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
};

export function useTailWindScreenConfig(): ScreenConfig {
  return useMemo(() => {
    let screenConfig = {} as { [key: string]: number };
    for (const key of Object.keys(tailwindScreens)) {
      screenConfig[key] = parseInt(tailwindScreens[key as keyof ScreenConfig].replace('px', ''));
    }
    return screenConfig as ScreenConfig;
  }, []);
}

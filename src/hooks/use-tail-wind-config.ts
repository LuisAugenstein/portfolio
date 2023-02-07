import { useMemo } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import { Config } from 'tailwindcss/types/config';
import tailwindConfig from 'tailwind-config';

export type ScreenConfig = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
};

export function useTailWindConfig(): Config {
  return useMemo(() => resolveConfig(tailwindConfig), []);
}

export function useTailWindScreenConfig(): ScreenConfig {
  return useMemo(() => {
    const config = resolveConfig(tailwindConfig);
    const screens = config.theme?.screens as { [key: string]: string };
    let screenConfig = {} as { [key: string]: number };
    for (const key of Object.keys(screens)) {
      screenConfig[key] = parseInt(screens[key].replace('px', ''));
    }
    return screenConfig as ScreenConfig;
  }, []);
}

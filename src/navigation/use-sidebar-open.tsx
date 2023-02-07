import { useCallback, useEffect, useMemo, useState } from 'react';
import { useScreenWidth } from '../hooks/use-screen-width';
import { useTailWindScreenConfig } from '../hooks/use-tail-wind-config';

export function useSidebarOpen(): [boolean, (openState: boolean) => void] {
  const [isSidebarOpen, _setSidebarOpen] = useState(false);
  const width = useScreenWidth();
  const screenConfig = useTailWindScreenConfig();
  const isScreenLarge = width > screenConfig.lg;

  useEffect(() => _setSidebarOpen(isScreenLarge), [isScreenLarge]);

  const setSidebarOpenForSmallScreen = useCallback(
    (openState: boolean) => {
      const isToggleAllowed = !isScreenLarge;
      if (isToggleAllowed) {
        _setSidebarOpen(openState);
      }
    },
    [isScreenLarge]
  );

  return [isSidebarOpen, setSidebarOpenForSmallScreen];
}

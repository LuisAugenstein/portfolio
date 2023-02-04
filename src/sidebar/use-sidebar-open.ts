import { useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

export function useSidebarOpen(): [boolean, (openState: boolean) => void] {
  const [isSidebarOpen, _setSidebarOpen] = useState(false);
  const theme = useTheme();
  const isScreenLarge = useMediaQuery(theme.breakpoints.up('lg'));

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

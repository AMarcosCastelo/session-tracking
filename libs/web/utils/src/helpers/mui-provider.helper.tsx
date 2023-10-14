import React from 'react';

import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';

export const theme = createTheme({});

export function MuiThemeProvider({ children }: { children: JSX.Element }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}

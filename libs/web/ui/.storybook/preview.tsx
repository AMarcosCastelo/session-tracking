import type { Preview } from '@storybook/react';
import { MuiThemeProvider } from '../../utils/src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const preview: Preview = {
  decorators: [(Story) => <MuiThemeProvider>{Story()}</MuiThemeProvider>],
};

export default preview;

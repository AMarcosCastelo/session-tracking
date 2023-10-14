export const rootMainStorybook = (dirname: string) => {
  return {
    addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
    stories: [
      '../src/**/*.stories.mdx',
      '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    typescript: {
      check: true,
    },
    framework: {
      name: '@storybook/react-vite',
      options: {
        builder: {
          viteConfigPath: `${dirname}/../vite.config.ts`,
        },
      },
    },
  };
};

export const framework = {
  name: '@storybook/react-vite',
  options: {},
};

export const docs = {
  autodocs: true,
};

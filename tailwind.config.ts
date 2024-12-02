import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'greywhite': '#D5D5D5',
      'black': '#171717',
      'greyy': '#6b7280',
      'slate': {
        light: '#424141',
        DEFAULT: '#262626',
        dark: '#262626',
      },
      'green': {
        light: '#15E863',
        DEFAULT: '#22C55E',
        dark: '#17D45D',
      },
      'cr00wn': {
        light: '#FFF8AE',
        DEFAULT: '#FCDD8F',
        dark: '#FCDD8F',
      },
      'forbes': {
        light: '#00345B',
        DEFAULT: '#2E1644',
        dark: '#4D0133',
      },
      'bluey': '#0EA5E9',
      'bg': '#FBF7F5',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
        'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
        'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;


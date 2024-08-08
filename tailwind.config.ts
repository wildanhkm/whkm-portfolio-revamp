import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#151410',
        tertiary: '#292923',
        quaternary: '#31312d',
        quinary: '#faf7f2',
        senary: '#ffffff',
      },
    },
  },
  plugins: [],
};
export default config;

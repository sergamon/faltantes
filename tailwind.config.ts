import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { green: '#0B8A4B', yellow: '#FFCC29', navy: '#0A2540' }
      }
    }
  },
  plugins: []
};
export default config;

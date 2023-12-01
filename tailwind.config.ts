import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'jazz-white': '#dbdfe1',
        'jazz-blue': '#0e1418',
        'jazz-gold': '#cf9d62',
      },
    },
  },
  plugins: [],
  prefix: 'tw-',
  important: true,
  corePlugins: {
    preflight: false,
  },
}
export default config

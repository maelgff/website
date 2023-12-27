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
        'black-8': '#080808',
        'black-17': '#111',
        'brand': '#0aff9d',
        'opaque': 'hsla(0,0%,7%,.25)'
      },
      gridTemplateColumns: {
        'custom': '60px 1fr'
      },
      height: {
        'header': 'calc(45px + 3.6rem)',
      }
    },
  },
  plugins: [],
}
export default config

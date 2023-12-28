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
        'opaque': 'hsla(0,0%,7%,.25)',
        'footer': 'linear-gradient(180deg, #111, #080808)'
      },
      gridTemplateColumns: {
        'custom': '60px 1fr',
        'about': '1fr 300px',
        'projects': '1fr 1fr',
      },
      height: {
        'header': 'calc(45px + 3.6rem)'
      },
      backgroundSize: {
        'icon': '24px 24px',
      },
      maxWidth: {
        '700': '700px',
        '1150': '1150px'
      }
    },
  },
  plugins: [],
}
export default config

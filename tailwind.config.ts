import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      translate: {
        'double': '200%',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  future: {
    // hoverOnlyWhenSupported: true,
  },
}

export default config

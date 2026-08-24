/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
    extend: {
      colors: {
        rose: {
          50: '#FEF7F7',
          100: '#FBEAEC',
          200: '#F5D3D8',
          300: '#EDB4BC',
          400: '#DF919C',
          500: '#C97B87',
          600: '#B0636F',
          700: '#8E4E59',
          800: '#6B3A43',
          900: '#4A272D',
        },
        blush: {
          50: '#FFFBFA',
          100: '#FCF2EF',
          200: '#F8E6E1',
          300: '#F2D5CE',
          400: '#E8BEB4',
        },
        nude: {
          100: '#FAF4EE',
          200: '#F0E4D8',
          300: '#E3D2C0',
          400: '#D2BBA3',
          500: '#B99C80',
        },
        ink: {
          DEFAULT: '#241E1C',
          soft: '#4A4240',
          muted: '#7B7270',
          line: '#E7DEDA',
        },
        cream: '#FDFAF7',
        shell: '#F7F1EC',
      },
      /* Poppins carries all typography. `mono` is
         overridden so a <code> element cannot pull in a secondary face, and each
         stack ends in a real fallback so a failed webfont lands somewhere
         chosen rather than on the browser default. */
      fontFamily: {
        /* Headlines and any large display type. */
        display: ['Poppins', 'system-ui', 'sans-serif'],
        /* Body copy, UI, navigation — one grotesque for all of it. */
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        nav: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['Poppins', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        /* Uppercase micro-labels need some tracking to stay readable, but the
           original 0.28em/0.14em read as stretched. Roughly halved. */
        luxe: '0.14em',
        wide2: '0.07em',
      },
      maxWidth: {
        shell: '1680px',
        prose2: '68ch',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        /* Slow Ken Burns push for the hero photograph. */
        'ken-burns': {
          '0%': { transform: 'scale(1) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1.12) translate3d(-1.5%, -1%, 0)' },
        },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        'spin-slow': 'spin 26s linear infinite',
        'ken-burns': 'ken-burns 24s ease-in-out infinite alternate',
        shimmer: 'shimmer 3.4s linear infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],

  theme: {
    colors: {
      'pretao': '#1A1918',
      'laranjaum': '#ff5400',
      'branquin': '#f4f4f4',
      'quase-cinza': '#322F2E',
      'cinza': '#7D7D7D',
    },

    fontSize: {
      'h1': [96, {
        letterSpacing: -1.5,
        fontWeight: 900,
      }],

      'h2': [60, {
        letterSpacing: -0.5,
        fontWeight: 700,
      }],

      'h3': [48, {
        letterSpacing: 0,
        fontWeight: 400,
      }],

      'h4': [30, {
        letterSpacing: 0.25,
        fontWeight: 400,
      }],

      'h5': [24, {
        letterSpacing: 0,
        fontWeight: 400,
      }],

      'h6': [20, {
        letterSpacing: 0.15,
        fontWeight: 500,
      }],

      'BUTTON': [14, {
        letterSpacing: 1,
        fontWeight: 500,
        lineHeight: '16.72px',
      }],

      'sub1': [16, {
        fontWeight: 400,
        letterSpacing: .15,
        lineHeight: '24px',
      }],

      'body1': [18, {
        fontWeight: 500,
        // letterSpacing: .44,
        lineHeight: '18px',
      }],

      'body2': [11, {
        fontWeight: 400,
        letterSpacing: .25,
        lineHeight: '15px',
      }],

      'body2-negrito': [14, {
        fontWeight: 600,
        letterSpacing: .25,
        lineHeight: '20px',
      }],

      'home': [36, {
        fontWeight: 500,
        lineHeight: '37.01px',
      }],
      'md-home': [80, {
        fontWeight: 500,
      }],



    },
    extend: {
      fontFamily: {
        'georama': ['Georama', 'sans-serif'],
      },
      keyframes: {
        quica: {
          '0%, 100%': { transform: 'translateY(20px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        viraDeLadin: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(100px)' },
        },
        pulse2: {
          '50%': {
            opacity: '.5'
          }
        }
      },
      animation: {
        quica: 'quica 3s ease-in-out infinite',
        pulse2: 'pulse2 3s cubic-bezier(0.3, 0, 0.2, 1) infinite;',
        viraDeLadin: 'viraDeLadin 3s cubic-bezier(0.3, 0, 0.2, 1) forwards;',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'card': '0 1.52px 7.63px rgba(0, 0, 0, 255)',
      }

    },
  },
  plugins: [],
}
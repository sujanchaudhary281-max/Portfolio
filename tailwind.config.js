/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FFE566',
        'primary-dark': '#F5C800',
        'primary-light': '#FFF0A0',
        ink: '#fefce8',
        body: '#fef9c3',
        mute: '#fde047',
        canvas: '#0a0a02',
        'canvas-soft': '#1a1a07',
        'canvas-card': '#21210a',
        hairline: 'rgba(255,229,102,0.12)',
        'hairline-strong': 'rgba(255,229,102,0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        pill: '100px',
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(255,229,102,0.08), 0 4px 12px rgba(0,0,0,0.4)',
        'card-hover': '0 0 0 1px rgba(255,229,102,0.2), 0 8px 30px rgba(255,229,102,0.08), 0 12px 40px rgba(0,0,0,0.4)',
        'glow': '0 0 30px rgba(255,229,102,0.2), 0 0 60px rgba(255,229,102,0.05)',
        'glow-lg': '0 0 50px rgba(255,229,102,0.25), 0 0 100px rgba(255,229,102,0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

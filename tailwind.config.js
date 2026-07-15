/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Accent — used sparingly, for emphasis and interactive affordances only.
        primary: '#FACC15',
        'primary-dark': '#EAB308',
        'primary-light': '#FDE047',
        // Neutral text hierarchy carries the layout; the accent does not.
        ink: '#f4f4f5',
        body: '#a1a1aa',
        mute: '#71717a',
        // Surfaces — true neutrals, subtly stepped.
        canvas: '#0b0b0d',
        'canvas-soft': '#111113',
        'canvas-card': '#141416',
        hairline: 'rgba(255,255,255,0.07)',
        'hairline-strong': 'rgba(255,255,255,0.13)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '10px',
        '2xl': '12px',
        pill: '100px',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(0,0,0,0.3)',
        'card-hover': '0 4px 16px -4px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}

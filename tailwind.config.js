/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                },
                dark: {
                    bg: '#0a0a0a',
                    card: '#111111',
                    border: '#1f1f1f',
                }
            },
            animation: {
                'gradient': 'gradient 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    'from': {
                        'box-shadow': '0 0 10px #0ea5e9, 0 0 20px #0ea5e9, 0 0 30px #0ea5e9',
                    },
                    'to': {
                        'box-shadow': '0 0 20px #38bdf8, 0 0 30px #38bdf8, 0 0 40px #38bdf8',
                    },
                },
                typing: {
                    'from': { width: '0' },
                    'to': { width: '100%' }
                },
                'blink-caret': {
                    'from, to': { 'border-color': 'transparent' },
                    '50%': { 'border-color': '#0ea5e9' },
                }
            },
        },
    },
    plugins: [],
}

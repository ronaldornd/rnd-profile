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
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
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

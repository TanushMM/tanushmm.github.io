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
                // Dark theme
                'dark-bg0': '#0c1519',
                'dark-bg1': '#162127',
                'dark-bg2': '#1e2d35',
                'dark-surface': '#23343d',
                'dark-border': 'rgba(207, 157, 123, 0.14)',
                'dark-text-pri': '#e5e1dd',
                'dark-text-sec': '#9aaca5',
                'dark-text-muted': '#5a7068',
                'dark-accent1': '#cf9d7b',
                'dark-accent2': '#724b39',
                'dark-accent3': '#3a5560',
                'dark-glow': 'rgba(207, 157, 123, 0.22)',

                // Light theme
                'light-bg0': '#e5e1dd',
                'light-bg1': '#d8d3cc',
                'light-bg2': '#ccc7c0',
                'light-surface': 'rgba(255, 255, 255, 0.6)',
                'light-text-pri': '#0c1519',
                'light-text-sec': '#3a5060',
                'light-text-muted': '#7a9090',
                'light-accent1': '#407e8c',
                'light-accent2': '#083a4f',
                'light-accent3': '#a58d66',
                'light-glow': 'rgba(64, 126, 140, 0.22)',
            },
            fontFamily: {
                'serif': ['Cormorant Garamond', 'serif'],
                'sans': ['Outfit', 'sans-serif'],
                'mono': ['JetBrains Mono', 'monospace'],
            },
            backdropBlur: {
                'glass': 'blur(20px)',
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            },
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0ea5e9',
                secondary: '#0369a1',
                dark: '#0a0a0a',
                accent: '#1e3a8a',
            },
        },
    },
    plugins: [],
}
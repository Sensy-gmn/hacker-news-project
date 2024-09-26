/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Ajoutez des couleurs personnalisées pour le dark mode
                darkBg: '#1a202c',
                darkText: '#a0aec0',
                darkCard: '#2d3748',
                darkBorder: '#4a5568', 
            },
        },
    },
    plugins: [],
};

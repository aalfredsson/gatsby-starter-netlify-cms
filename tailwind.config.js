module.exports = {
    theme: {
        screens: {
            'smm': { 'max': '639px' },
            // => @media (max-width: 639px) { ... }

            'mdm': { 'max': '767px' },
            // => @media (max-width: 767px) { ... }

            'lgm': { 'max': '1023px' },
            // => @media (max-width: 1023px) { ... }

            'xlm': { 'max': '1279px' },
            // => @media (max-width: 1279px) { ... }
            
            'sm': { 'min': '639px' },
            // => @media (max-width: 639px) { ... }

            'md': { 'min': '767px' },
            // => @media (max-width: 767px) { ... }

            'lg': { 'min': '1023px' },
            // => @media (max-width: 1023px) { ... }

            'xl': { 'min': '1279px' },
            // => @media (max-width: 1279px) { ... }
        },
        extend: {}
    },

    variants: {},
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}

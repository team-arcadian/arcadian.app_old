const theme = require('tailwindcss/defaultTheme');

const { fontFamily: font } = theme;

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: [...font.sans],
            },
        },
    },
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
};
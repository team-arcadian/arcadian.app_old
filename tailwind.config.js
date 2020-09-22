const theme = require('tailwindcss/defaultTheme');

const { fontFamily: font } = theme;

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                title: ['Yeseva One', ...font.sans],
                sans: ['Josefin Sans', ...font.sans],
            },
            height: {
                "1/2": "50%",
            },
        },
    },
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
};

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
  extend: {
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-80% - 1rem))",
        },
      },
    },
    animation: {
      scroll:
        "scroll var(--animation-duration, 30s) var(--animation-direction, forwards) linear infinite",
    },
  },
},

  plugins: [addVariablesForColors,Myclass],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
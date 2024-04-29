export default {
  content: [],
  theme: {
    extend: {
      fontFamily: { sans: ["Barlow", "sans-serif"] },
      colors: {
        primary: {
          "50": "#fef9ee",
          "100": "#fcf1d8",
          "200": "#f9e0af",
          "300": "#f5c87c",
          "400": "#f0a747",
          "500": "#ec912b",
          "600": "#dd7319",
          "700": "#b75917",
          "800": "#92461a",
          "900": "#763b18",
          "950": "#3f1c0b",
        },
        secondary: "#f5cb9a",
        gray: "#323131",
        dark: "#888",
        darken: "#1D2130",
        grey: "#1C1C1C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(#brEC201B)",
      },

      boxShadow: {
        point: "0 0px 1000px 200px #ec912b2e",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "4rem",
          xl: "4rem",
          "2xl": "4rem",
        },

        screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};

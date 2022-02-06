module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FDB813",
        secondary: "#B20838",
        darkBluish: "#004B8D",
        lightBluish: "#4EA5D9",
        whiteBluish: "#A9E4EF",
      },
    },
    backgroundImage: {
      "bg-about": "url('/assets/img/about-bg.jpg')",
    },
    fontFamily: {
      body: ["Cairo", "Roboto", "sans-serif"],
    },
  },
  plugins: [],
};

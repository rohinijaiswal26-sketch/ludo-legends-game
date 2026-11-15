export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 25px rgba(255, 255, 255, 0.14)",
      },
      colors: {
        ludo: {
          red: "#ff5a6e",
          green: "#30d68d",
          yellow: "#ffc94d",
          blue: "#44a2ff"
        }
      }
    }
  },
  plugins: []
};

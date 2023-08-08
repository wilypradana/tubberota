// Konfigurasi TailwindCSS
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "sofiapro",
      },
      backgroundColor: {
        primary: "#E4BF93",
        secondary: "#ECD5E0",
      },
      textColor: {
        primary: "#E4BF93",
        secondary: "#ECD5E0",
      },
      animation: {
        "scale-up-hor-left":
          "scale-up-hor-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "slide-rotate-ver-r-fwd":
          "slide-rotate-ver-r-fwd 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both",
      },
      keyframes: {
        "scale-up-hor-left": {
          "0%": {
            transform: "scaleX(.4)",
            "transform-origin": "0% 0%",
          },
          to: {
            transform: "scaleX(1)",
            "transform-origin": "0% 0%",
          },
        },
        "slide-rotate-ver-r-fwd": {
          "0%": {
            transform: "translateX(0) translateZ(0) rotateY(0)",
            "transform-origin": "center left",
          },
          to: {
            transform: "translateX(150px) translateZ(130px) rotateY(-90deg)",
            "transform-origin": "center left",
          },
        },
      },
    },
  },
  plugins: [],
};

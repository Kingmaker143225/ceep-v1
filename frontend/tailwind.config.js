// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#082E5F",
//         secondary: "#F4B400",
//         accent: "#2EA6D9",
//         background: "#ffffff",
//         foreground: "#082E5F",
//         muted: "#F5F7FA",
//         border: "#DDE6EF",
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//         serif: ["Playfair Display", "serif"],
//       },
//     },
//   },
//   plugins: [],
// };





module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2EA6D9",      // all bg-primary becomes sky blue
        secondary: "#F4B400",    // all text-secondary becomes gold

        "primary-foreground": "#ffffff",
        "secondary-foreground": "#082E5F",
      }
    },
  },

  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#e105ff",
          "secondary": "#93bc2b",
          "accent": "#ffc4d8",
          "neutral": "#1c1b22",
          "base-100": "#ebebef",
          "info": "#8da0ec",
          "success": "#21836f",
          "warning": "#f9b50b",
          "error": "#ef1a53",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}


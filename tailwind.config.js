module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        lightnavy: '#112240',
        accent: '#64ffda',
        lightest: '#e6f1ff',
        slate: '#8892b0'
      },
      fontFamily: {
        sans: ['Calibre', 'Inter', 'sans-serif'],
        mono: ['SF Mono', 'monospace']
      }
    }
  },
  plugins: [],
}
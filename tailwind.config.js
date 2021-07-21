module.exports = {
  purge: {
    enabled: true, // This will *always* minify, even on dev builds
    content: [
      './src/**/*.html',
      './src/**/*.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

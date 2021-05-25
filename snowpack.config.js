// Example: snowpack.config.js
// The added "@type" comment will enable TypeScript type information via VSCode, etc.
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  buildOptions: {
    out: 'docs'
  },
  plugins: [
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-react-refresh'
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018'
  }
}

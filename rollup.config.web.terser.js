const { defineConfig } = require('rollup');
const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');

exports.default = defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'validator-util.min.js',
    exports: 'default',
    name: 'validatorUtil',
    format: "umd",
  },
  plugins: [
    typescript({
      sourceMap: false,
      exclude: "node_modules/**",
      typescript: require("typescript"),
    }),
    terser({
      format: {
        comments: 'some'
      }
    })
  ],
});

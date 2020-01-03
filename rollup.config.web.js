const { defineConfig } = require('rollup');
const typescript = require('@rollup/plugin-typescript');

exports.default = defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'validator-util.js',
    exports: 'default',
    name: 'validatorUtil',
    format: "umd",
  },
  plugins: [
    typescript({
      sourceMap: false,
      exclude: "node_modules/**",
      typescript: require("typescript"),
    })
  ],
});

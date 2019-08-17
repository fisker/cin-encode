import {terser} from 'rollup-plugin-terser'

const build = {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/index.js',
      format: 'umd',
      name: 'CINEncode',
    },
  ],
}

const buildMinified = {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/index.min.js',
      format: 'umd',
      name: 'CINEncode',
    },
  ],
  plugins: [terser()],
}

export default [build, buildMinified]

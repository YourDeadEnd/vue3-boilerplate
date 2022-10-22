import { resolve } from 'path';
import getDevServerConfig from './getDevServerConfig';
import getPlugins from './getPlugins';
import getRules from './getRules';
import type { Configuration } from 'webpack';

const alias = {
  '@': resolve(__dirname, '../src'),
};

const config: Configuration = {
  target: 'web',
  entry: './src/main.ts',
  resolve: {
    alias,
  },
  output: {
    path: resolve('dist'),
    filename: 'index.js',
  },
  module: {
    rules: getRules(),
  },
  plugins: getPlugins(),
  devServer: getDevServerConfig(),
};

export default config;

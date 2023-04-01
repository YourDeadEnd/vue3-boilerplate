import { resolve } from 'path';
import { ESBuildMinifyPlugin } from 'esbuild-loader';
import getDevServerConfig from './getDevServerConfig';
import getPlugins from './getPlugins';
import getRules from './getRules';
import { dist } from './paths';
import getArgs from './getArgs';
import type { Target } from '@/types/builder';
import type { Configuration } from 'webpack';

const JS_FILE_NAME = '[name].[contenthash:8].js';

const { mode, analyze: bundleAnalyze } = getArgs();
const isDev = mode === 'development';

const target: Target = {
  mode,
  bundleAnalyze,
  env: {
    APP_MODE: mode,
  },
};

const alias = {
  '@': resolve(__dirname, '../src'),
};

const output: Configuration['output'] = {
  path: dist,
  filename: `js/${JS_FILE_NAME}`,
  publicPath: '/',
  chunkFilename: `js/${JS_FILE_NAME}`,
  clean: true,
};

const optimization: Configuration['optimization'] = {
  runtimeChunk: 'single',
  chunkIds: 'named',
  splitChunks: {
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        filename: `js/vendors/${JS_FILE_NAME}`,
        chunks: 'all',
      },
    },
  },
  minimizer: [
    new ESBuildMinifyPlugin({ target: 'es2015' }),
  ],
};

const config: Configuration = {
  mode,
  devtool: isDev ? 'eval-cheap-module-source-map' : false,
  entry: './src/main.ts',
  resolve: {
    alias,
    extensions: ['.tsx', '.ts', '.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'],
  },
  output,
  module: {
    rules: getRules(target),
  },
  plugins: getPlugins(target),
  devServer: getDevServerConfig(),
  optimization,
};

export default config;

import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import { DefinePlugin } from 'webpack';
import type { Compiler, WebpackPluginInstance } from 'webpack';

export default function getPlugins(): Plugins {
  const plugins: Plugins = [
    new HtmlWebpackPlugin({
      template: resolve('./src/index.html'),
    }),
  ];

  plugins.push(new VueLoaderPlugin());

  plugins.push(
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  );

  return plugins;
}

type Plugins = (
  | ((this: Compiler, compiler: Compiler) => void)
  | WebpackPluginInstance
)[];

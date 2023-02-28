import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import { DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Target } from '@/types/builder';
import type { Compiler, WebpackPluginInstance } from 'webpack';

export default function getPlugins(target: Target): Plugins {
  const isDev = target.mode === 'development';

  const plugins: Plugins = [
    new HtmlWebpackPlugin({
      template: resolve('./src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeScriptTypeAttributes: true,
      },
    }),
  ];

  if (target.bundleAnalyze) plugins.push(new BundleAnalyzerPlugin());

  plugins.push(new VueLoaderPlugin());

  if (!isDev) {
    plugins.push(
      new MiniCssExtractPlugin(
        {
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css',
        },
      ),
    );
  }

  const envVariables = Object.entries(target.env).reduce((acc, [key, value]) => {
    acc[key] = JSON.stringify(value);
    return acc;
  }, {} as Record<string, string>);

  plugins.push(
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      ...envVariables,
    }),
  );

  return plugins;
}

type Plugins = (
  | ((this: Compiler, compiler: Compiler) => void)
  | WebpackPluginInstance
)[];

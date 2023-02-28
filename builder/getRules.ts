import { loader as MiniCssExtractLoader } from 'mini-css-extract-plugin';
import type { Target } from '@/types/builder';
import type { RuleSetRule } from 'webpack';

export default function getRules(target: Target): Rules {
  const isDev = target.mode === 'development';

  const rules: Rules = [{
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    loader: 'esbuild-loader',
    options: {
      loader: 'tsx',
      target: 'es2015',
    },
  }];

  rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
  });

  rules.push({
    test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'img/[name].[hash:8].[ext]',
    },
  });

  rules.push({
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name].[hash:8].[ext]',
    },
  });

  rules.push({
    test: /\.s?[ac]ss$/,
    use: [
      ...[isDev ? 'vue-style-loader' : MiniCssExtractLoader],
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  });

  return rules;
}

type Rules = (RuleSetRule | '...')[];

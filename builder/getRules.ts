import type { RuleSetRule } from 'webpack';

export default function getRules(): Rules {
  const rules: Rules = [{
    test: /\.tsx?$/,
    loader: 'esbuild-loader',
    options: {
      loader: 'tsx',
    },
  }];

  rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
  });

  rules.push({
    test: /\.s?[ac]ss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  });

  return rules;
}

type Rules = (RuleSetRule | '...')[];

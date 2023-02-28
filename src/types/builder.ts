import type { ParsedArgs } from 'minimist';

export type Mode = 'development' | 'production';

export type BuildArgs = ParsedArgs & {
  mode: Mode;
  analyze: boolean;
};

export type Env = {
  APP_MODE: Mode;
};

export type Target = {
  mode: Mode;
  bundleAnalyze: boolean;
  env: Env;
};

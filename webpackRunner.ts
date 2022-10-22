import { resolve } from 'path';
import { spawn } from 'child_process';
import type { SpawnOptions } from 'child_process';

const configPath = resolve(__dirname, 'builder/webpack.config.ts');
const CONFIG = `--config ${configPath}`;

const opts: SpawnOptions = {
  shell: true,
  stdio: 'inherit',
};

const [, , param] = process.argv;

function getCommand() {
  const isDev = param === 'serve';
  return isDev ? `webpack serve ${CONFIG} --mode=development` : `webpack ${CONFIG} --mode=production`;
}

spawn(getCommand(), [], opts);

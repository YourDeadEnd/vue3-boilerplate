import type { Configuration } from 'webpack-dev-server';

export default function getDevServerConfig(): Configuration {
  const config: Configuration = {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: 'all',
  };

  return config;
}

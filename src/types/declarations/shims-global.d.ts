import type { Env } from '../builder';

declare global {
  declare const APP_MODE: Env['APP_MODE'];
}

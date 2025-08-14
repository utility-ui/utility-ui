import { defineConfig } from 'tsdown';
import { devDependencies } from './package.json';

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    platform: 'neutral',
    dts: true,
    external: Object.keys(devDependencies)
  }
]);

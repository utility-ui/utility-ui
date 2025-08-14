import { defineConfig } from 'cspell';

const cspellConfig = defineConfig({
  version: '0.2',
  ignorePaths: ['pnpm-lock.yaml', 'dist', '*.svg'],
  words: ['tsdown']
});

export default cspellConfig;

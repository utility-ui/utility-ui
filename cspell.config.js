import { defineConfig } from 'cspell';

const cspellConfig = defineConfig({
  version: '0.2',
  ignorePaths: ['pnpm-lock.yaml'],
  words: ['tsdown']
});

export default cspellConfig;

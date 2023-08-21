import { defineConfig } from 'umi';
import { name } from './package.json';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: process.env.NODE_ENV === 'production' ? `/${name}/` : '/',
});

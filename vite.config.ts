import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', {runtime: 'automatic'}],
        ],
      },
      include: /\.(jsx?|tsx?|mjs)$/,
    }),
  ],
  resolve: {
    alias: {
      'react-native': path.resolve(__dirname, 'src/shims/react-native.ts'),
    },
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
    ],
  },
  define: {
    global: 'globalThis',
    __DEV__: JSON.stringify(true),
    'process.env': {},
  },
  optimizeDeps: {
    include: ['react-native-web', 'react', 'react-dom'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
});

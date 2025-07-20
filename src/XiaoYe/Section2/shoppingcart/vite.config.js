import { defineConfig } from "vite";

import {
  resolve
} from 'path';

import React from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    React()
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})
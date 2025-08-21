import { defineConfig } from "vite";
import { resolve } from 'path';
import React from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    React()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
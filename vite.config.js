/*
 * @Date: 2023-10-16 16:46:51
 * @LastEditors: mason
 * @LastEditTime: 2023-10-18 10:08:54
 * @FilePath: \app1\vite.config.js
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

function _resolve(dir) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve:{
    alias: {
      '@': _resolve('src')
    }
  }
})
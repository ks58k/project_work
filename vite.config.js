import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  root: "./src",
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context : {
        username : "John",
      },
    }),
  ],
}) 
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import process from 'node:process';

// https://vitejs.dev/config/
export default ({ mode }) => {
  import.meta.env = { ...import.meta.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        src: path.resolve('src/'),
        assets: path.resolve('src/assets/'),
        components: path.resolve('src/components/'),
        services: path.resolve('src/services/'),
        utils: path.resolve('src/utils/'),
        styles: path.resolve('src/styles/'),
        public: path.resolve('src/public/'),
        pages: path.resolve('src/pages/')
      }
    },
    server: {
      port: parseInt(import.meta.env.VITE_PORT)
    }
  });
};

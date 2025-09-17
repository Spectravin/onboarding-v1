import esbuild from 'esbuild';
import { htmlPlugin } from '@jgoz/esbuild-plugin-html';

esbuild.build({
  entryPoints: ['src/App.tsx'],
  bundle: true,
  outfile: 'dist/bundle.js',
  plugins: [
    htmlPlugin({
      // You can specify an HTML template or let it create one for you.
      // For simplicity, we can let it generate the HTML automatically.
    }),
  ],
}).catch(() => process.exit(1));

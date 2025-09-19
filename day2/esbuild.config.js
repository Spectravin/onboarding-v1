import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/App.tsx'],
  bundle: true,
  outfile: 'dist/bundle.js',
  plugins: [
  ],
}).catch(() => process.exit(1));

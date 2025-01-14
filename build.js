const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ['src/snipeBot.ts'],
    bundle: true,
    outfile: 'dist/snipeBot.js',
    minify: true,
    platform: 'node'
  })
  .catch(() => process.exit(1));

import rust from '@wasm-tool/rollup-plugin-rust';

export default {
  input: {
    openai_harmony: './src/index.ts',
  },
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    rust({
      extraArgs: {
        cargo: ['--features', 'wasm-binding'],
        wasmOpt: ['--enable-bulk-memory-opt'],
      },
      experimental: {
        typescriptDeclarationDir: 'dist',
      },
    }),
  ],
};

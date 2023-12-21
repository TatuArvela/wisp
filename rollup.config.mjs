import { createRequire } from 'node:module';

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import { dts } from 'rollup-plugin-dts';
import externals from 'rollup-plugin-node-externals';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default [
  {
    input: './src/index.ts',
    plugins: [
      del({ targets: 'dist/*' }),
      externals({ deps: true }),
      image(),
      nodeResolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      replace({
        'process.env.PACKAGE_VERSION': JSON.stringify(pkg.version),
        preventAssignment: true,
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        compilerOptions: {
          emitDeclarationOnly: true,
        },
        sourceMap: false,
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      terser({ format: { comments: false } }),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
  {
    input: './dist/dts/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts(), del({ hook: 'buildEnd', targets: './dist/dts' })],
  },
];

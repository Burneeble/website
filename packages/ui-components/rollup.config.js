import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";
import svg from "rollup-plugin-svg";
import rollupNodeResolve from "rollup-plugin-node-resolve";
import rollupJson from "rollup-plugin-json";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import copy from "rollup-plugin-copy";
// import tailwindConfig from "./tailwind.config.ts";

const packageJson = require("./package.json");

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      copy({
        targets: [
          {
            src: "./tailwind.config.ts",
            dest: "./dist/css/",
          },
        ],
      }),
      postcss({
        plugins: [autoprefixer()],
        extract: true,
        minimize: true,
      }),
      peerDepsExternal(),
      resolve(),
      rollupNodeResolve({
        jsnext: true,
        preferBuiltins: true,
        browser: true,
        fs: false,
      }),
      rollupJson(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser(),
      svg(),
    ],

    external: [
      "react",
      "react-dom",
      "react-router-dom",
      "styled-components",
      "fs",
      /\.(sc|sa|c)ss$/,
    ],
  },
  {
    input: "dist/esm//src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
  {
    input: "src/style.ts",
    plugins: [
      scss({
        failOnError: true,
        include: "./src/**/*.scss",
        output: "./dist/css/style.css",
      }),
      terser(),
    ],
    external: ["react", "react-dom", "react-router-dom", "styled-components"],
  },
  {
    input: "src/style.ts",
    plugins: [
      scss({
        failOnError: true,
        include: "./src/**/*.scss",
        output: "./dist/css/style.scss",
      }),
      terser(),
    ],
    external: ["react", "react-dom", "react-router-dom", "styled-components"],
  },
];

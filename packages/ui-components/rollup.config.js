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

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
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
      typescript({ tsconfig: "./tsconfig.json" }),
      scss({
        output: "./build/css/style.css",
        failOnError: true,
        include: "./src/**/*.scss",
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
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
  {
    input: "src/style.ts",
    plugins: [
      scss({
        output: "./dist/css/style.css",
        failOnError: true,
        include: "./src/**/*.scss",
      }),
    ],
    external: ["react", "react-dom", "react-router-dom", "styled-components"],
  },
];

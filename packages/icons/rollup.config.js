import { babel } from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import dts from "rollup-plugin-dts";
import typescript from "@rollup/plugin-typescript";

const config = [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.esm.js",
      format: "esm",
    },
    external: [/@babel\/runtime/, "react"],
    plugins: [
      babel({
        babelHelpers: "runtime",
        plugins: ["@babel/plugin-transform-runtime"],
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      ,
      filesize(),
    ],
  },
  {
    input: "./dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

export default config;

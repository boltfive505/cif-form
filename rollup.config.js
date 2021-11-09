import merge from "deepmerge";
import { createBasicConfig } from "@open-wc/building-rollup";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: "src/index.ts",
  output: {
    dir: "lib",
  },
  plugins: [
    uglify(),
    typescript(),
    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**",
    }),
    copy({
      targets: [{ src: "src/CIF_-_Version_9_static.pdf", dest: "lib" }],
    }),
  ],
});

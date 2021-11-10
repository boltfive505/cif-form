const plugins = [
  [
    "module-resolver",
    {
      root: ["./src"],
      alias: {
        "~": ["./src/"],
        "~base_classes": ["./src/base_classes/"],
      },
      extensions: [".js", ".ts", ".jsx", ".tsx"],
    },
  ],
];

const presets = [
  ["@babel/preset-env", { modules: "commonjs", targets: { node: "current" } }],
  "@babel/preset-typescript",
];

module.exports = { plugins, presets };

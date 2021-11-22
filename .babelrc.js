const plugins = [
  [
    "module-resolver",
    {
      root: ["./src"],
      alias: {
        "~": ["./src/"],
        "~cif-form": ["./src/cif-form/"],
        "~field-classes": ["./src/field-classes/"],
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

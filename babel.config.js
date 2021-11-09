const plugins = [
  [
    require.resolve("babel-plugin-module-resolver"),
    {
      root: ["."],
      alias: {
        src: "./src",
        base_classes: "./src/base_classes",
      },
    },
  ],
];

const presets = [
  ["@babel/preset-env", { targets: { node: "current" } }],
  "@babel/preset-typescript",
];

module.exports = { plugins, presets };

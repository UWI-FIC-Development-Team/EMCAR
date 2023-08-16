module.exports = {
  root: true,
  extends: ["universe/native", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};

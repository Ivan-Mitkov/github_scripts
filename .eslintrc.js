module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ["airbnb-base", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    it: "readonly",
    expect: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {},
};

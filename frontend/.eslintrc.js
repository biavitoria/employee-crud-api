module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-components': 'off',
    'no-useless-return': 'off',
    "vuejs-accessibility/label-has-for": [
      "off",
      {
        "required": {
          "some": ["nesting", "id"]
        }
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};

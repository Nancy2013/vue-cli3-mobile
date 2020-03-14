module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential",
    "airbnb-base"
  ],
  "parserOptions": {
    "parser": "babel-eslint", // 解析器
  },

  "rules": {
    'eol-last': 'off',
    'arrow-parens': 'off',
  }
}
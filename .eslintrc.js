module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  // 根据个人习惯自定义rule
  rules: {
    'no-console': 'off',
    'react-hooks/exhaustive-deps': 'error', // react-hooks 依赖检查
    'no-empty': 'off', // catch{} 允许为空
    '@typescript-eslint/no-shadow': ['off'], // 当前作用域变量名不能与父级作用域变量同名
    'react/no-multi-comp': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/self-closing-comp': 'off',
  },
};

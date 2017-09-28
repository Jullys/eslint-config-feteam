module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  // extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ['react', 'redux-saga', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    // 变量只能在其作用域内使用
    'block-scoped-var': 'error',
    // 禁用debugger
    'no-debugger': 'warn',
    // 点操作符和属性放在同一行
    'dot-location': ['error', 'property'],
    // 禁止对原生对象赋值
    'no-native-reassign': 'error',
    // 禁止重新声明变量
    'no-redeclare': 'error',
    // 禁止自身比较
    'no-self-compare': 'error',
    // 禁用 with 语句
    'no-with': 'error',
    // 条件等于比较时，禁止字面量在左边，比如 if ('hello Yunji' === a)
    yoda: [
      'error',
      'never', {
        exceptRange: true
      }
    ],
    // 禁止定义前使用变量
    'no-use-before-define': [
      'error', {
        functions: false,
        classes: false
      }
    ],
    // 不允许类成员中有重复的名称
    'no-dupe-class-members': 'error',
    // 在构造函数中禁止在调用super()之前使用this或super
    'no-this-before-super': 'error',
    // 要求在变量声明周围换行
    'one-var-declaration-per-line': ['error', 'initializations'],

    // ------------------------ Node.js 强制的风格 -------------------------------
    // 强制回调错误处理（当第一个参数以 err 开头时）
    'handle-callback-err': ['error', '^err.*$'],
    // 禁用混合的 Requires
    'no-mixed-requires': 'error',
    // 不允许 new require
    'no-new-require': 'error',
    // 当使用 _dirname 和 _filename 时不允许字符串拼接，必须用 path.resolve(__dirname, xx)
    'no-path-concat': 'error',
    // 禁用未声明的变量
    'no-undef': 'error',

    // ---------------------------- 建议的风格 -----------------------------------
    // 缩进必须为2个空格
    indent: ['warn', 2],
    // 字符串只能使用单引号或者反引号
    quotes: [
      'warn',
      'single', {
        allowTemplateLiterals: true
      }
    ],
    // 末尾需要分号
    semi: ['warn', 'always'],
    // 强制圆括号内有空格
    'space-in-parens': ['warn', 'never'],
    // 强制对象的花括号中有空格
    'object-curly-spacing': [
      'warn',
      'always', {
        objectsInObjects: false,
        arraysInObjects: false
      }
    ],
    // 强制在方括号内使用空格
    'array-bracket-spacing': [
      'warn',
      'always', {
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],

    // 要求函数圆括号之前有一个空格，比如 function () {} 或 function aaa() {}
    'space-before-function-paren': [
      'warn', {
        anonymous: 'always',
        named: 'never'
      }
    ],
    // 要求箭头函数的箭头之前或之后有空格
    'arrow-spacing': 'warn',
    // 大括号风格
    'brace-style': [
      'warn',
      '1tbs', {
        allowSingleLine: true
      }
    ],
    // 强制在逗号周围使用空格
    'comma-spacing': [
      'warn', {
        before: false,
        after: true
      }
    ],
    // 强制使用一致的逗号风格
    'comma-style': ['warn', 'last'],
    // 强制在对象字面量的键和值之间使用一致的空格
    'key-spacing': [
      'warn', {
        beforeColon: false,
        afterColon: true
      }
    ],
    // 不允许多个空行
    'no-multiple-empty-lines': [
      'warn', {
        max: 2,
        maxEOF: 1,
        maxBOF: 1
      }
    ],

    // 限制最大参数个数
    'max-params': ['warn', 10],
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': ['warn', 10],
    // 要求中缀操作符周围有空格
    'space-infix-ops': [
      'warn', {
        int32Hint: false
      }
    ],
    // 禁止 function 标识符和应用程序之间有空格
    'no-spaced-func': 'warn',
    // 禁止属性前有空白
    'no-whitespace-before-property': 'warn',
    // 禁止使用多个空格
    'no-multi-spaces': 'warn',
    // 禁止使用 空格 和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 'warn',
    // 禁止对函数参数再赋值及修改其属性
    'no-param-reassign': 'warn',
    // 要求构造函数首字母大写
    'new-cap': 'warn',
    // 允许_开头的未使用参数
    'no-unused-vars': [
      'warn', {
        argsIgnorePattern: '^_'
      }
    ],
    // 建议使用 const
    'prefer-const': 'warn',
    // 禁用函数内没有yield的 generator 函数
    'require-yield': 'warn',
    // 建议 generator 函数中 * 号周围有空格，比如 function* generator() {}
    'generator-star-spacing': [
      'warn', {
        before: false,
        after: true
      }
    ],
    // 建议在 yield* 表达式中 * 周围使用空格，比如 yield* other();
    'yield-star-spacing': [
      'warn', {
        before: false,
        after: true
      }
    ],

    // 不对注释前的空格做强制要求
    'spaced-comment': [0, 'always'],
    // 允许使用匿名函数
    'func-names': [0],
    // 不对数组或对象末尾逗号做强制要求
    'comma-dangle': [1, 'never'],
    'block-spacing': [2, 'always'],
    'linebreak-style': ['error', 'unix'],

    // ---------------------------- react -----------------------------------

    // 处理 import 时的报错，webpack 兼容问题
    'import/extensions': [0],
    'import/no-unresolved': [0],
    'import/no-extraneous-dependencies': [0],
    // react
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-space-before-closing': [2, 'never'],
    'react/jsx-filename-extension': [
      1, {
        extensions: ['.js', '.jsx']
      }
    ],
    // 使用 pureRender 时，会出现错误的 class 提示信息
    'react/prefer-stateless-function': [0]
  }
};
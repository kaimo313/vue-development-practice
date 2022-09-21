module.exports = {
  // 指定测试的文件
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  // 类似webpack的loader
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  // 忽略node_modules文件夹
  transformIgnorePatterns: ["/node_modules/"],
  // 类似webpack的 alias：支持源代码中相同的 `@` -> `src` 别名
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  // 快照的序列化工具
  snapshotSerializers: ["jest-serializer-vue"],
  // 指定哪些文件走单元测试
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  // 给 jsdom 使用
  testURL: "http://localhost/",
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};

module.exports = {
    //   preset: "@vue/cli-plugin-unit-jest",
    moduleFileExtensions: [
        "js",
        "jsx",
        "json",
        // tell Jest to handle *.vue files
        "vue",
    ],
    transform: {
        // process *.vue files with vue-jest
        "^.+\\.vue$": require.resolve("vue-jest"),
        ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": require.resolve(
            "jest-transform-stub"
        ),
        "^.+\\.jsx?$": require.resolve("babel-jest"),
    },
    transformIgnorePatterns: ["/node_modules/"],
    // support the same @ -> src alias mapping in source code
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    // serializer for snapshots
    snapshotSerializers: ["jest-serializer-vue"],
    testMatch: [
        "**/*.spec.[jt]s?(x)",
        "**/__tests__/*.[jt]s?(x)"
    ],
    // https://github.com/facebook/jest/issues/6766
    testURL: "http://localhost/",
    // 添加测试报告
    // 是否开启测试报告覆盖率
    collectCoverage: process.env.COVERAGE === "true",
    // 哪些文件作为测试报告的基本数据
    collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"]
};

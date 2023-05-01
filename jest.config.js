module.exports = {
  globals: {},
  preset: "ts-jest",
  transform: {
    "^.+\.(jsx|tsx|ts|cjs|js|html)$": "ts-jest",
  },
  // 测试覆盖范围
  collectCoverageFrom: [
    "**/*.test.{js,jsx,tsx,ts}",
    "**/*__test__/*.{js,jsx,tsx,ts}"
  ],
  // 忽略项
  testPathIgnorePatterns: [
    '/test/.test.ts'
  ],
  cacheDirectory: 'node_modules/.cache/jest',
  // 下面非要从重要, 将不忽略 lodash-es, other-es-lib 这些es库, 从而使ts-jest去处理它们
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(axios))"]
}

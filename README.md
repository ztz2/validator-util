# basic
<a href="https://www.npmjs.com/org/api-helper"><img src="https://img.shields.io/npm/l/@api-helper/core" alt="Package License" /></a>

描述

- 💪 基于Typescript构建.
- ⚙️ 单元测试覆盖.
- ⚙️ Browser/Node/esModule support.


## 快速开始
### 安装
pnpm
```shell
pnpm install validator-util
```
yarn
```shell
yarn add validator-util
```
npm
```shell
npm install validator-util
```
### 使用
ES6
```javascript
import { isEmail } from 'validator-util';

isEmail('hello@world.com'); // -> true
```

支持Tree shaking的导入
```javascript
import isEmail from 'validator-util/es/is-email';

isEmail('hello@world.com'); // -> true
```

其他方式导入
```javascript
var validator = require('validator-util');

validator.isEmail('hello@world.com'); // -> true
```

浏览器中直接运行，复制文件`validator-util.js`或`validator-util.min.js`到项目中即可。
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>浏览器中直接运行</title>
</head>
<body>
<script src="validator-util.min.js"></script>
<script>
  window.validatorUtil.isEmail('hello@world.com'); // -> true
</script>
</body>
</html>
```

## License
[MIT](https://opensource.org/licenses/MIT) Copyright (c) 2023-present, [ztz2](https://github.com/ztz2)

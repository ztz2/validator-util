<h1
    style="background: -webkit-linear-gradient(315deg, rgb(255,87,34) 0%, #fee140 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent"
>
    <a href="https://github.com/ztz2/api-helper" target="_blank">
        API Helper
    </a>
</h1>
<p>
    <a href="https://www.npmjs.com/org/api-helper">
        <img src="https://img.shields.io/npm/l/@api-helper/core" alt="Package License" />
    </a>
</p>

- 💪 基于Typescript构建
- ⚙️ 单元测试覆盖


## 快速开始
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

## API
### isUSCI
法人和其他组织统一社会信用代码校验，基于[IDCheck（Go语言）](https://github.com/bluesky335/IDCheck)实现，计算规则参考国家标准文件：

- **标准号：GB 32100-2015**：[法人和其他组织统一社会信用代码编码规则](http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=24691C25985C1073D3A7C85629378AC0)

> 注：由于早期部分试点地区推行 `法人和其他组织统一社会信用代码` 较早，会存在部分代码不符合国家标准的情况。但它们都是合法的代码，应当另行处理。
> 例如：
> 
> **福建恒跃柳工机械销售有限公司**: `91350100M0001TGQXM` 计算出的校验位是 1 和 M 不符
>
> **厦门云上晴空航空科技有限公司**: `91350211M0000XUF46` 计算出的校验位是 R 和 6 不符
>
> **厦门黑脉网络科技有限公司**: `91350203M0001FUE2P` 计算出的校验位是 J 和 P 不符

#### Go语言版本
LiuWanLin [IDCheck](https://github.com/bluesky335/IDCheck)

### isID
法人和其他组织统一社会信用代码校验，基于[IDCheck（Go语言）](https://github.com/bluesky335/IDCheck)实现，计算规则参考国家标准文件：

- **标准号：GB 11643-1999**：[公民身份证号码](http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=080D6FBF2BB468F9007657F26D60013E)

#### Go语言版本
LiuWanLin [IDCheck](https://github.com/bluesky335/IDCheck)


## API
| API名称       | 描述                          |
|-------------|-----------------------------|
| isEmail     | 邮箱校验(兼容中文邮箱校验)              |
| isExactID   | 身份证校验（严格模式）                 |
| isExactUSCI | 法人和其他组织统一社会信用代码的合法性校验（严格模式） |

### 展示

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, [ztz2](https://github.com/ztz2)

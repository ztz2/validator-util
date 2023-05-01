# validator-util
<a href="https://www.npmjs.com/org/api-helper"><img src="https://img.shields.io/npm/l/@api-helper/core" alt="Package License" /></a>

字符校验工具库，内置各种校验规则

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
import isEmail from 'validator-util/es/lib/is-email';

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
<script src="validator-util.js"></script>
<script>
  window.validatorUtil.isEmail('hello@world.com'); // -> true
</script>
</body>
</html>
```

## API
| 方法名                   | 说明                    | 示例                                                                                                                                                                                                                                         | 参数                                                                                                                                                                                                                                                            |
|-----------------------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| isID                  | 身份证，支持一代身份证、二代身份证     | 例如: 11010119900101119X                                                                                                                                                                                                                     | (value: string, options:? { exact?: boolean }) => boolean <br/>`options.exact` 是否启用严谨校验，默认false，注意严谨校验不能用在第一代身份证。非严谨使用正则，严谨校验进行计算，计算规则参考“中国国家标准化管理委员会” [GB 11643-1999 公民身份证号码](http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=080D6FBF2BB468F9007657F26D60013E)   |
| isUSCI                | 法人和其他组织统一社会信用代码的合法性校验 | 例子: 91350100M000100Y43                                                                                                                                                                                                                     | (value: string, options:? { exact?: boolean }) => boolean <br/>`options.exact` 是否启用严谨校验，默认false，非严谨使用正则，严谨校验进行计算，计算规则参考“中国国家标准化管理委员会” [GB 32100-2015 法人和其他组织统一社会信用代码编码规则](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=24691C25985C1073D3A7C85629378AC0) |
| isEmail               | 邮箱校验(兼容中文邮箱校验)        | 例如: hello@world.com, 中文邮箱名@gmail.com                                                                                                                                                                                                       | (value: string) => boolean                                                                                                                                                                                                                                    |
| isPhone               | 手机号码和座机号码的联合校验        | 例如: +8617888829981, 19119255642, 0936-4211235                                                                                                                                                                                              | (value: string, options:? { exact?: boolean }) => boolean <br/>`options.exact` 是否启用严谨校验，默认false，严谨校验根据工信部2019年最新公布的手机号段; 非严谨校验只要是13,14,15,16,17,18,19开头即可                                                                                                     |
| isMobilePhone         | 手机号码校验                | 例如: +8617888829981, 19119255642                                                                                                                                                                                                            | (value: string, options:? { exact?: boolean }) => boolean <br/>`options.exact` 是否启用严谨校验，默认false，严谨校验根据工信部2019年最新公布的手机号段; 非严谨校验只要是13,14,15,16,17,18,19开头即可                                                                                                     |
| isTelPhone            | 座机号码校验                | 例如: 0936-4211235, 0936-4211235, 89076543, 010-12345678-1234                                                                                                                                                                                | (value: string) => boolean                                                                                                                                                                                                                                    |
| isIMEI                | 手机机身码(IMEI)校验         | 例如: 1234567890123456                                                                                                                                                                                                                       | (value: string) => boolean                                                                                                                                                                                                                                    |
| isTrainNumber         | 火车车次校验                | 例如: G1868, D102, D9, Z5, Z24, Z17                                                                                                                                                                                                          | (value: string) => boolean                                                                                                                                                                                                                                    |
| isZhCN                | 中文/汉字校验               | 例如: 前端, 科学                                                                                                                                                                                                                                 | (value: string) => boolean                                                                                                                                                                                                                                    |
| isHtmlTag             | html标签校验(宽松匹配)        | 例如: `<div id="app"> 2333 </div>, <input type="text">, <br>`                                                                                                                                                                                | (value: string) => boolean                                                                                                                                                                                                                                    |
| isDomainName          | 域名校验(非网址, 不包含协议)      | 例如: www.baidu.com, baidu.com, baidu.com.cn, api.baidu.com, nodejs.org, nodejs.cn , <br/>反例: http://baidu.com, https://baidu.com, www.百度.com                                                                                                | (value: string) => boolean                                                                                                                                                                                                                                    |
| isHouseholdRegister   | 户口薄校验                 | 例如: 441421999707223115                                                                                                                                                                                                                     | (value: string) => boolean                                                                                                                                                                                                                                    |
| isURL                 | 网址校验                  | 例如: www.qq.com, https://vuejs.org/v2/api/#v-model, www.qq.99, //www.qq.com, www.腾讯.cs, ftp://baidu.qq, http://baidu.com, https://www.amap.com/search?id=BV&city=4&geoobj=11&query_type=IDQ&query=23&zoom=10.15, 360.com:8080/vue/#/a=1&b=2 | (value: string) => boolean                                                                                                                                                                                                                                    |
| isUrlWithPort         | 网址校验(必须带端口号的网址或IP)    | 例如: https://www.qq.com:8080, 127.0.0.1:5050, baidu.com:8001, http://192.168.1.1:9090 , <br/>反例: 192.168.1.1, https://www.jd.com                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |
| isThunderxLink        | 迅雷链接校验                | 例如: thunder://QUEsICdtYWduZXQ26P3h0PXVybjpidGloOjBCQTE0RTUxRkUwNjU1RjE0Qzc4NjE4RjY4NDY0QjZFNTEyNjcyOUMnWlo=                                                                                                                                | (value: string) => boolean                                                                                                                                                                                                                                    |
| isEd2kLink            | ed2k链接校验              | 例如: ed2k://file%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4                                                                                                                                           | (value: string) => boolean                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                   |%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/                                                                                                                                                                                                                            | file                                                                                                                                                                                                                                                          |%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |
| isMagnetLink          | 磁力链接校验                | 例如: magnet:?xt=urn:btih:40A89A6F4FB1498A98087109D012A9A851FBE0FC                                                                                                                                                                           | (value: string) => boolean                                                                                                                                                                                                                                    |%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |
| isSubnetMask          | 子网掩码校验(不包含 0.0.0.0)   | 例如: 255.255.255.0, 255.255.255.255, 255.240.0.0                                                                                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |
| isLinuxHiddenFilePath | linux"隐藏文件"路径校验       | 例如: /usr/ad/.dd, /root/.gitignore, /.gitignore                                                                                                                                                                                             | (value: string) => boolean                                                                                                                                                                                                                                    |%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |
| isLinuxDirPath        | linux文件夹路径校验          | 例如: /usr/ad/dd/, /, /root/, / a a / a / a a /                                                                                                                                                                                              | (value: string) => boolean                                                                                                                                                                                                                                    |%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |
| isLinuxFilePath       | linux"隐藏文件"路径校验       | 例如: /root/b.ts, /root/abc                                                                                                                                                                                                                  | (value: string) => boolean                                                                                                                                                                                                                                    |%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |
| isWindowDirPath       | window"文件夹"路径校验       | 例如: C:\Users\Administrator\Desktop, e:\m\                                                                                                                                                                                                  | (value: string) => boolean                                                                                                                                                                                                                                    |%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |
| isWindowFilePath      | window下"文件"路径         | 例如: C:\Users\Administrator\Desktop\qq.link, e:\m\vscode.exe                                                                                                                                                                                | (value: string) => boolean                                                                                                                                                                                                                                    |%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |
| isAShares             | 股票代码(A股)校验            | 例如: sz000858, SZ002136, sz300675, SH600600, sh601155                                                                                                                                                                                       | (value: string) => boolean                                                                                                                                                                                                                                    |%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |
| isExamScore           | 考卷分数校验                | 大于等于0, 小于等于150, 支持小数位出现5, 例如: 145.5, 150, 100.5                                                                                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |
| isHtmlComment         | html注释校验              | 例如: `<!--<div class="_bubble"></div>--><div>chenguzhen87</div><div class="_bubble"></div>-->`                                                                                                                                              | (value: string) => boolean                                                                                                                                                                                                                                    |%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |
| isMd5                 | md5格式校验(32位)          | 例如: 21fe181c5bfc16306a6828c1f7b762e8                                                                                                                                                                                                       | (value: string) => boolean                                                                                                                                                                                                                                    |%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/                                                                                                                            | (value: string) => boolean                                                                                                                                                                                                                                    |



## 身份证号码、法人和其他组织统一社会信用代码的合法性校验
校验身份证号码、法人和其他组织统一社会信用代码的合法性参考[IDCheck](https://github.com/bluesky335/IDCheck)，这是TS程序的实现方式。计算规则参考国家标准文件：

- **标准号：GB 11643-1999**：[公民身份证号码](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=080D6FBF2BB468F9007657F26D60013E)

- **标准号：GB 32100-2015**：[法人和其他组织统一社会信用代码编码规则](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=24691C25985C1073D3A7C85629378AC0)

> 注：由于早期部分试点地区推行 `法人和其他组织统一社会信用代码` 较早，会存在部分代码不符合国家标准的情况。但它们都是合法的代码，应当另行处理。
> 例如：
>
> **福建恒跃柳工机械销售有限公司**: `91350100M0001TGQXM` 计算出的校验位是 1 和 M 不符
>
> **厦门云上晴空航空科技有限公司**:`91350211M0000XUF46` 计算出的校验位是 R 和 6 不符
>
> **厦门黑脉网络科技有限公司**`91350203M0001FUE2P` 计算出的校验位是 J 和 P 不符

### Go语言版本
LiuWanLin [IDCheck](https://github.com/bluesky335/IDCheck)

## License
[MIT](https://opensource.org/licenses/MIT) Copyright (c) 2023-present, [ztz2](https://github.com/ztz2)

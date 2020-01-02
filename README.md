<div align="center">

[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)

</div>

# 简介
这是一个jquery插件，基于$.ajax方法扩展，取消多次重复的请求。



# 浏览器支持
1.  支持所有现代浏览器
2.  IE5+

# 使用
1. `git clone https://github.com/ChrisDowney1996/jquery-fetch.git` 或者下 `zip包`
2.  引入dist目录下文件到项目里面，当使用 $.ajax 所有请求自动取消重复请求
3.  基于 $.ajax 的属性扩展，取消这个功能，只需要在 $.ajax 参数属性里面加 `isAutoCancel: false`
```
<!-- 引入插件！注意要在引入jquery之后再引入它 -->
<script src="../dist/jquery-fetch.min.js"></script>
<script>
  var requestTimer
  var requestNum = 10
  requestTimer = setInterval(function () {
    requestNum --
    if (requestNum === 0) {
      clearInterval(requestTimer)
    }
    $.ajax('https://easy-mock.com/mock/5bf75efb5cfdd6564a60da75/example/mock',{
      isAutoCancel: true, // true: 自动取消重复请求(默认), false: 正常ajax请求
      success: function (data) {
        console.log('请求成功：', data)
      }
    })
  })
</script>
```

# License
[MIT](http://opensource.org/licenses/MIT)

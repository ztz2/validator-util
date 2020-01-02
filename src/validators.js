/**
 * @description 请求工具类
 * @dependencies ['jQuery']
 */

!function (global, $) {
  'use strict'

  initTools()

  var pending = []
  var $ajax = $.ajax

  function fetch (url, set) {
    var settings = {}
    var baseURL = global.FETCH_SERVER_URL || ''
    var fullURL = ''
    if (typeof url === 'object') {
      settings = Object.assign({}, settings, url)
      if (url.url) {
        fullURL = url.url.indexOf(baseURL) == -1 ? baseURL + url.url : url.url
      }
    }
    if (typeof set === 'object') {
      settings = Object.assign({}, settings, set)
      if (set.url) {
        fullURL = set.url.indexOf(baseURL) == -1 ? baseURL + set.url : set.url
      }
    }
    if (typeof url === 'string') {
      fullURL = url.indexOf(baseURL) == -1 ? baseURL + url : url
    }
    settings.url = fullURL
    // 整理回调函数相关
    var error  = settings.error
    var success = settings.success
    var complete = settings.complete

    // 获取配置项参数
    var method = settings.type || 'get'
    var isAutoCancel = settings.isAutoCancel

    // 设置参数格式
    if (settings.type == 'post') {
      settings.contentType = settings.contentType || 'application/json; charset=UTF-8'
      if (settings.data != null && settings.contentType.indexOf('application/json') != -1 && typeof settings.data != 'string') {
        settings.data = JSON.stringify(settings.data)
      }
    }

    // 生成取消令牌
    var brand = window.encodeURIComponent(fullURL + '&' + method)

    // 取消执行
    if (isAutoCancel == true) {
      cancelFetch(brand)
    }
    // 执行请求相关
    var ajaxInstance = $ajax(Object.assign({}, settings, {
      success: function (data) {
        success && success(data)
      },
      error: function (data) {
        error && error(data)
      },
      complete: function (data) {
        if (isAutoCancel == true) {
          for (var i = 0; i < pending.length; i++) {
            if (pending[i]._brand == brand) {
              pending.splice(i, 1)
            }
          }
        }
        complete && complete(data)
      }
    }))
    // 将执行之后的实例添加到请求记录数组
    if (isAutoCancel == true) {
      ajaxInstance._brand = brand
      pending.push(ajaxInstance)
    }
    return ajaxInstance
  }

  /**
   * @param brand {*} 不传参数取消所有可以取消请求
   */
  function cancelFetch (brand) {
    for (var i = 0; i < pending.length; i++) {
      if (brand == null) { // 如果为空，删除所有
        pending[i].abort() // 执行取消操作
        pending.splice(i, 1) // 把这条记录从数组中移除
      } else if (pending[i]._brand === brand) {
        pending[i].abort()
        pending.splice(i, 1)
      }
    }
  }

  // 初始化需要的工具类
  function initTools () {
    if (typeof Object.assign != 'function') {
      Object.assign = assign
    }
    function assign (target) {
      if (Object.prototype.toString.call(target) != '[object Object]') { // TypeError if undefined or null
        throw new TypeError('Cannot convert not object to object');
      }
      var result = target
      for (var index = 1; index < arguments.length; index++) {
        var nextObject = arguments[index]
        if (Object.prototype.toString.call(nextObject) == '[object Object]') { // Skip over if undefined or null
          for (var nextKey in nextObject) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextObject, nextKey)) {
              result[nextKey] = nextObject[nextKey]
            }
          }
        } else {
          console.warn(nextObject, 'Cannot convert not object to object')
        }
      }
      return result
    }
  }

  // 绑定到jQuery静态方法上
  $.extend({
    ajax: fetch
  })

}(window, window.$)

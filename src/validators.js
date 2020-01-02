void function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define(factory)
  } else {
    global.validators = factory()
  }
}(this, function () {
  var validators = function () {
    return new validators.fn.init()
  }
  var _validatorsPrototype = validators.fn = validators.prototype = {
    constructor: validators,
    init: function () { return this }
  };
  validators.fn.init.prototype = validators.fn
  validators.extend = validators.fn.extend = _extend

  function _extend () {
    var args = [].slice.call(arguments)
    var type = args[args.length - 1]
    var merge = function (obj1, obj2) {
      if (!_isObject(obj1) || !_isObject(obj2)) {
        console.warn('合并对象数据类型是Object')
        return obj1
      }
      for (var key in obj2) {
        obj1[key] = obj2[key]
      }
      return obj1
    }
    if (args.length == 0) {
      return this
    }
    if (type == 'all' || args.length == 1) {
      if (!_isObject(args[0])) {
        console.warn('扩展参数数据类型是Object')
        return this
      }
      for (var key in args[0]) {
        this[key] = args[0][key]
        if (type == 'all') {
          if (this.constructor === validators) {
            validators[key] = args[0][key]
          } else {
            _validatorsPrototype[key] = args[0][key]
          }
        }
      }
      return this
    } else {
      for (var i = 1; i < args.length; i++) {
        merge(args[0], args[i])
      }
      return args[0]
    }
  }

  /**
   * @description 校验Object类型
   * @param value {any} 验证参数
   * @return {boolean}
   */
  function _isObject (value) {
    return Object.prototype.toString.call(value) === '[object Object]'
  }

  /**
   * @description 校验Array类型
   * @param value {any} 验证参数
   * @return {boolean}
   */
  function _isArray (value) {
    return Object.prototype.toString.call(value) === '[object Array]'
  }

  /**
   * @description 校验身份证 （计算规则参考“中国国家标准化管理委员会”官方文档：http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=080D6FBF2BB468F9007657F26D60013E）
   * @param value {string} 验证参数
   * @return {boolean}
   */
  function _isID (value) {
    if (typeof value != 'string') {
      console.warn('参数类型错误：参数类型为String')
      return false
    }
    // a1与对应的校验码对照表，其中key表示a1，value表示校验码，value中的10表示校验码X
    var a1Map = {
      0: 1,
      1: 0,
      2: 10,
      3: 9,
      4: 8,
      5: 7,
      6: 6,
      7: 5,
      8: 4,
      9: 3,
      10: 2
    };
    var idStr = value.toUpperCase()
    var reg = /^[0-9]{17}[0-9X]$/
    if (!reg.exec(idStr)) {
      return false
    }
    var sum = 0
    var signChar = ''
    for (var index = 0; index < idStr.length; index++) {
      var i = 18 - index
      var c = idStr.charAt(index)
      var v, weight
      if (i != 1) {
        v = parseInt(c)
        if (!isNaN(v)) {
          // 计算加权因子
          weight = parseInt(Math.pow(2, parseFloat(i - 1))) % 11
          sum += (v * weight)
        } else {
          return false
        }
      } else {
        signChar = c.toString()
      }
    }
    var a1 = a1Map[sum % 11]
    var a1Str = a1.toString()
    if (a1 == 10) {
      a1Str = 'X'
    }
    return a1Str == signChar
  }

  /**
   * @description 校验法人和其他组织统一社会信用代码的合法性 （// 计算规则参考“中国国家标准化管理委员会”官方文档：http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=24691C25985C1073D3A7C85629378AC0）
   * @param value {string} 验证参数
   * @return {boolean}
   */
  function _isUSCI (value) {
    if (typeof value != 'string') {
      console.warn('参数类型错误：参数类型为String')
      return false
    }
    // 代码字符对应的值
    var valueMap = {
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      'A': 10,
      'B': 11,
      'C': 12,
      'D': 13,
      'E': 14,
      'F': 15,
      'G': 16,
      'H': 17,
      'J': 18,
      'K': 19,
      'L': 20,
      'M': 21,
      'N': 22,
      'P': 23,
      'Q': 24,
      'R': 25,
      'T': 26,
      'U': 27,
      'W': 28,
      'X': 29,
      'Y': 30
    }
    var usciStr = value.toUpperCase()
    var reg = /^[A-Z0-9]{18}$/
    if (!reg.exec(usciStr)) {
      return false
    }
    var weight = 0, sum = 0, index = 0, c, v, usciStrRange = usciStr.slice(0, 17)
    for (index = 0; index < usciStrRange.length; index++) {
      c = usciStrRange.charAt(index)
      v = valueMap[c]
      weight = parseInt(Math.pow(3, parseFloat(index))) % 31 // 计算加权因子
      sum += v * weight
    }
    var mod = sum % 31
    var sign = 31 - mod
    if (sign == 31) {
      sign = 0
    }
    var signChar
    for (var key in valueMap) {
      signChar = key
      if (valueMap[key] == sign) {
        break
      }
    }
    var lastStr = usciStr.slice(17, 18)
    var signStr = signChar.toString()
    return signStr == lastStr
  }

  validators.extend({
    isID: _isID,
    isUSCI: _isUSCI,
    isArray: _isArray,
    isObject: _isObject
  }, 'all')

  return validators
})

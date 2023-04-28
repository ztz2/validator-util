(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.validatorUtil = factory());
})(this, (function () { 'use strict';

    /**
     * @description 邮箱校验(兼容中文邮箱校验)
     * @param {string} value 验证参数
     * @return {boolean}
     */
    function isEmail(value) {
        var rex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (/[\u4e00-\u9fa5]/.test(value)) {
            var rex_1 = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            return rex_1.test(value);
        }
        return rex.test(value);
    }

    /**
     * @description 校验身份证，支持一代身份证、二代身份证
     * @param {string} value 验证参数
     * @param {Object=} options 可选项
     * @param {boolean=} options.exact 是否启用严格模式，默认true，非严格模式使用正则，严格模式进行计算（计算规则参考“中国国家标准化管理委员会”官方文档：http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=080D6FBF2BB468F9007657F26D60013E）
     * @return {boolean}
     */
    function isID(value, options) {
        // 非严格模式
        if ((options === null || options === void 0 ? void 0 : options.exact) === false) {
            var rex = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/;
            return rex.test(value);
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
        var idStr = value.toUpperCase();
        var reg = /^[0-9]{17}[0-9X]$/;
        if (!reg.test(idStr)) {
            return false;
        }
        var sum = 0;
        var signChar = '';
        for (var index = 0; index < idStr.length; index++) {
            var i = 18 - index;
            var c = idStr.charAt(index);
            var v = void 0;
            var weight = void 0;
            if (i != 1) {
                v = parseInt(c);
                if (!isNaN(v)) {
                    // 计算加权因子
                    weight = parseInt(String(Math.pow(2, parseFloat(String(i - 1))))) % 11;
                    sum += (v * weight);
                }
                else {
                    return false;
                }
            }
            else {
                signChar = c.toString();
            }
        }
        var a1 = a1Map[sum % 11];
        var a1Str = a1.toString();
        if (a1 == 10) {
            a1Str = 'X';
        }
        return a1Str === signChar;
    }

    /**
     * @description 手机机身码(IMEI)校验
     * @param {string} value 验证参数
     * @return {boolean}
     */
    function isIMEI(value) {
        var rex = /^\d{15,17}$/;
        return rex.test(value);
    }

    /**
     * @description 火车车次校验
     * @param {string} value 验证参数
     * @return {boolean}
     */
    function isTrainNumber(value) {
        var rex = /^[GCDZTSPKXLY1-9]\d{1,4}$/;
        return rex.test(value);
    }

    /**
     * @description 校验法人和其他组织统一社会信用代码的合法性
     * @param {string} value 验证参数
     * @param {Object=} options 可选项
     * @param {boolean=} options.exact 是否启用严格模式，默认true，非严格模式使用正则，严格模式进行计算（计算规则参考“中国国家标准化管理委员会”官方文档：http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=24691C25985C1073D3A7C85629378AC0）
     * @return {boolean}
     */
    function isUSCI(value, options) {
        // 非严格模式
        if ((options === null || options === void 0 ? void 0 : options.exact) === false) {
            var rex = /^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/;
            return rex.test(value);
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
        };
        var usciStr = value.toUpperCase();
        var reg = /^[A-Z0-9]{18}$/;
        if (!reg.test(usciStr)) {
            return false;
        }
        var weight = 0;
        var sum = 0;
        var index = 0;
        var c;
        var v;
        var usciStrRange = usciStr.slice(0, 17);
        for (index = 0; index < usciStrRange.length; index++) {
            c = usciStrRange.charAt(index);
            v = valueMap[c];
            // 计算加权因子
            weight = Number.parseInt(String(Math.pow(3, index))) % 31;
            sum += v * weight;
        }
        var mod = sum % 31;
        var sign = 31 - mod;
        if (sign == 31) {
            sign = 0;
        }
        var signChar = '';
        for (var key in valueMap) {
            signChar = key;
            if (valueMap[key] === sign) {
                break;
            }
        }
        return signChar === usciStr.slice(17, 18);
    }

    var validatorUtil = {
        isEmail: isEmail,
        isID: isID,
        isUSCI: isUSCI,
        isIMEI: isIMEI,
        isTrainNumber: isTrainNumber
    };

    return validatorUtil;

}));

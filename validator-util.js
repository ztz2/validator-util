(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.validatorUtil = factory());
})(this, (function () { 'use strict';

    /**
     * @description 域名校验(非网址, 不包含协议)
     * @param {string} value 验证参数
     * @return {boolean}
     */
    function isDomainName(value) {
        var rex = /^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,})$/;
        return rex.test(value);
    }

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
     * @description 户口薄校验
     * @param {string} value 验证参数
     * @return {boolean}
     */
    function isHouseholdRegister(value) {
        var rex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return rex.test(value);
    }

    /**
     * @description html标签校验(宽松匹配)
     * @param {string} value 验证参数
     * @return {boolean}
     */
    function isHtmlTag(value) {
        var rex = /<(\w+)[^>]*>(.*?<\/\1>)?/;
        return rex.test(value);
    }

    /**
     * @description 校验身份证，支持一代身份证、二代身份证
     * @param {string} value 验证参数
     * @param {Object=} options 可选项
     * @param {boolean=} options.exact 是否启用严谨校验，默认false，注意严谨校验不能用在第一代身份证。非严谨使用正则，严谨校验进行计算，计算规则参考“中国国家标准化管理委员会” [GB 11643-1999 公民身份证号码](http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=080D6FBF2BB468F9007657F26D60013E)
     * @return {boolean}
     */
    function isID(value, options) {
        // 非严谨模式
        if ((options === null || options === void 0 ? void 0 : options.exact) !== true) {
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
     * @description 校验手机号码
     * @param {string} value 验证参数
     * @param {Object=} options 可选项
     * @param {boolean=} options.exact 是否启用严谨校验，默认false，严谨校验根据工信部2019年最新公布的手机号段; 非严谨校验只要是13,14,15,16,17,18,19开头即可
     * @return {boolean}
     */
    function isMobilePhone(value, options) {
        var rex = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/;
        if ((options === null || options === void 0 ? void 0 : options.exact) !== true) {
            var rex_1 = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
            return rex_1.test(value);
        }
        return rex.test(value);
    }

    /**
     * @description 座机号码校验
     * @param {string} value 验证参数
     * @return {boolean}
     */
    function isTelPhone(value) {
        var rex = /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/;
        return rex.test(value);
    }

    /**
     * @description 手机号码和座机号码的联合校验
     * @param {string} value 验证参数
     * @param {Object=} options 可选项
     * @param {boolean=} options.exact 是否启用严谨校验，默认false，严谨校验根据工信部2019年最新公布的手机号段; 非严谨校验只要是13,14,15,16,17,18,19开头即可
     * @return {boolean}
     */
    function isPhone(value, options) {
        return isMobilePhone(value, options) || isTelPhone(value);
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
     * @param {boolean=} options.exact 是否启用严谨校验，默认true，非严谨校验使用正则，严谨校验进行计算，计算规则参考“中国国家标准化管理委员会” [GB 32100-2015 法人和其他组织统一社会信用代码编码规则](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=24691C25985C1073D3A7C85629378AC0)
     * @return {boolean}
     */
    function isUSCI(value, options) {
        // 非严谨模式
        if ((options === null || options === void 0 ? void 0 : options.exact) !== true) {
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

    /**
     * @description 中文/汉字校验
     * @param {string} value 验证参数
     * @return {boolean}
     */
    function isZhCN(value) {
        var rex = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/;
        return rex.test(value);
    }

    var validatorUtil = {
        isDomainName: isDomainName,
        isEmail: isEmail,
        isHouseholdRegister: isHouseholdRegister,
        isHtmlTag: isHtmlTag,
        isID: isID,
        isUSCI: isUSCI,
        isMobilePhone: isMobilePhone,
        isPhone: isPhone,
        isTelPhone: isTelPhone,
        isIMEI: isIMEI,
        isTrainNumber: isTrainNumber,
        isZhCN: isZhCN
    };

    return validatorUtil;

}));

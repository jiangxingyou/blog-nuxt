/*
 * 是否为css合法颜色值
 */
const $isColor = function (value) {
    const colorReg = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/;
    const rgbaReg = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/;
    const rgbReg = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;
    const hslReg = /^[hH][sS][lL]\(([0-9]|[1-9][0-9]|[1-3][0-5][0-9]|360)\,(100|[1-9]\d|\d)(.\d{1,2})?%\,(100|[1-9]\d|\d)(.\d{1,2})?%\)$/;

    return colorReg.test(value) || rgbaReg.test(value) || rgbReg.test(value);
};

/*
 * 是否为身份证号码
 */
const $isIdCard = function (value) {

}


//
export {$isColor,$isIdCard}
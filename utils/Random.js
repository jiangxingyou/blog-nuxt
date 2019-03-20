/*
 * 随机拆分一个数
 * params 总和，个数，最大值 {num}
 */

const $RandomSplit = function(total,nums,max) {
    let rest = total;
    let result = Array.apply(null, { length: nums })
        .map((n, i) => nums - i)
        .map(n => {
            const v = 1 + Math.floor(Math.random() * (max | rest / n * 2 - 1));
            rest -= v;
            return v;
        });
    result[nums - 1] += rest;
    return result;
}


export {$RandomSplit}
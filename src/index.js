module.exports = function reverse (n) {
    let sign = n > 0 ? 1 : -1;
    let numString = '' + n*sign; //чтобы не использовать Math.abs
    let res = '';
    for (let i = numString.length - 1; i >= 0; i--) {
        res = res + numString[i];
    }
    return Number(res);
}

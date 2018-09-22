module.exports = function getZerosCount(number) {
    return [...fifthGradeDivider(number)].reduce((sum, k) => sum += k);
};

function* fifthGradeDivider(n) {
    for (let i = 5; n / i >= 1; i *= 5) {
        yield Math.floor(n / i)
    }
}
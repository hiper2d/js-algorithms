String.prototype.toNumber = function() {
    return parseInt(this.replace(/\s+/gi, ''));
};

module.exports = function solveEquation(equation) {
    let quadraticToken = '* x^2';
    let quadraticTokenIndex = equation.indexOf(quadraticToken);
    let token = '* x ';
    let tokenIndex = equation.indexOf(token);

    let a = equation.substring(0, quadraticTokenIndex).toNumber();
    let b = equation.substring(quadraticTokenIndex + quadraticToken.length, tokenIndex).toNumber();
    let c = equation.substring(tokenIndex + token.length).toNumber();

    let d = getDiscriminantRoot(a, b, c);
    let x1 = getX(a, b, d);
    let x2 = getX(a, b, -1 * d);

    return (x1 <= x2) ? [x1, x2] : [x2, x1];
};

function getDiscriminantRoot(a, b, c) {
    return Math.sqrt(b * b - 4 * a * c);
}

function getX(a, b, d) {
    return Math.round(((-1 * b + d) / 2 / a));
}
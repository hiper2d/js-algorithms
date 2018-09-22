module.exports = function solveEquation(equation) {
    let quadraticToken = '* x^2';
    let token = '* x ';
    let a = equation.substring(0, equation.indexOf(quadraticToken)).noSpaces();
    let b = equation.substring(equation.indexOf(quadraticToken) + quadraticToken.length, equation.indexOf(token)).noSpaces();
    let c = equation.substring(equation.indexOf(token) + token.length).noSpaces();
    let d = b * b - 4 * a * c;
    let x1 = ((-1 * b + Math.sqrt(d)) / 2 / a).rd();
    let x2 = ((-1 * b - Math.sqrt(d)) / 2 / a).rd();
    return (x1 <= x2) ? [x1, x2] : [x2, x1];
};

String.prototype.noSpaces = function() {
    return this.replace(/\s+/gi, '');
};

Number.prototype.rd = function() {
    return Math.round(this);
};
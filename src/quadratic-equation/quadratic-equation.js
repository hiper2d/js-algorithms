module.exports = function solveEquation(equation) {
    let quadraticToken = '* x^2';
    let token = '* x ';
    let a = equation.substring(0, equation.indexOf(quadraticToken)).replace(/\s+/gi, '');
    let b = equation.substring(equation.indexOf(quadraticToken) + quadraticToken.length, equation.indexOf(token)).replace(/\s+/gi, '');
    let c = equation.substring(equation.indexOf(token) + token.length).replace(/\s+/gi, '');
    let d = b * b - 4 * a * c;
    let x1 = Math.round((-1 * b + Math.sqrt(d)) / 2 / a);
    let x2 = Math.round((-1 * b - Math.sqrt(d)) / 2 / a);
    return (x1 <= x2) ? [x1, x2] : [x2, x1];
};
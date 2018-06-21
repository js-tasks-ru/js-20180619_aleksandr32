/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
var x = +prompt('Введите число', 0);
var n = +prompt('Введите степень', 0);
n = parseInt(n);

function pow (x, n) {
	return Math.pow(x, n);
}
alert(pow(x, n));
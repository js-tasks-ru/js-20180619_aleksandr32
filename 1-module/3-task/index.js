"use strict";

let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';


function getMinMax(str) {
	
let arr = str.split(' ');
let arr2 = [];
let arr3 = [];

for (let i= 0; i< arr.length; i++) {
  arr2 = arr[i].split(',');

  for (let q= 0; q< arr2.length; q++) {
  	arr2[q] = parseFloat(arr2[q]);
  	arr3.unshift(arr2[q]);
  	} 	
}

let positiveArr = arr3.filter(function(number) {
  return number;
});

  let max = Math.max.apply(Math,positiveArr);
  let min = Math.min.apply(Math,positiveArr);
  return {min : min, max : max};
}

console.log(getMinMax);
/**
 * Let's make a calculator 🧮
 */

import { throws } from 'assert';

/** 
 * 1. calculate에 공통으로 들어가는 유니언 타입을 만든다.
 * 2. 옵션에따라 사칙연산을 실행하는 코드를짠다.
 * **/ 

type CalculateOption = 'add' | 'substract' | 'multiply' | 'divide'| 'remainder';

function calculate(calculateOption: CalculateOption, num1: number, num2: number) : number{

    switch(calculateOption){
        case 'add':
            return num1 + num2;
        case 'substract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        case 'remainder':
            return num1 % num2;
        default:
            throw new Error(`unknown calculateOption : ${calculateOption}`);
    }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

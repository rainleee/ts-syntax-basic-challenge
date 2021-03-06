/**
 * Let's make a calculator ๐งฎ
 */

import { throws } from 'assert';

/** 
 * 1. calculate์ ๊ณตํต์ผ๋ก ๋ค์ด๊ฐ๋ ์ ๋์ธ ํ์์ ๋ง๋ ๋ค.
 * 2. ์ต์์๋ฐ๋ผ ์ฌ์น์ฐ์ฐ์ ์คํํ๋ ์ฝ๋๋ฅผ์ง ๋ค.
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

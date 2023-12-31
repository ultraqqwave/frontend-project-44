#!/usr/bin/env node
import {
  answer, getAnswer, Congratulations, welcome, name,
} from '../src/cli.js';

function nod() {
  welcome();
  let count = 0;
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i !== 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    let result = randomNumber1 > randomNumber2 ? randomNumber2 : randomNumber1;
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    getAnswer();
    while (result > 0) {
      if (randomNumber1 % result === 0 && randomNumber2 % result === 0) {
        break;
      } else {
        result -= 1;
      }
    }
    if (Number(answer) === result) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    Congratulations();
  }
}
nod();

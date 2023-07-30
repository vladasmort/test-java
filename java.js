
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//1
console.log(`1`);
let a = rand(0, 10);
let b = rand(0, 10);
let result = 0;

console.log(`skaicius: A = ${a} ir B = ${b}`);

if (a > b) {
  result = `Didziausias yra A: ${a}`;
} else if (b > a) {
  result = `Didziausias  yra B: ${b}`;
} else {
  result = `yra lygus`;
}

console.log(result);

//2
console.log(`2`);
let array = [];
for (i = 1; i <= 10; i++) array.push(i);
console.log(array.join(", "));

//3
console.log(`3`);
array = [];
for (i = 0; i < 11; i++) if (i % 2 === 0) array.push(i);
console.log(array.join(", "));
console.log(`4`);
//4
array = [];
for (i = 0; i < 5; i++) array.push(rand(1, 10));
console.log(array.join(", "));

//5
console.log(`5`);
array = [];

while (true) {
  let number = rand(1, 10);
  array.push(number);
  if (number === 5) break;
}
console.log(array.join(", "));

//6
console.log(`6`);
array = [];
let max = 0;

for (i = 0; i < rand(20, 30); i++) array.push(rand(10, 30));

console.log(array.join(", "));

for (value of array) if (value > max) max = value;

console.log(`masyvo reiksme: ${max}`);

//7
console.log(`7`);
let letters = "ABCD";
array = [];
let A = 0;
let B = 0;
let C = 0;
let D = 0;

for (i = 0; i < 100; i++) {
  let randomLetter = letters[rand(0, letters.length - 1)];
  array.push(randomLetter);

  if (randomLetter === "A") A++;
  if (randomLetter === "B") B++;
  if (randomLetter === "C") C++;
  if (randomLetter === "D") D++;
}
console.log(array.join(", "));
console.log(`A : ${A}. B : ${B}, C : ${C}. D : ${D}`);

//8
console.log(`8`);
let number1 = 2;
let number2 = 3;
let number3 = 4;
let array1 = [5, 10, 12];
let array2 = [8, 2, 15];
let array3 = [1, 7];

function lygineSuma(a, b) {
  if (typeof a === `number` && typeof b === `number` && (a + b) % 2 === 0) return a + b;
  if (typeof a === `number` && typeof b === `number` && (a + b) % 2 !== 0)
    return "Skaiciu suma yra nelygine";
  if (typeof a === `object` && typeof b === `object` && (a.length - 1 + (b.length - 1)) % 2 === 0)
    return a.length + b.length;
  if (typeof a === `object` && typeof b === `object` && (a.length - 1 + (b.length - 1)) % 2 !== 0)
    return "Masyvu ilgiu suma yra nelygine";
}
console.log(
  ` ${number1} + ${number3}. =: ${lygineSuma(number1, number3)}`
);
console.log(` ${number1} ir ${number2}. ${lygineSuma(number1, number2)}`);
console.log(
  `masyvus ${array1} ir ${array2}. Masyvu ilgiu suma yra: ${lygineSuma(array1, array2)}`
);
console.log(`Turime masyvus ${array1} ir ${array3}. ${lygineSuma(array1, array3)}`);

// 9.
let primeNumber = true
function pirminisSkaicius(digit) {
  if (typeof digit === 'number') {
    for (let i = 0; i < digit; i++) {
      for (let j = 2; j < digit; j++) {
        if (digit % j === 0) {
          primeNumber = false
        }
      }
      if (primeNumber === true) {
        return 'pirminis'
      } else {
        return 'ne pirminis'
      }
    }
  }
}
console.log('9')
console.log(pirminisSkaicius(13))
// 10.
function telefonoNumeris(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr.length === 10 && arr[i] < 10) {
      const first = arr.slice(0, 3).join('')
      const second = arr.slice(3, 6).join('')
      const third = arr.slice(6, 10).join('')
      return `(${first}) ${second}-${third}`
    } else {
      return 'Masyvas neatitinka reikalavimų'
    }
  }
}
const test = [9, 4, 4, 8, 8, 6, 7, 6, 5, 5]
console.log('10')
console.log('tel. numeris: ', telefonoNumeris(test));

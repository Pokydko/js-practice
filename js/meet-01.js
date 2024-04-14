'use strict';

console.log(
  `---- next task ----> formatMinutesTo*Standart*Time*Format* function`,
);
// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі отримаємо "01:10"
function formatMinutesToTime(minutes) {
  const hours = String(Math.trunc(minutes / 60)).padStart(2, `0`);
  const onlyMinutes = String(minutes % 60).padStart(2, `0`);
  return `${hours}:${onlyMinutes}`;
}
console.log(formatMinutesToTime(70));
console.log(formatMinutesToTime(40));
console.log('');

console.log(`---- next task ----> getCountryInfo function`);
// Написати функцію getCountryInfo(country), котра буде
// отримувати назву країни і виводити інформацію про неї
// China => "Китай - найбільша країна за населенням у світі."
// Australia => "Австралія - найбільший острів та країна в Океанії."
// France => "Франція відома своєю гастрономією та мистецтвом."
// Germany => "Німеччина - найбільша економіка в Європі."
// Canada => "Канада - друга за площею країна у світі, відома своєю природою."
// Якщо країни немає, вивести повідомлення "Інформація про цю країну відсутня."
function getCountryInfo(country) {
  let isAnyCountry = false;
  if (country.toLowerCase().includes(`ukraine`)) {
    isAnyCountry = true;
    console.log(`Україна - понад усе!`);
  }
  if (country.toLowerCase().includes(`china`)) {
    isAnyCountry = true;
    console.log(`Китай - найбільша країна за населенням у світі.`);
  }
  if (country.toLowerCase().includes(`australia`)) {
    isAnyCountry = true;
    console.log(`Австралія - найбільший острів та країна в Океанії.`);
  }
  if (country.toLowerCase().includes(`france`)) {
    isAnyCountry = true;
    console.log(`Франція відома своєю гастрономією та мистецтвом.`);
  }
  if (country.toLowerCase().includes(`germany`)) {
    isAnyCountry = true;
    console.log(
      `Канада - друга за площею країна у світі, відома своєю природою.`,
    );
  }
  if (country.toLowerCase().includes(`canada`)) {
    isAnyCountry = true;
    console.log(
      `Канада - друга за площею країна у світі, відома своєю природою.`,
    );
  }
  if (!isAnyCountry) return `Інформація про цю країну відсутня.`;
  // switch (country) {
  //   case `China`:
  //     return `Китай - найбільша країна за населенням у світі.`;
  //   case `Australia`:
  //     return `Австралія - найбільший острів та країна в Океанії.`;
  //   case `France`:
  //     return `Франція відома своєю гастрономією та мистецтвом.`;
  //   case `Germany`:
  //     return `Німеччина - найбільша економіка в Європі.`;
  //   case `Canada`:
  //     return `Канада - друга за площею країна у світі, відома своєю природою.`;
  //   default:
  //     return `Інформація про цю країну відсутня.`;
  // }
}
console.log(getCountryInfo(`What about AusTRAlia or Ukraine?`));
console.log(getCountryInfo(`China`, false));
console.log('');

console.log(`---- next task ----> sumNufberDivineOn3and5 function`);
// Напишіть програму, яка обчислить суму всіх чисел (за допомогою циклу for)
// від 1 до 100, які діляться на 3 або на 5. І виведи в консоль рядок :
// `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`
function sumNufberDivineOn3and5(min, max) {
  let sum = 0;
  // for (let i = min; i <= max; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
  return `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`;
}
console.log(sumNufberDivineOn3and5(0, 100));
console.log('');

console.log(`---- next task ----> sumDiapasonEven function`);
// За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
// const max = 50;
// const min = 0;
function sumDiapasonEven(max, min) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    if (i % 2 === 1) continue;
    sum += i;
  }
  return sum;
}
console.log(sumDiapasonEven(50, 0));
console.log('');

console.log(`---- next task ----> evenNumberDiapasonLog function`);
//Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
// const max = 50;
// const min = 23;
function evenNumberDiapasonLog(min, max) {
  // for (let i = max; i > min; i - 2) console.log(i);
  return;
}
console.log(evenNumberDiapasonLog(14, 12));
console.log(evenNumberDiapasonLog(11, 21));
console.log(evenNumberDiapasonLog(21, 11));
console.log('');

console.log(`---- next task ----> checkString function`);
// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.
function checkString(value) {
  return typeof value === `string` && !value.includes('$')
    ? value.length
    : `Невірний ввід`;
}
console.log(checkString(`hello`, true));
console.log(checkString(`false$`, false));
console.log('');

console.log(`---- next task ----> evenOddFunction function`);
// Напишіть код, який перевіряє (за допомогою тернарного оператора),
// чи введене користувачем значення є парним числом і виводить
// відповідне повідомлення.
function evenOddFunction(value) {
  if (typeof value === `number`)
    return value % 2 === 0 ? `Число ${value} парне` : `Число ${value} не парне`;
  return `Invalid input!`;
}
console.log(evenOddFunction(14, true));
console.log(evenOddFunction(3, false));
console.log(evenOddFunction(`3`, false));
console.log('');

console.log(`---- next task ----> calculateSquare function`);
// Оголоси функцію calculateSquare(value).
// Функція має перевіряти чи є отримане значення - число
// або за можливості перетворити рядок на число
// Якщо це число функція возводить число у квадрат і виводить рядок
// `The square of ${numberValue} is ${squaredNumber}`
// numberValue - отримане число або перетворене з рядка число.
// squaredNumber - numberValue у квадраті.
// Якщо значення не є числом, функція повертає рядок 'Invalid input!'.
function calculateSquare(value) {
  const numberValue = parseFloat(value);
  return isNaN(numberValue)
    ? `Invalid input!`
    : `The square of ${numberValue} is ${Math.pow(numberValue, 2)}`;
}
console.log(calculateSquare(14, true));
console.log(calculateSquare(`false`, false));
console.log('');

console.log(`---- next task ----> canRegisterOnSite function`);
// Оголоси функцію canRegisterOnSite(age, hasAcceptedTerms),
// яка перевіряє, чи може користувач зареєструватись на сайті.
// І повертає true - якщо може зареєструватись і false, якщо - ні.
// Користувач може зареєструватись, якщо йому виповнилося 13 років
// і він прийняв умови використання.
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік користувача;
// hasAcceptedTerms - буль (вказує чи прийняв користувач умови використання);
function canRegisterOnSite(age, hasAcceptedTerms) {
  return age > 12 && hasAcceptedTerms;
}
console.log(canRegisterOnSite(14, true));
console.log(canRegisterOnSite(11, false, false));
console.log('');

console.log(`---- next task ----> hasDiscount function`);
// Оголоси функцію hasDiscount(age, isStudent, isPensioner),
// яка перевіряє, чи покупець має право на знижку.
// І повертає true - якщо має право на знижку і false, якщо - ні.
// Покупець має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік покупця;
// isStudent - буль (вказує чи є покупець студентом);
// isPensioner - буль  (вказує чи є покупець пенсіонером);
function hasDiscount(age, isStudent, isPensioner) {
  return (age > 11 && age < 19) || isPensioner || isStudent;
}
console.log(hasDiscount(14, true, true));
console.log(hasDiscount(11, false, false));
console.log('');

console.log(`---- next task ----> chackType function`);
// Напишіть функцію, яка приймає аргумент і визначає його тип даних.
// Якщо тип - строка, функція повертає "string", якщо число - "number",
// в іншому випадку - "unknown".
function chackType(value) {
  if (typeof value === `string`) return `string`;
  if (typeof value === `number`) return `number`;
  return `unknown`;
}
console.log(chackType(`value`));
console.log('');

console.log(`---- next task ----> isSecondChar_b_ function`);
// Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевір, що другим символом цього рядка є літера 'b'.
// Якщо так - виведи 'Так' у консоль, в противному випадку виведи 'Ні'.
function isSecondChar_b_(value) {
  if (value[1] === `b`) return `Так`;
  return `Ні`;
}
console.log(isSecondChar_b_(`DOESN'T have b as second`));
console.log(isSecondChar_b_(`!b! has "b" as second`));
console.log('');

console.log(`---- next task ----> typeofValue function`);
// Функція для визначення типу змінної:
// Написати функцію для визначення типу змінної.
// Функція отримує будь-яке значення в якості аргументу
// і визначає тип цієї змінної. Виводить в консоль
// повідомлення `Тип змінної: type`
function typeofValue(value) {
  return `Тип змінної: ${typeof value}`;
}
console.log(typeofValue(2));
console.log(`---- task ----`);

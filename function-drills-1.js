'use strict';

//console.log('My name is Marlon and I\'m 25 years old.');

/*function createGreeting() {
    console.log('My name is Marlon and I\'m 25 years old.');
}
createGreeting();*/

/*function createGreeting() {
  return 'My name is Marlon and I\'m 25 years old.';
}
const greetingOne = createGreeting();
console.log(greetingOne);*/

/*function createGreeting(name, age) {
  return `My name is ${name} and I'm ${age} years old.`;
}*/

function createGreeting(name, age) {
  const yearOfBirth = 2019 - age;
  return `My name is ${name} and I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age){
  return 2019 - age;
}



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

/*function getYearOfBirth(age){
  return 2019 - age;
}

function createGreeting(name, age){
const yob = getYearOfBirth(age); 
return `My name is ${name} and I was born in ${yob}`;
}*/

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  return 2019 - age;
}

/*try {
  const greetingOne = createGreeting('Marlon', -25);
}
catch(err) {
  console.log('Age cannot be negative');
}*/

//getYearOfBirth(-25);

function createGreeting(name, age) {
  if(name === undefined || age === undefined){
    throw new Error('Argument not valid');
  }
  if (age < 0){
    throw new Error('Age cannot be negative');
  }
  if (typeof age !== 'number'){
    throw new Error('Age must be a number');
  }
  const yob = getYearOfBirth(age); 
  return `My name is ${name} and I was born in ${yob}`;
}

console.log(createGreeting('Marlon', -25));
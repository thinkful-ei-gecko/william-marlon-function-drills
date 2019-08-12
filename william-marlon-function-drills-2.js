'use strict';

/*function jediName(firstName, lastName) {
  return lastName.slice(0,3) + firstName.slice(0,2);
}

let myName = jediName('William', 'Bae');
console.log(myName);*/

/*function beyond(num) {
  if (num === Infinity || num === -Infinity) {
    console.log('And beyond');
  }
  if (isFinite(num) && num > 0) {
    console.log('To infinity');
  }
  if (isFinite(num) && num < 0) {
    console.log('To negative infinity');
  }
  if (num === 0) {
    console.log('Staying home');
  }
}
console.log(beyond(-Infinity));
console.log(beyond(20));
console.log(beyond(-20));
console.log(beyond(0));*/

/*function decode(words){
  let array = words.split(' ');
  let codeResult = [];
  for(let i = 0; i < array.length; i++){
    if(array[i][0] === 'a'){
      codeResult.push(array[i][1]);
    }
    else if(array[i][0] === 'b'){
      codeResult.push(array[i][2]);
    }
    else if(array[i][0] === 'c'){
      codeResult.push(array[i][3]);
    }
    else if(array[i][0] === 'd'){
      codeResult.push(array[i][4]);
    }
    else{
      codeResult.push(' ');
    }
  }    
  return codeResult.join('');
}
console.log(decode('craft block argon meter bells brown croon droop'));*/

/*function howManyDays (month, leapYear) {
  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return `${month} has 31 days`;
    break;
  case 'April': 
  case 'June':
  case 'September':
  case 'November':
    return `${month} has 30 days`;
    break;
  case 'February':
    if (leapYear === true) {
      return `${month} has 29 days`;
    } else {
      return `${month} has 28 days`;
      break;
    }
  default:
    throw new Error('Must provide a valid month.');
  }
}
console.log(howManyDays('Marlon'));*/



/*function rockPaperScissors(num){
  const randomNo = Math.floor(Math.random() * 3) + 1;
  if(num < 1 || num > 3){
    throw new Error('Not a valid option');
  }
  if (num === randomNo){
    return 'Tie game, the computer chose: ' + randomNo;
  }
  if (num === 1){
    if(randomNo === 2){
      return 'You lose, the computer chose: ' + randomNo;
    }
    else if(randomNo === 3){
      return 'You win, the computer chose: ' + randomNo;
    }
  if (num === 2){
      if (randomNo === 1){
        return 'You win, the computer chose: ' + randomNo;
      }
      else if (randomNo === 3){
        return 'You lose, the computer chose: ' + randomNo;
      }
    if (num === 3){
    if (randomNo === 1){
          return 'You lose, the computer chose: ' + randomNo;
        }
        else if(randomNo === 2){
          return 'You win, the computer chose: ' + randomNo;
        }
      }
    } 
  }
}

console.log(rockPaperScissors(4));*/
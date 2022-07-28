const { log } = require('console');

//This program is a guessing game.
console.log('This game allows you to guess a number within a certain range.');
console.log('Enter quit in the promt to end the game.')

const prompt = require('prompt-sync')({ signint: true });
// Ask for a username
const username = prompt('Hi! Please input your Username... ');

let currentLevel = 1;
console.log(`Level ${currentLevel}`);

let points = 0;
let answer;
do {
  let number;
  let maxNum = currentLevel +1;

  const guessTheNumber = () => {
  number = Math.floor(Math.random() * maxNum + 1);
    // Set a variable for the highest number of the range
  answer = prompt(`Guess a number between 1 and ${maxNum} => `);
  };
  guessTheNumber();
  if (answer == number) {
    
    console.log('You guessed the number correctly!');
    
    // Add a point to user's points
    points += 5;
    console.log(`You have a total of ${points} points `);
    
    currentLevel += 1;
    console.log(`Level ${currentLevel}`);
    
  }else if (answer == "quit") {
    console.log('YOu have quit the game')
  }else {
    console.log("Oops, you guessed wrong! \nTry Again.");
  }
} while (answer != "quit" );

// Pick a random number between 1 and 3
function genComputerNum() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  return randomNumber;
}
// asign generated random number to variable
let randomNum;
let compValue;
let playerInput;
let playerSelection;
let result;
let playerWin = 0;
let computerWin = 0;
const para = document.createElement("p");
const whoWon = document.querySelector(".whoWon");
whoWon.appendChild(para);
const para2 = document.createElement("p");
const textbox = document.querySelector(".textbox");
textbox.appendChild(para2);
const score = document.querySelector(".score");
const para3 = document.createElement("p");
score.appendChild(para3);

// asign Rock Paper or Scissors to the random number and return the Value
function asignCompValue(randomNumber) {
  let compValue = "empty";
  switch (randomNumber) {
    case 1:
      compValue = "Rock";
      break;
    case 2:
      compValue = "Paper";
      break;
    case 3:
      compValue = "Scissors";
  }
  return compValue;
}

// ## Write Function that takes playerInput and converts it to so that the first letter is a Capital letter and the rest is lowercase. ##
function fixPlayerInput(input) {
  transformInput =
    input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
  return transformInput;
}

// playerSelection = fixPlayerInput(playerInput);
// console.log(playerSelection);
// console.log(compValue);

// ## edited so that the result returns in the console ##
// function theGame(playerSelection, computerSelection) {
//   if (playerSelection === "Rock" && computerSelection === "Scissors") {
//     alert("You Win! Rock beats Scissors");
//   } else if (playerSelection === "Rock" && computerSelection === "Paper") {
//     alert("You Lose! Paper beats Rock");
//   } else if (playerSelection === "Paper" && computerSelection === "Rock") {
//     alert("You Win! Paper beats Rock");
//   } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
//     alert("You Lose! Scissors beats Paper");
//   } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
//     alert("You Lose! Rock beats Scissors");
//   } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
//     alert("You Win! Scissors beats Paper");
//   } else if (playerSelection === computerSelection) {
//     alert(`It's a draw you both chose ${playerSelection}!`);
//   }
// }

function playRound(pSelection, cSelection) {
  if (pSelection === "Rock" && cSelection === "Scissors") {
    playerWin = playerWin + 1;
    return "You Win! Rock beats Scissors";
  } else if (pSelection === "Rock" && cSelection === "Paper") {
    computerWin = computerWin + 1;
    return "You Lose! Paper beats Rock";
  } else if (pSelection === "Paper" && cSelection === "Rock") {
    playerWin = playerWin + 1;
    return "You Win! Paper beats Rock";
  } else if (pSelection === "Paper" && cSelection === "Scissors") {
    computerWin = computerWin + 1;
    return "You Lose! Scissors beats Paper";
  } else if (pSelection === "Scissors" && cSelection === "Rock") {
    computerWin = computerWin + 1;
    return "You Lose! Rock beats Scissors";
  } else if (pSelection === "Scissors" && cSelection === "Paper") {
    playerWin = playerWin + 1;
    return "You Win! Scissors beats Paper";
  } else if (pSelection === cSelection) {
    return `It's a draw you both chose ${pSelection}!`;
  }
}
// This function loops through the playRound function 5 times and generates a
// new number for the computer to use. If a invalid option is givin it decrements
// i.

function game() {
  // for (let i = 1; i < 6; i++) {
  randomNum = genComputerNum();
  compValue = asignCompValue(randomNum);
  // playerInput = prompt(
  //   "Rock, Paper or Scissors?",
  //   "Enter Rock, Paper or Scissors"
  // );
  playerSelection = fixPlayerInput(playerInput);
  if (
    playerSelection === "Rock" ||
    playerSelection === "Paper" ||
    playerSelection === "Scissors"
  ) {
    result = playRound(playerSelection, compValue);
    para2.textContent = `You selected ${playerSelection}, the computer selected ${compValue}.`;
    para.textContent = `${result}`;
    // } else {
    //   i--;
    //   alert("Not a valid input, please enter Rock, Paper or Scissors");
    //   console.log("Not a valid input");
    // }
    if (playerWin === 5 || computerWin === 5) {
      if (playerWin > computerWin) {
        para3.textContent = `You won!`;
        resetCounters();
      } else para3.textContent = `You lost... Loser`;
      resetCounters();
    } else
      para3.textContent = `You won a total of ${playerWin} times, the computer won a total of 
    ${computerWin} times.`;
  }
}

function resetCounters() {
  playerWin = 0;
  computerWin = 0;
}

const rockbtn = document.querySelector("#rock");
rockbtn.addEventListener("click", function (e) {
  playerInput = e.target.attributes.id.value;
  game();
});

const paperbtn = document.querySelector("#paper");
paperbtn.addEventListener("click", function (e) {
  playerInput = e.target.attributes.id.value;
  game();
});

const scissorsbtn = document.querySelector("#scissors");
scissorsbtn.addEventListener("click", function (e) {
  playerInput = e.target.attributes.id.value;
  game();
});

// e.target.attributes.id.value

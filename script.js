//Code citation: Whatsdev, FreeCodeCamp (2018) Slightly modified source code. https://www.youtube.com/watch?v=jaVNP3nIAv0

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p")
const earth3_div = document.getElementById("e");
const wind2_div = document.getElementById("w");
const fire1_div = document.getElementById("f");
// These variables cache the dom. Set's it to where we can get to process whenever we want instead of storing it in a variable one time.

function getComputerChoice() {
    const choices = ['e', 'w', 'f'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(Letter) {
    if (Letter === "e")
        return "Earth";
    if (Letter === "w")
        return "Wind";
    return "Fire"; //If the others aren't met, return Fire.
}

function win(user, computer) {
   userScore++; 
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
//    const smallUserWord = "user".fontsize(3).sup();
//    const smallCompWord = "computer".fontsize(3).sup(); //sup is superscript, Can't say I really like this so I'll comment it out for now.
   //result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + ". You win!"; !!!Regular way but next is ES6
   result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You win!`;
   document.getElementById(user).classList.add('green-glow');
   setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 300);
}

function lose(user, computer) {
   computerScore++; 
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = `${convertToWord(user)} loses to ${convertToWord(computer)}. Tough luck.`;
   document.getElementById(user).classList.add('red-glow');
   //setTimeout(function() {document.getElementById(user).classList.remove('red-glow')}, 300); // !!! Normal way to do it. We'll use ES6 arrow function for practice
   setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 300);
}

function draw(user, computer) {
   result_p.innerHTML = `${convertToWord(user)} equals ${convertToWord(computer)}. It's a draw.`;
   document.getElementById(user).classList.add('gray-glow');
   setTimeout(() => document.getElementById(user).classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "ef":
        case "we":
        case "fw":
            win(userChoice, computerChoice);
            break;
        case "ew":
        case "wf":
        case "fe":
            lose(userChoice, computerChoice);
            break;
        case "ee":
        case "ww":
        case "ff":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    earth3_div.addEventListener('click', function () {
        game("e");
    })

    wind2_div.addEventListener('click', function () {
        game("w");
    })

    fire1_div.addEventListener('click', function () {
        game("f");
    })
}
main();

//let myChoice = prompt("Do you choose rock, paper or scissors?");
// let computerChoice = Math.random();

// if (computerChoice < 0.34) {
//     computerChoice = "rock";
// } else if (computerChoice <= 0.67) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// }

// function compare(choice1, choice2) {
//     if (choice1 === choice2) {
//         return "The result is a tie!";
//     }
//     if (choice1 === "rock") {
//         if (choice2 === "scissors") {
//             return "rock wins";
//         } else {
//             return "paper wins";
//         }
//     }
//     if (choice1 === "paper") {
//         if (choice2 === "rock") {
//             return "paper wins";
//         } else {
//             if (choice2 === "scissors") {
//                 return "scissors wins";
//             }
//         }
//         if (choice1 === "scissors") {
//             if (choice2 === "rock") {
//                 return "rock wins";
//             } else {
//                 if (choice2 === "paper") {
//                     return "scissors wins";
//                 }
//             }
//         }
//     }
// };

// //console.log("User Choice: " + userChoice);
// console.log("Computer Choice: " + computerChoice);
// compare()
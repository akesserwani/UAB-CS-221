
let user_input = prompt("Enter Rock, Paper, or Scissors: ");

user_input = user_input.toLowerCase();



let rand_int = Math.floor(Math.random() * 3);
let game_ai;


let win = function(){
  console.log("You Win!");
}

let lose = function(){
  console.log("You lose!");
}

if (rand_int == 0){
  game_ai = "rock";
} else if (rand_int == 1){
  game_ai = "paper";
} else if (rand_int == 2){
  game_ai = "scissors";
}

console.log("You chose " + user_input);
console.log("The computer chose " + game_ai);


if (game_ai == user_input){
  console.log("Its a tie!")
} else if (game_ai == "rock"){
  if (user_input == "paper"){
      win();
  } else if (user_input == "scissors"){
      lose();
  }
} else if (game_ai == "paper"){
  if (user_input == "rock"){
      lose();
  } else if (user_input == "scissors"){
      win();
  }
} else if (game_ai == "scissors"){
  if (user_input == "paper"){
    lose();
  } else if (user_input == "rock"){
    win();
  }
}


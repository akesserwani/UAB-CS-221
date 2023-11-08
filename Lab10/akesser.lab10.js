

let game = function(clicked_id){

    var user_input = clicked_id;
  
    let rand_int = Math.floor(Math.random() * 3);
    let game_ai;
  
  
    let win = function(){
      document.getElementById("outcome").innerHTML= "You Win!";
    }
  
    let lose = function(){
      document.getElementById("outcome").innerHTML= "You Lose!";
    }
  
    if (rand_int == 0){
      game_ai = "rock";
    } else if (rand_int == 1){
      game_ai = "paper";
    } else if (rand_int == 2){
      game_ai = "scissors";
    }
  
    document.getElementById("choices").innerHTML= "You chose " + user_input + " and the computer chose " + game_ai;
  
  
    if (game_ai == user_input){
      document.getElementById("outcome").innerHTML= "Its a Tie!";
  
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
  
  }
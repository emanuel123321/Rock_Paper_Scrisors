function getComputertChoice(){
    const computer = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    return computer[randomNumber];
}

function getUserChoice(){
    let User = prompt()
    User = User.toLowerCase();
    return User;
}
let ok;
let userScore = 0;
let pcScore = 0;

function playRound(playerSelection, computerSelection) {


    if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
        if(playerSelection == "rock" && computerSelection == "paper"){
            console.log("You Lose! Paper beats Rock");
            pcScore++;
        }else if(playerSelection == "rock" && computerSelection == "scissors"){
            console.log("You Win! Rock beats scissors");
            userScore++;
        }else if(playerSelection == "paper" && computerSelection == "scissors"){
            console.log("You Lose! Scissors beats Paper");
            pcScore++;
        }else if(playerSelection == "paper" && computerSelection == "rock"){
            console.log("You Win! Papaer beats Rock");
            userScore++;
        }else if(playerSelection == "scissors" && computerSelection == "rock"){
            console.log("You Lose! Rock beats scissors");
            pcScore++;
        }else if(playerSelection == "scissors" && computerSelection == "paper"){
            console.log("You Win! Scissors beats paper");
            userScore++
        }else{
            console.log("Tie!");
            ok = 1;
        }
    }else{
        console.log("raspuns invalid");
        ok = 1;
    }
  }

  function game(){
    for(let i = 1; i<=5; i++ ){
        playRound(getUserChoice(), getComputertChoice())
        if(ok){
            i--;
            ok = 0;
        }
        console.log(`The Score is ${userScore} - ${pcScore}`);
    }
    if(userScore > pcScore){
        console.log(`You Win!`)
    }else{
        console.log(`You Lose`)
    }
  }

  game();
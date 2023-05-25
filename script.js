let Tie;
let userScore = 0;
let pcScore = 0;

function getComputertChoice(){
    const computer = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    return computer[randomNumber];
}

    const rock = document.querySelector(".ROCK");
    const paper = document.querySelector(".PAPER");
    const scissor = document.querySelector(".SCISSOR");
    const playAgain = document.querySelector(".again");
    const score = document.querySelector("p");
    const txt = document.querySelector("h2");


    rock.addEventListener("click", () =>{
        if(pcScore >= 5 || userScore >= 5) return txt.textContent = "Game Over! Play Again!";
        playerSelection = 'rock';
        playRound(playerSelection ,getComputertChoice());
    });

    paper.addEventListener("click", () =>{
        if(pcScore >= 5 || userScore >= 5) return txt.textContent = "Game Over! Play Again!";
        playerSelection = "paper";
        playRound(playerSelection ,getComputertChoice());
    })

    scissor.addEventListener("click", () =>{
        if(pcScore >= 5 || userScore >= 5) return txt.textContent = "Game Over! Play Again!";
        playerSelection = "scissors";
        playRound(playerSelection ,getComputertChoice());
    })

    playAgain.addEventListener("click", () =>{
        pcScore = 0;
        userScore = 0;
        score.textContent = `${userScore} - ${pcScore}`;
        txt.textContent = "New Game!"
    })
      




function playRound(playerSelection, computerSelection) {


        if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
            if(playerSelection == "rock" && computerSelection == "paper"){
                txt.textContent = "You Lose! Paper beats Rock";
                pcScore++;
            }else if(playerSelection == "rock" && computerSelection == "scissors"){
                txt.textContent = "You Win! Rock beats scissors";
                userScore++;
            }else if(playerSelection == "paper" && computerSelection == "scissors"){
                txt.textContent = "You Lose! Scissors beats Paper";
                pcScore++;
            }else if(playerSelection == "paper" && computerSelection == "rock"){
                txt.textContent = "You Win! Paper beats Rock";
                userScore++;
            }else if(playerSelection == "scissors" && computerSelection == "rock"){
                txt.textContent = "You Lose! Rock beats scissors";
                pcScore++;
            }else if(playerSelection == "scissors" && computerSelection == "paper"){
                txt.textContent = "You Win! Scissors beats paper";
                userScore++
            }else{
                txt.textContent = "It's a Tie!";
                Tie = 1;
            }
        }else{
            txt.textContent = "raspuns invalid";
            Tie = 1;
        }
        
        score.textContent = `${userScore} - ${pcScore}`;
}


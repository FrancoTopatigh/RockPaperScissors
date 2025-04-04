let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.createElement("div");
document.body.appendChild(resultsDiv);

const selectionHumanChoice = document.createElement("div");
const selectionComputerChoice = document.createElement("div");
const partialResults = document.createElement("div");
const finalResult = document.createElement("div");

resultsDiv.appendChild(selectionHumanChoice);
resultsDiv.appendChild(selectionComputerChoice);
resultsDiv.appendChild(partialResults);
resultsDiv.appendChild(finalResult);

const optionsArray = ["Rock", "Paper", "Scissors"];

function getRandomInt(){
    return Math.floor(Math.random() * optionsArray.length);
}

function getComputerChoice(){
    let computerChoice = optionsArray[getRandomInt()];
    console.log(`Computer chose ${computerChoice}`);
    return computerChoice;
}

function getHumanChoice(choice){
    switch(choice){
        case "Rock":
            console.log("You chose: Rock");
            break;
        case "Paper":
            console.log("You chose: Paper");
            break;
        case "Scissors":
            console.log("You chose: Scissors");
            break;
        default:
            console.log("Invalid choose");
            return null;
    }

    return choice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("It's a tie!");
    } else if (
        (humanChoice == "Rock" && computerChoice == "Scissors") ||
        (humanChoice == "Paper" && computerChoice == "Rock")||
        (humanChoice == "Scissors" && computerChoice == "Paper")
    ){
        console.log("Human has won");
        humanScore++;
    } else{
        console.log("Computer has won");
        computerScore++;
    }

    selectionHumanChoice.textContent = `You chose ${humanChoice}`;
    selectionComputerChoice.textContent = `You chose ${computerChoice}`;
}

function playGame(){

    if(humanScore == 5){
        finalResult.textContent = "Human has won!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (computerScore == 5){
        finalResult.textContent = "Computer has won";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else{
        finalResult.textContent = "It's a tie";
    }

    partialResults.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

}

playGame();


// NUEVAS FUNCIONALIDADES


const divHumanOptions = document.querySelector(".human-options");

const rockBtn = document.createElement("button");
rockBtn.classList.add("rock-btn");
rockBtn.style.margin = "10px";
rockBtn.textContent = "Rock";

const paperBtn = document.createElement("button");
paperBtn.classList.add("paper-btn");
paperBtn.style.margin = "10px";
paperBtn.textContent = "Paper";

const scissorsBtn = document.createElement("button");
scissorsBtn.classList.add("scissors-btn");
scissorsBtn.style.margin = "10px";
scissorsBtn.textContent = "Scissors";

divHumanOptions.appendChild(rockBtn);
divHumanOptions.appendChild(paperBtn);
divHumanOptions.appendChild(scissorsBtn);

rockBtn.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
    playGame();
});


paperBtn.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
    playGame();
});


scissorsBtn.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
    playGame();
});







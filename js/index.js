let humanScore = 0;
let computerScore = 0;

function getRandomInt(){
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice(){
    let computerChoice = getRandomInt();
    switch(computerChoice){
        case 1: 
            console.log("Computer chose: Rock");
            return 1;
        case 2:
            console.log("Computer chose: Paper");
            return 2;
        case 3:
            console.log("Computer chose: Scissors");
            return 3;
    }
}

function getHumanChoice(){
    let promptHumanChoice = Number(prompt("Choose an option: 1. Rock \n 2.Paper \n 3.Scissors"));

    if(promptHumanChoice < 1 || promptHumanChoice > 3){
        console.clear();
        console.log("Choose again");
        return getHumanChoice();
    } 

    switch(promptHumanChoice){
        case 1:
            console.log("You chose: Rock");
            break;
        case 2:
            console.log("You chose: Paper");
            break;
        case 3:
            console.log("You chose: Scissors");
            break;
    }

    return promptHumanChoice;

}

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("It's a tie!");
    }

    if(humanChoice == 2 && computerChoice == 1){
        console.log("Human has won!");
        humanScore++;
    } else if (humanChoice == 3 && (computerChoice == 1 || computerChoice == 2)){
        console.log("Human has won!");
        humanScore++;
    } else if(computerChoice == 2 && humanChoice == 1){
        console.log("Computer has won!");
        computerScore++;
    } else if(computerChoice == 3 && (humanChoice == 1 || humanChoice == 2)){
        console.log("Computer has won!");
        computerScore++;
    }
}

function playGame(){
    for(i = 1; i <= 5; i++){
        console.log(`\nRound ${i}`);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("\nFinal Score:");
    console.log(`Human: ${humanScore} - Computer: ${computerScore}`);

    if(humanScore == computerScore){
        console.log("It's a tie!");
    } else if (humanScore > computerScore){
        console.log("Human has won!")
    } else if(computerScore > humanScore){
        console.log("Computer has won!")
    }
}

playGame();








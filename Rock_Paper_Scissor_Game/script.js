let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");  //display all nodes with class choices
const msg=document.querySelector("#msg");
const scoreUser=document.querySelector("#user-score");
const scoreComp=document.querySelector("#comp-score");



console.log(choices);


const genCompChoice = () => {

    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3); //Math.random randomly geenrates num 0-1
    return options[ranIdx];                   //Multiplied by 3 and math.floor removes decimal places 

}


const showWinner=(userWin,compChoice, userChoice)=>{

if(userWin===true){
userScore++;
scoreUser.innerText=userScore;
console.log("You win");
msg.innerText=`You win! Your ${userChoice} beats ${compChoice}.`;
msg.style.backgroundColor= "green";

}
else{
    compScore++;
    scoreComp.innerText=compScore;
    console.log("You lose");
    msg.innerText=`You lose. Computer's ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor= "red";

};

};





const drawGame = (userChoice) => {

    console.log("The game was a draw.");
    msg.innerText=`The game was a draw. Play again. Both chose ${userChoice}.`;
    msg.style.backgroundColor= "black";



};



const playGame = (userChoice) => {

    console.log("User's choice =", userChoice);
    //Generate comp choice
    const compChoice = genCompChoice();
    console.log("Computer's choice =", compChoice);


    if (userChoice === compChoice) {

        drawGame(userChoice);


    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;

        }
        else if (userChoice === 'paper') {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;

        }
        else {
            //paper, rock
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin, compChoice, userChoice);

    };


};


//Function to return thenchoice clicked by user

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);

    });

});
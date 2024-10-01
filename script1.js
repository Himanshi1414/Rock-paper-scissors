let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = [ "rock" , "paper", "scissor" ];
 const rndIndx = Math.floor (Math.random () *3);
  return options[rndIndx];
};

//draw game 
const drawGame = () => {
  console.log('drawGame');
  msg.innerText = "Game was draw.Play again";
  msg.style.backgroundColor = "black";
}

//wWinner
const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin == true) {
    userScore++;
    userScorePara.innerText=userScore;
    console.log('user is winner');
    msg.innerText = `You win.Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else {
    compScore++;
    compScorePara.innerText=compScore;
    console.log('comp is winner');
    msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
//playgame
const playGame= (userChoice) => {
  console.log('user choice',userChoice);
//  console.log("User choice",userChoice);
  const compChoice = genCompChoice();
  console.log("computer choice",compChoice);
  if (userChoice === compChoice) {
    drawGame();
  }
  else {
    let userWin = true;
    if ( userChoice === "rock" ) {
      userWin = compChoice === "paper" ?
      false:true;
    }
    else if ( userChoice === "paper" ) {
    userWin = compChoice === "scissor" ?
    false:true;
    }
    else if ( userChoice === "scissor" ) {
      userWin = compChoice === "rock" ?
      false:true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice= choice.getAttribute("id");
    //console.log("choice was clicked",userChoice);
    playGame(userChoice);
  });
});

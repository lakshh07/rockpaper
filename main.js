var playerScore, computerScore ;

playerScore = 0;
computerScore = 0;

//start Game
function startgame() {
    var playBtn = document.querySelector('.intro button');
    var introScreen = document.querySelector(".intro");
    var match = document.querySelector(".match");
    var score = document.querySelector(".score");

    playBtn.addEventListener("click", function() {
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
        score.classList.add('fadeIn');
    });
};


//Play Match
function playMatch() { 
    var options = document.querySelectorAll(".options button");
    var playerHand = document.querySelector(".player-hand");
    var computerHand = document.querySelector(".computer-hand");
    var hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
            this.style.animation = "";
        });
        
    });

    //computer options
    var computerOptions = ["Rock", "Paper", "Scissors"];

    options.forEach(option => {
        option.addEventListener("click", function() {
            var computerNumber = Math.floor(Math.random() * 3);
            var computerChoice = computerOptions[computerNumber];
            
            setTimeout(() => {

                //comparing hands
                compareHands(this.textContent, computerChoice);

                //Update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            }, 2000);

            //Animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
        })
    })



    function updateScore() {
        document.querySelector(".player-score p").textContent = playerScore;
        document.querySelector(".computer-score p").textContent = computerScore;
    };

    function compareHands(playerChoice,computerChoice) {
        document.querySelector('.winner-head').classList.add('winner');
        var winner = document.querySelector(".winner");

        //Checking for tie
        if (playerChoice === computerChoice) {
            winner.textContent = "Its is a Tie !!";
            return;
        }

        //Checking for rock
        if (playerChoice === "Rock"){
            if (computerChoice === "Scissors") {
                winner.textContent = "Player Wins !!";
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins !!"
                computerScore++;
                updateScore();
                return;
            }
        }

        //Checking for scissors
        if (playerChoice === "Scissors") {
            if (computerChoice === "Rock") {
                winner.textContent = "Computer Wins !!"
                computerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins !!";
                playerScore++;
                updateScore();
                return;
            }
        }

        //Checking for paper
        if (playerChoice === "Paper") {
            if (computerChoice === "Scissors") {
                winner.textContent = "Computer Wins !!"
                computerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins !!";
                playerScore++;
                updateScore();
                return;
            }
        }
    }
}

startgame();
playMatch();

//restart game
function init() {
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".player-score p").textContent = playerScore;
    document.querySelector(".computer-score p").textContent = computerScore;
    document.querySelector(".player-hand").src = `./assets/rock.png`;
    document.querySelector(".computer-hand").src = `./assets/rock.png`;
    document.querySelector('.winner-head').classList.remove('winner');
    document.querySelector('.winner-head').textContent = "Choose an option";
};


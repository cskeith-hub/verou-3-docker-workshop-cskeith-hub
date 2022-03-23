const choiceArray = [{
        name: 'Rock',
        picture: '<img src="./image/theRock200.jpg" alt="Rock" width="200" height="200">',
    },

    {
        name: 'Paper',
        picture: '<img src="./image/paper.jfif" alt="Paper" width="200" height="200">',
    },

    {
        name: 'Scissors',
        picture: '<img src="./image/scissors200.jpg" alt="Scissors" width="200" height="200">',
    },
]

const play = document.getElementById("play");
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
let playerResult = document.getElementById("choice1");
let computerResult = document.getElementById("choice2");

const playerPaper = choiceArray[1].name;
const playerScissors = choiceArray[2].name;

play.addEventListener('click', function () {

    // todo fetch player choice + store variable
    buttonRock.addEventListener('click', function () {
        event.preventDefault();
        const playerChoiceRock = choiceArray[0].name;
        playerResult.innerHTML = choiceArray[0].picture;
        let computerChoice = computer();

        if (computerChoice.name === "Paper") {
            console.log('You Lose');
        } else if (computerChoice.name === "Scissors") {
            console.log(" You Win")
        } else {
            console.log("Its a Draw")
        }

    })
    buttonPaper.addEventListener('click', function () {
        event.preventDefault();
        const playerChoicePaper = choiceArray[1].name;
        playerResult.innerHTML = choiceArray[1].picture;
        let computerChoice = computer();

        if (computerChoice.name === "Paper") {
            console.log("Draw");
        } else if (computerChoice.name === "Scissors") {
            console.log("Lose")
        } else {
            console.log("Win")
        }
    })
    buttonScissors.addEventListener('click', function () {
        event.preventDefault();
        const playerChoiceScissors = choiceArray[2].name;
        playerResult.innerHTML = choiceArray[2].picture;
        let computerChoice = computer();

        if (computerChoice.name === "Paper") {
            console.log('Win');
        } else if (computerChoice.name === "Scissors") {
            console.log("Draw")
        } else {
            console.log("Lose")
        }

    })
})
// TODO comparing variables

// TODO result  

// todo fetch computer choice + store variable
const computer = () => {
    // todo make an array with options  this is global
    // todo generate random index for array
    let randomChoice = Math.floor(Math.random() * choiceArray.length);
    // todo create switch method for computer choices
    const computerChoice = choiceArray[randomChoice];
    switch (computerChoice.name) {
        case "Rock":
            computerResult.innerHTML = computerChoice.picture
            break;
        case "Paper":
            computerResult.innerHTML = computerChoice.picture
            break;
        case "Scissors":
            computerResult.innerHTML = computerChoice.picture
            break;
        default:
            return computerChoice;
    }
    return computerChoice;
}
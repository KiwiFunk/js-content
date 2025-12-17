const readline = require('readline')

const getUserChoice = userInput => {

    // Validate input type
    if (typeof userInput !== 'string') {
        console.log('Error!');
        return undefined;
    }

    switch (userInput.toLowerCase()) {
        case 'rock':
        case 'paper':
        case 'scissors':
        case 'bomb':
            return userInput.toLowerCase();
        default:
            console.log('Error!');
            return undefined;
    }
};

const getComputerChoice = () => {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
};
 
const determineWinner = (userChoice, computerChoice) => {
    
    // Cheat code
    if (userChoice === 'bomb') return 'You won!';

    // Handle game outcomes
    if (userChoice === computerChoice) return 'The game is a tie!';
    if (userChoice === 'rock') return computerChoice === 'scissors' ? 'You won!' : 'The computer won!';
    if (userChoice === 'paper') return computerChoice === 'rock' ? 'You won!' : 'The computer won!';
    if (userChoice === 'scissors') return computerChoice === 'paper' ? 'You won!' : 'The computer won!';
    // Fallback for invalid choices
    else return 'Error: invalid choices';
};

const askQuestion = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};

const playGame = async ({
    askFn = askQuestion,
    getUserChoiceFn = getUserChoice,
    getComputerChoiceFn = getComputerChoice,
    determineWinnerFn = determineWinner
} = {}) => {
    let userChoice;
    while (!userChoice) {
        const input = await askFn('Enter your choice (rock/paper/scissors): ');
        userChoice = getUserChoiceFn(input);
    }

    const computerChoice = getComputerChoiceFn();
    const result = determineWinnerFn(userChoice, computerChoice);

    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(result);
};

if (require.main === module) {
    playGame();
}

module.exports = {
    getUserChoice,
    getComputerChoice,
    determineWinner,
    askQuestion,
    playGame
};

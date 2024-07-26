let humanScore = 0,
	computerScore = 0;

const getComputerChoice = () => {
	let choice = Math.random();
	if (choice < 0.34) {
		return "rock";
	} else if (choice <= 0.67) {
		return "paper";
	} else {
		return "scissors";
	}
};

const getHumanChoice = () => {
	let choice = prompt("Enter your choice: ").toLowerCase();
	if (choice === "rock" || choice === "paper" || choice === "scissors") {
		return choice;
	} else {
		return "Invalid choice!";
	}
};

const playRound = (computerChoice, humanChoice) => {
	if (computerChoice == "rock" && humanChoice == "scissors") {
		computerScore++;
		console.log(
			`Computer wins! Computer: ${computerScore} Human: ${humanScore}`
		);
	} else if (computerChoice == "rock" && humanChoice == "paper") {
		humanScore++;
		console.log(
			`Human wins! Computer: ${computerScore} Human: ${humanScore}`
		);
	} else if (computerChoice == "scissors" && humanChoice == "rock") {
		humanScore++;
		console.log(
			`Human wins! Computer: ${computerScore} Human: ${humanScore}`
		);
	} else if (computerChoice == "scissors" && humanChoice == "paper") {
		computerScore++;
		console.log(
			`Computer wins! Computer: ${computerScore} Human: ${humanScore}`
		);
	} else if (computerChoice == "paper" && humanChoice == "scissor") {
		humanScore++;
		console.log(
			`Human wins! Computer: ${computerScore} Human: ${humanScore}`
		);
	} else if (computerChoice == "paper" && humanChoice == "rock") {
		computerScore++;
		console.log(
			`Computer wins! Computer: ${computerScore} Human: ${humanScore}`
		);
	} else {
		console.log(`Tie! Computer: ${computerScore} Human: ${humanScore}`);
	}
};

const determineWinner = () => {
	if (computerScore > humanScore) return "Computer";
	else if (computerScore < humanScore) return "Human";
	else return;
};

const playGame = () => {
	i = 5;
	while (i !== 0) {
		let computerChoice = getComputerChoice();
		let humanChoice = getHumanChoice();

		playRound(computerChoice, humanChoice);

		i--;
	}

	if (computerScore === humanScore) console.log("It's a tie!");
	else console.log(`The winner is ${determineWinner()}`);
};

playGame();

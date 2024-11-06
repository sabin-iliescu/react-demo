import React, { useState } from "react";
import "./App.css";

function App() {
  const choices = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const playGame = (choice) => {
    if (gameOver) return;

    setPlayerChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a draw!");
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      setResult("You win this round!");
      setPlayerScore((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore === 3) {
          setGameOver(true);
          setResult("You win the game!");
        }
        return newScore;
      });
    } else {
      setResult("Computer wins this round!");
      setComputerScore((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore === 3) {
          setGameOver(true);
          setResult("Computer wins the game!");
        }
        return newScore;
      });
    }
  };

  const resetGame = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setResult("");
    setPlayerScore(0);
    setComputerScore(0);
    setGameOver(false);
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>

      <div>
        <h2>Make your choice</h2>
        <button onClick={() => playGame("rock")} disabled={gameOver}>
          Rock
        </button>
        <button onClick={() => playGame("paper")} disabled={gameOver}>
          Paper
        </button>
        <button onClick={() => playGame("scissors")} disabled={gameOver}>
          Scissors
        </button>
      </div>

      <div>
        <h3>Your choice: {playerChoice}</h3>
        <h3>Computer's choice: {computerChoice}</h3>
        <h2>{result}</h2>
      </div>

      <div>
        <h3>Your Score: {playerScore}</h3>
        <h3>Computer Score: {computerScore}</h3>
      </div>

      {gameOver && <button onClick={resetGame}>Reset Game</button>}
    </div>
  );
}

export default App;

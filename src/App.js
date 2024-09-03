import React, { useState } from "react";
import ScoreCard from "./ScoreCard/ScoreCard";
import "./App.css";
import closeImg from "./close.png";
const WinnerCard = ({ score1, score2, setWinner }) => {
  let winner = "";
  if (score1 === score2) {
    return "It's a tie";
  } else if (score1 > score2) {
    winner = "Team 1 won";
  } else {
    winner = "Team 2 won";
  }

  return (
    <div className="winner-card">
      <div className="winner-text">
        {winner}
        <img
          src={closeImg}
          className="close-btn"
          alt="close-btn"
          onClick={() => setWinner("")}
        />
      </div>
    </div>
  );
};

function App() {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [winner, setWinner] = useState(false);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🏑🏅 Score Keeper 🏏🏐</h1>
      <div className="app-container">
        <ScoreCard
          teamName={"Pune Warriors"}
          teamDescription={"Play for the pride of Pune"}
          teamEmoji={"⚔️"}
          setScore={setTeam1Score}
        />
        <ScoreCard
          teamName={"Rahuri Kings"}
          teamDescription={"We are the Kings of Rahuri"}
          teamEmoji={"👑"}
          setScore={setTeam2Score}
        />
      </div>
      {winner ? (
        <WinnerCard
          score1={team1Score}
          score2={team2Score}
          setWinner={setWinner}
        />
      ) : null}

      <button
        type="button"
        className="score-btn"
        onClick={() => setWinner(true)}
      >
        Who Won?
      </button>
    </div>
  );
}

export default App;

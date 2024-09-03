import React, { useEffect, useState } from "react";
import plusImg from "./plus.png";
import minusImg from "./minus.png";
function ScoreCard({ teamName, teamDescription, teamEmoji, setScore }) {
  const [scoreCount, setScoreCount] = useState(1);

  const chackScore = (type) => {
    if (type === "plus") {
      setScoreCount(scoreCount + 1);
    } else if (type === "minus") {
      if (scoreCount > 1) {
        setScoreCount(scoreCount - 1);
      }
    }
  };

  useEffect(() => {
    setScore(scoreCount);
  }, [scoreCount]);
  return (
    <div className="score-container">
      <h1 className="score-emoji">{teamEmoji}</h1>
      <h1>{teamName}</h1>
      <p className="team-description">{teamDescription}</p>
      <div className="score-count-container">
        <img
          src={minusImg}
          onClick={() => chackScore("minus")}
          className="score-count-icon"
          alt="score-count"
        />
        <span className="score">{scoreCount}</span>
        <img
          src={plusImg}
          onClick={() => chackScore("plus")}
          alt="score-count-icon"
          className="score-count-icon"
        />
      </div>
    </div>
  );
}

export default ScoreCard;

import React from "react";
import "./BasketballPlayerCard.css";

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <>
      <div className="card">
        <div className="player-card grad1">
          <img src={image} alt={`${name}`} className="player-image" />
          <h2 className="player-name">{name}</h2>
          <p className="player-position">{position}</p>
          <div className="player-stats">
            <p>Points per Game: {stats.pointsPerGame}</p>
            <p>Assists per Game: {stats.assistsPerGame}</p>
            <p>Rebounds per Game: {stats.reboundsPerGame}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketballPlayerCard;

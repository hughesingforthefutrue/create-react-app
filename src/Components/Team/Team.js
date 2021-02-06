import React from "react";

function Team(props) {
  let shotPercentageDiv;

  if (props.stats.shots) {
    const shotPercentage = Math.round(
      (props.stats.score / props.stats.shots) * 100
    );
    shotPercentageDiv = (
      <div>
        <strong>Shooting %:</strong> {shotPercentage}
      </div>
    );
  }
  return (
    <div className="Team">
      <h2>{props.name}</h2>

      <div className="identity">
        <img
          src={props.Logo}
          alt={props.name}
          style={{ height: 250, width: 250 }}
        />
      </div>

      <div>
        <strong>Shots:</strong> {props.stats.shots}
      </div>

      <div>
        <strong>Score:</strong> {props.stats.score}
      </div>

      {shotPercentageDiv}

      <button onClick={props.shotHandler}>Shoot!</button>
    </div>
  );
}

export default Team;

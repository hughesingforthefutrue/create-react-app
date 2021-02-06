import React, { Component } from "react";
import ScoreBoard from "../Scoreboard/ScoreBoard";
import Team from "../Team/Team";
import cheers from "../Audio/cheers.mp3";
import swish from "../Audio/Swish+2.mp3";
class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      awayTeamStats: {
        shots: 0,
        score: 0,
      },
    };
    this.shotSound = new Audio(swish);
    this.scoreSound = new Audio(cheers);
  }

  shoot = (team) => {
    const teamStatsKey = `${team}TeamStats`;
    let score = this.state[teamStatsKey].score;
    this.shotSound.play();

    if (Math.random() > 0.5) {
      score += 1;
      setTimeout(() => {
        this.scoreSound.play();
      }, 100);
    }

    this.setState((state, props) => ({
      [teamStatsKey]: {
        shots: state[teamStatsKey].shots + 1,
        score,
      },
    }));
  };

  render() {
    return (
      <div className="Game">
        <ScoreBoard
          awayTeamStats={this.state.awayTeamStats}
          homeTeamStats={this.state.homeTeamStats}
        />

        <h2>Welcome to {this.props.Venue}</h2>
        <div className="stats">
          <Team
            name={this.props.awayTeam.name}
            Logo={this.props.awayTeam.Logo}
            stats={this.state.awayTeamStats}
            shotHandler={() => this.shoot("away")}
          />

          <div className="versus">
            <h1>VS</h1>
          </div>
          <Team
            name={this.props.homeTeam.name}
            Logo={this.props.homeTeam.Logo}
            stats={this.state.homeTeamStats}
            shotHandler={() => this.shoot("home")}
          />
        </div>
      </div>
    );
  }
}

export default Game;

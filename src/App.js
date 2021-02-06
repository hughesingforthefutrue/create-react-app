import React from "react";
import Game from "./Components/Game/Game";
import sixers from "./Components/images/rs-196506-wJ1TgEf.png";
import raptors from "./Components/images/raptors-logo.png";
function App() {
  const Sixers = {
    name: "Philadelphia 76ers",
    Logo: sixers,
  };

  const Raptors = {
    name: "Toronto Raptors",
    Logo: raptors,
  };
  return (
    <div className="App">
      <Game Venue="Wells Fargo Center" homeTeam={Sixers} awayTeam={Raptors} />
    </div>
  );
}

export default App;

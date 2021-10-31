import "./styles.css";
import React from "react";
import { useState } from "react";
import Button from "./Button";
import Tooltip from "./Tooltip";

function App() {
  const [player, setPlayer] = useState("landing");
  return (
    <div className={`react-root ${player}`}>
      <div>
        <Tooltip direction='bottom1' content='"THE GOAT"'>
          <Button player='mj' setPlayer={setPlayer} />
        </Tooltip>
        <Tooltip direction='bottom2' content='"MAGIC"'>
          <Button player='magic' setPlayer={setPlayer} />
        </Tooltip>
        <Tooltip direction='bottom3' content='"LEGEND"'>
          <Button player='bird' setPlayer={setPlayer} />
        </Tooltip>
        <Tooltip direction='bottom4' content='"DIESEL"'>
          <Button player='shaq' setPlayer={setPlayer} />
        </Tooltip>
        <Tooltip direction='bottom5' content='"THE ANSWER"'>
          <Button player='iverson' setPlayer={setPlayer} />
        </Tooltip>
      </div>
    </div>
  );
}

export default App;

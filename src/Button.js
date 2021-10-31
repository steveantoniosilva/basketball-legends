import React from "react";

function Button({ player, setPlayer }) {
  return (
    <button
      className={player}
      onClick={() => {
        setPlayer(player);
      }}
    ></button>
  );
}

export default Button;

import React from 'react';

function Button({ player, setPlayer }) {
  return (
    <button
      className={player}
      onMouseOver={() => {
        setPlayer(player);
      }}
    ></button>
  );
}

export default Button;

import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <h2>Hola {props.name}!</h2>
      <p>Sabemos que tu comida favorita es: </p>
      <div class="Comida" style={{ backgroundColor: props.comida }}>
        {props.comida}
      </div>
    </div>
  );
};

export default Card;

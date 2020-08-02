import React from "react";

export default (props) => {
  //Destructuring
  const { min, max } = props;

  const valor = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor Minimo:</strong> {min}
      </p>
      <p>
        <strong>Valor Maximo:</strong> {max}
      </p>
      <p>
        <strong>Valor Selecionado:</strong> {valor}
      </p>
    </div>
  );
};

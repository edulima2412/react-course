import React from "react";

export default (props) => {
    const min = 40
    const max = 60
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5
  return (
    <div>
      <button onClick={e => props.quandoClicar("Joao", gerarIdade(), gerarNerd())}>
        Fornecer Informações
      </button>
    </div>
  );
};

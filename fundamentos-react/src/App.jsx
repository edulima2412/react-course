import React from "react";

import Primeiro from "./components/basicos/Pimeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";
import "./App.css";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#13 - Megasena" color="#00000c">
        <Mega />
      </Card>
      <Card titulo="#12 - Contador" color="#00098c">
        <Contador numeroInicial={0} />
      </Card>
      <Card titulo="#11 - Componente Controlado (Input)" color="#FF998c">
        <Input />
      </Card>
      <Card titulo="#10 - Comunicação Indireta" color="#66998c">
        <IndiretaPai />
      </Card>
      <Card titulo="#09 - Comunicação Direta" color="#b3b3cc">
        <DiretaPai />
      </Card>
      <Card titulo="#08 - Renderização Condicional" color="#996666">
        <ParOuImpar numero={21} />
        <UsuarioInfo usuario={{ nome: "Eduardo" }} />
        <UsuarioInfo usuario={{ email: "teste@gmail.com" }} />
      </Card>
      <Card titulo="#07 - Desafio Repetição" color="#75a3a3">
        <TabelaProdutos />
      </Card>
      <Card titulo="#06 - Repetição" color="#b30059">
        <ListaAlunos />
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#0059b3">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color="#4f9e00">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#b38600">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Paramêtro" color="#00779e">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Pedro Silva"
          nota={9.3}
        />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#009970">
        <Primeiro />
      </Card>
    </div>
  </div>
);

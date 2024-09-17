import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const [rodada, setRodada] = useState(1);

  const [vez, setVez] = useState(0);
  const [VezJogador1, setVezJogador1] = useState(0);
  const [VezJogador2, setVezJogador2] = useState(0);

  const [scoreRodadaj1, setScoreRodadaj1] = useState(0);
  const [scoreRodadaj2, setScoreRodadaj2] =  useState(0);

  const qtdJogador = 2;
  const qtdRodadas = 5;

  const jogarDados = () => {
    const dado1 = math.floor(Math.random() * 6) + 1;
    const dado2= math.floor(Math.random() * 6) + 1;
    const scoreRodadaJogadorAtual = dado1 + dado2;
    setScoreRodada(scoreRodadaJogadorAtual);
    setVezJogador1(!VezJogador1);
    if(!VezJogador1){
      if(scoreRodadaj1) {
        setScore1(score1 + 1);
      } else if (scoreRodadaj1 < scoreRodadaJogadorAtual){
        setScore1(score1 + 1);
      }else{
        //empate
      }
    }

  }

  return (
    <div className="App">
      <h1>Jogo de dados - ropdada {rodada}/{qtdRodadas}</h1>
      <hr />

      <hr/>

      <h2>Placar</h2>
      <p>jogador 1: {score} - jogador 2: {score2}</p>
      <hr /> 
      <p>
        <button> disabled </button>
      </p>
    </div>
  );
}

export default App;

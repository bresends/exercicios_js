import React, { useState } from 'react';
import Card from '../components/Card/Card';

const Ex1 = () => {
  const [valorInput, setValorInput] = useState('');
  const [respostaFinal, setRespostaFinal] = useState('');

  function entregarResposta(e) {
    e.preventDefault();
    valorInput
      ? setRespostaFinal(`Olá ${valorInput}!`)
      : setRespostaFinal('Por favor, digite algo');

    setValorInput('');
  }
  return (
    <Card>
      <h2 className="center-card__title">Exercicio 1 - Respondendo o usuário</h2>
      <p className="center-card__question-title">Entre com seu nome</p>

      <form className="center-card__form">
        <input
          type="text"
          name="input"
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
          className="center-card__text-input"
        />
        <input
          type="submit"
          value="Clique"
          onClick={entregarResposta}
          className="center-card__button"
        />
      </form>

      <div className="center-card__answer">
        <p className="answer__default-answer">Console:</p>
        <p className="answer__final">{respostaFinal}</p>
      </div>
    </Card>
  );
};

export default Ex1;

import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card';

const DivStyle = styled.div`
  .center-card__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .center-card__input {
    width: 100%;
    margin: 10px auto;
  }
`;

/**
 * Takes a input and test if it is a empty string, a number ou a valid name
 * Test number with a regex d+ that means all numbers. 
 */

function helloNome(name: string): string {
  name = name.trim();
  if (name) {
    const testNumber = name.match(/\d+/);
    if (!testNumber) {
      return `Olá ${name}!`;
    } else if (testNumber) {
      return `Você digitou um número. Digite um nome`;
    }
  }
  return `Por favor, digite algo`;
}

const Ex1 = () => {
  const [valorInput, setValorInput] = useState('');
  const [respostaFinal, setRespostaFinal] = useState('');

  function entregarResposta(e: MouseEvent) {
    e.preventDefault();
    setRespostaFinal(helloNome(valorInput));
    setValorInput('');
  }
  return (
    <Card>
      <h2 className="center-card__title">
        Exercicio 1 - Respondendo o usuário
      </h2>
      <p className="center-card__question-title">Entre com seu nome</p>

      <DivStyle>
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
      </DivStyle>

      <div className="center-card__answer">
        <p className="answer__default-answer">Console:</p>
        <p className="answer__final">{respostaFinal}</p>
      </div>
    </Card>
  );
};

export default Ex1;
export { helloNome };

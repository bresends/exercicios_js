import React, { useState } from 'react';
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

const Ex3 = () => {
  const [valorInput, setValorInput] = useState('');
  const [respostaFinal, setRespostaFinal] = useState('');

  function entradaVazia() {
    setRespostaFinal('Por favor, digite algo');
  }

  function validaTipo(input) {
    const testeNumero = Number(input);
    if (isNaN(testeNumero)) {
      return `${valorInput} é do tipo String`;
    } else if (!isNaN(testeNumero) & (input.length > 0)) {
      return `${valorInput} é do tipo Number`;
    }
  }

  function validaCapitulacao(input) {
    if (input.toUpperCase() === input && isNaN(input)) {
      return 'Maíscula';
    } else if (input.toLowerCase() === input && isNaN(input)) {
      return 'Minúscula';
    } else if (input[0].toUpperCase() === input[0] && isNaN(input)) {
      return 'Capitalizada';
    }
  }

  function entradaValida() {
    const tipo = validaTipo(valorInput);
    const capitulacao = validaCapitulacao(valorInput);
    setRespostaFinal(`${tipo} ${capitulacao}`);
  }

  function entregarResposta(e) {
    e.preventDefault();

    // Decide se a resposta é vazia ou resposta completa
    valorInput.trim().length === 0 ? entradaVazia() : entradaValida();

    setValorInput('');
  }
  return (
    <Card>
      <h2 className="center-card__title">Exercicio 3 - Dissecando Variável</h2>
      <p className="center-card__question-title">Escreva qualquer coisa</p>

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

export default Ex3;

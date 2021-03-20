import React, { useState } from 'react';
import Card from '../components/Card/Card';
import styled from 'styled-components';

const DivStyle = styled.div`
  .center-card__form {
    display: flex;
    gap: 1rem;
  }

  .center-card__input-flex-container {
    width: 100%;
  }

  .center-card__input {
    width: 100%;
  }

  .center-card__button {
    margin-top: 1rem;
    width: 100%;
  }
`;

const Ex2 = () => {
  const [valorInput1, setValorInput1] = useState('');
  const [valorInput2, setValorInput2] = useState('');
  const [respostaFinal, setRespostaFinal] = useState('');

  function retornaSoma() {
    const valorSoma =
      Number.parseInt(valorInput1) + Number.parseInt(valorInput2);
    const stringResposta = `A soma de ${valorInput1} e ${valorInput2} é ${valorSoma}`;
    setRespostaFinal(stringResposta);
  }

  return (
    <Card>
      <h2 className="center-card__title">Exercicio 2 - Somando números</h2>

      <DivStyle>
        <form className="center-card__form">
          <div className="center-card__input-flex-container">
            <label htmlFor="numero1" className="center-card__input-title">
              Entre com o número 1
            </label>

            <input
              type="number"
              name="numero1"
              value={valorInput1}
              onChange={(e) => setValorInput1(e.target.value)}
              className="center-card__input"
            />
          </div>

          <div className="center-card__input-flex-container">
            <label htmlFor="numero2" className="center-card__input-title">
              Entre com o número 2
            </label>

            <input
              type="number"
              name="numero2"
              value={valorInput2}
              onChange={(e) => setValorInput2(e.target.value)}
              className="center-card__input"
            />
          </div>
        </form>
        <input
          type="submit"
          value="Clique"
          className="center-card__button"
          onClick={retornaSoma}
        />
      </DivStyle>

      <div className="center-card__answer">
        <p className="answer__default-answer">Console:</p>
        <p className="answer__final">{respostaFinal}</p>
      </div>
    </Card>
  );
};

export default Ex2;

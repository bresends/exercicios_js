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

class Variable {
  private input: string;
  readonly empty: boolean;
  readonly type: string;
  readonly onlySpaces: boolean;
  readonly isNumber: boolean;
  readonly isAlfabetical: boolean;
  readonly isAlfanumeric: boolean;
  readonly isUpperCase: boolean;
  readonly isLowerCase: boolean;
  readonly isCapitalized: boolean;

  constructor(input: string) {
    this.empty = Boolean(input.match(/^(?![\s\S])/));
    this.input = input.trim();
    this.type = this.testType();
    this.onlySpaces = this.testEmpty();
    this.isNumber = this.type === `number` ? true : false;
    this.isAlfanumeric = this.testAlfanumeric();
    this.isAlfabetical = this.type === `string` && !this.isAlfanumeric;
    this.isUpperCase =
      this.input.toUpperCase() === input && this.type === `string`;
    this.isLowerCase =
      this.input.toLowerCase() === input && this.type === `string`;
    this.isCapitalized =
      !this.isUpperCase && !this.isLowerCase && this.type === `string`;
  }

  private testType() {
    const tryNumber = Number(this.input);

    if (isNaN(tryNumber)) {
      return 'string';
    } else if (!isNaN(tryNumber) && this.input.length > 0) {
      return `number`;
    } else {
      return `null`;
    }
  }

  private testEmpty() {
    if (this.input) {
      return false;
    } else {
      return true;
    }
  }

  private testAlfanumeric() {
    // Test if there is a number in the string
    const testNumber = /\d+\.\d+|\d+,\d+|\d+/;
    if (this.type !== `number` && this.input.match(testNumber)) {
      return true;
    } else {
      return false;
    }
  }
}

const Ex3 = () => {
  const [valorInput, setValorInput] = useState('');
  const [respostaFinal, setRespostaFinal] = useState('');

  const output = (e: MouseEvent) => {
    e.preventDefault();

    const inputController = new Variable(valorInput);

    if (inputController.type === `string`) {
      let resposta = `O tipo primitivo de ${valorInput} é string`;

      if (inputController.isAlfabetical) {
        resposta += ', possui apenas letras ';
      } else if (inputController.isAlfanumeric) {
        resposta += ', é alfanumérico ';
      }

      if (inputController.isUpperCase) {
        resposta += 'e está escrito em letras maísculas';
      } else if (inputController.isLowerCase) {
        resposta += 'e está escrito em letras minúsculas';
      } else {
        resposta += 'e está capitalizado';
      }

      setRespostaFinal(resposta);
    } else if (inputController.type === `number`) {
      setRespostaFinal(`O tipo primitivo de ${valorInput} é number`);
    } else if (inputController.empty) {
      setRespostaFinal('Por favor, digite algo.');
    } else if (inputController.onlySpaces) {
      setRespostaFinal('Há apenas espaços vazios.');
    }
    setValorInput('');
  };

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
            onClick={(e: MouseEvent) => output(e)}
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
export { Variable };

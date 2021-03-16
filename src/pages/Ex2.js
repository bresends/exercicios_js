import React from 'react';
import Card from '../components/Card/Card';

const Ex2 = () => {
  return (
      <Card>
        <h1>Exercicio 2</h1>
        <p>Entrada</p>
        <form>
          <input type="text" name="input" />
          <input type="submit" value="Clique" className="button" />
        </form>
        <div className="container-resposta">
          <p>Resposta: </p>
          <p>Lorem ipsum dolor sit amet </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
      </Card>
  );
};

export default Ex2;

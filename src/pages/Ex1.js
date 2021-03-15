import React from 'react'

const Ex1 = () => {
    return (
      <main>
        <div className="card">
          <h1>Exercicio 1</h1>
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
        </div>
        <footer> Bruno Resende &copy; {new Date().getFullYear()}</footer>
      </main>
    );
}

export default Ex1

import React, { useState } from 'react';

import * as HiIcons from 'react-icons/hi';
import { IconContext as IC } from 'react-icons';

import './App.scss';

// Imports do Menu
import jsImage from './Menu/js.png';
import './Menu/style.scss';

function App() {
  const [menuAtivo, setmenuAtivo] = useState(false);

  const fechaMenu = () => {
    console.log(menuAtivo);
    setmenuAtivo(!menuAtivo);
  };

  return (
    <div className="App">
      {/* Menu */}
      <div className={menuAtivo ? "menu":"inativo"}>
        <IC.Provider value={{ className: 'close' }}>
          <HiIcons.HiX onClick={fechaMenu}/>
        </IC.Provider>

        <ul>
          <li>
            <img src={jsImage} alt="jsIcon" /> <span>Exercicio 1</span>
          </li>
          <li>
            <img src={jsImage} alt="jsIcon" /> <span>Exercicio 2</span>
          </li>
          <li>
            <img src={jsImage} alt="jsIcon" /> <span>Exercício 3</span>
          </li>
        </ul>
      </div>

      {/* Fim do Menu */}

      <header className="menu-lateral">
        <IC.Provider value={{ size: '2rem', className: 'menu-icon' }}>
          <HiIcons.HiMenuAlt2 onClick={fechaMenu} />
        </IC.Provider>

        <h1>Exercícios JavaScript</h1>
      </header>

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
    </div>
  );
}

export default App;

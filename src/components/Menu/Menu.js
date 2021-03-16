import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as HiIcons from 'react-icons/hi';
import { IconContext } from 'react-icons';

// Assets
import jsImage from './js.png';

// Main
function Menu() {
  const [menuLateral, setmenuLateral] = useState(false);

  const toogleMenu = () => {
    setmenuLateral(!menuLateral);
  };

  return (
    <IconContext.Provider value={{ size: '3.8rem' }}>
      <nav className="menu-permanente">
        <Link className="menu-permanente--btn-menu">
          <HiIcons.HiMenuAlt2 onClick={toogleMenu} />
        </Link>
        <h1>Exercícios JavaScript</h1>
      </nav>

      <nav className={menuLateral ? 'menu-flutuante ativo' : 'menu-flutuante'}>
        <Link className="menu-flutuante-btn-fechar">
          <HiIcons.HiX onClick={toogleMenu} />
        </Link>
        <ul className="nav-menu-items" onClick={toogleMenu}>
          <li>
            <Link to="/Ex1" className="item-menu">
              <img src={jsImage} alt="jsIcon" />
              <span>Exercicio 1</span>
            </Link>
          </li>

          <li>
            <Link to="/Ex2" className="item-menu">
              <img src={jsImage} alt="jsIcon" />
              <span>Exercicio 2</span>
            </Link>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Menu;

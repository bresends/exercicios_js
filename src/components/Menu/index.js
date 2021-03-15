import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as HiIcons from 'react-icons/hi';
import { IconContext } from 'react-icons';

// Assets
import jsImage from './js.png';
import './style.scss';

// Main
function Menu() {
  const [menuLateral, setmenuLateral] = useState(false);

  const toogleMenu = () => {
    console.log(menuLateral);
    setmenuLateral(!menuLateral);
  };

  return (
    <IconContext.Provider value={{ size: '2rem'}}>
      <div className="menu--navbar">
        <nav className="menu-permanente">
          <Link to="#" className="menu-bars">
            <HiIcons.HiMenuAlt2 onClick={toogleMenu} />
          </Link>
          <h1>Exercícios JavaScript</h1>
        </nav>

        <nav
          className={menuLateral ? 'menu-flutuante ativo' : 'menu-flutuante'}
        >
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
      </div>
    </IconContext.Provider>
  );
}

export default Menu;

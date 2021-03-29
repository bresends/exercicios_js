import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as HiIcons from 'react-icons/hi';
import { IconContext } from 'react-icons';

// Assets
import jsImage from './js.png';

// Main

function MenuLink({ exercicio }) {
  return (
    <li className="menu-flutuante__item">
      <Link to={`Ex${exercicio}`} className="menu-flutuante__link">
        <img src={jsImage} alt="jsIcon" className="menu-flutuante__img" />
        <p className="menu-flutuante__texto">Exercicio {exercicio}</p>
      </Link>
    </li>
  );
}

function Menu() {
  const [menuLateral, setmenuLateral] = useState(false);

  const toogleMenu = () => {
    setmenuLateral(!menuLateral);
  };

  return (
    <IconContext.Provider value={{ size: '3.8rem' }}>
      <nav className="menu-permanente">
        <Link className="menu-permanente__btn-menu">
          <HiIcons.HiMenuAlt2 onClick={toogleMenu} />
        </Link>
        <h1 className="menu-permanente__titulo">Exercícios JavaScript</h1>
      </nav>

      <nav
        className={menuLateral ? 'menu-flutuante isactive' : 'menu-flutuante'}
      >
        <Link className="menu-flutuante__btn-fechar">
          <HiIcons.HiX onClick={toogleMenu} />
        </Link>

        <ul className="menu-flutuante__container" onClick={toogleMenu}>
          <MenuLink exercicio="1" />
          <MenuLink exercicio="2" />
          <MenuLink exercicio="3" />
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Menu;

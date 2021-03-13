import { IconContext as IC } from 'react-icons';
import * as HiIcons from 'react-icons/hi';

import './style.scss';
import jsImage from './js.png';

const Menu = () => {
  return (
    <div className="menu">

      <IC.Provider value={{ className: 'close' }}>
        <HiIcons.HiX />
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
  );
};

export default Menu;

import './App.scss';
import * as HiIcons from 'react-icons/hi';
import { IconContext as IC } from 'react-icons';
import Menu from './Menu/index.js'

function App() {
  return (
    <div className="App">
      <Menu/>
      <header className="menu-lateral">
        <IC.Provider value={{ size: '2rem', className: 'menu-icon' }}>
          <HiIcons.HiMenuAlt2 />
        </IC.Provider>

        <h1>Exercícios JavaScript</h1>
      </header>

      <main>
        <div className="card">
          <h1>Exercicio 1</h1>
          <p>Entrada</p>
          <form>
            <input type="text" name="input" />
            <input type="submit" value="Clique" className='button'/>
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

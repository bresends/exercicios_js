import './App.scss';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IconContext } from 'react-icons';

function App() {
  return (
    <div className="App">
      <header className="menu-lateral">
        <IconContext.Provider value={{ size: '2rem', className: 'menu-icon' }}>
          <HiOutlineMenuAlt2 />
        </IconContext.Provider>

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

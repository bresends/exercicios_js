import './App.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import { IconContext } from 'react-icons';

function App() {
  return (
    <div className="App">
      <header className="menu-lateral">
        <IconContext.Provider value={{ size: '2rem', className: 'menu-icon' }}>
          <AiOutlineMenu />
        </IconContext.Provider>

        <h1>Exercícios JavaScript</h1>
      </header>

      <main>
        <div className="card">
          <h1>Exercicio 1</h1>
          <p>Entrada</p>
          <form>
            <input type="text" name="input" />
            <input type="submit" value="Clique" />
          </form>
          <code>Resposta</code>
        </div>
      <footer> Bruno Resende &copy; {new Date().getFullYear()}</footer>
      </main>

    </div>
  );
}

export default App;

import './App.scss';
import { AiOutlineMenu } from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <section className="menu-lateral">
        <AiOutlineMenu/>
        <h1>Exercícios</h1>
      </section>

      <main> Conteudo Principal</main>

      <footer> Bruno Resende &copy; {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;

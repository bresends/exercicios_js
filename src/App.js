import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Assets
import './styles/App.scss';

// Components
import Menu from './components/Menu';
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';

// Main
function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/Ex1" component={Ex1}/>
          <Route path="/Ex2" component={Ex2}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Menu from './Menu/Menu';
import Ex1 from '../pages/Ex1';
import Ex2 from '../pages/Ex2';
import Ex3 from '../pages/Ex3';

// Main
function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={Ex1}/>
          <Route path="/Ex1" component={Ex1}/>
          <Route path="/Ex2" component={Ex2}/>
          <Route path="/Ex3" component={Ex3}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

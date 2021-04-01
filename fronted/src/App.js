import { Route, Switch } from 'react-router-dom';
import Home from './home/Home'
import Calculator from './calculator/Calculator'


function App() {
  return (<main>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={Calculator} />
    </Switch>
  </main>
  );
}

export default App;

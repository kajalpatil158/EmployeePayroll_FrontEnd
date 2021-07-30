import Register from './pages/register'
import Login  from './pages/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>       
          <Route exact path='/' component={Register} />
          <Route path='/Login' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

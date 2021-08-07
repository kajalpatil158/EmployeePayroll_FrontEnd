import {Register} from './pages/register'
import {Login}  from './pages/login';
import Dashboard from "./components/dashboard";
import SimpleDrawer from './components/dash'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>       
          <Route exact path='/' component={Register} />
          <Route path='/Login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/dash' component={SimpleDrawer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

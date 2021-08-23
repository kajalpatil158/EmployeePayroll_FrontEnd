import {Register} from './pages/register'
import {Login}  from './pages/login';
import Dashboard from "./components/dashboard";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from "./components/protectedroute";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>       
          <Route exact path='/' component={Register} />
          <Route path='/Login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
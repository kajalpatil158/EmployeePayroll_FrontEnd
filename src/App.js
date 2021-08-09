import {Register} from './pages/register'
import {Login}  from './pages/login';
import EmployeeForm from './components/EmployeeForm';
import Dashboard from "./components/dashboard";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>       
          <Route exact path='/' component={Register} />
          <Route path='/Login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/Emp' component={EmployeeForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

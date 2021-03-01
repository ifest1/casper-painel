import './App.css';
import Login from './login/login-container';
import Dashboard from './dashboard/news-container';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/dashboard" exact component={Dashboard}/>
        </Switch>      
      </Router>
      
  );
}

export default App;

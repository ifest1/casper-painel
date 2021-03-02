import GlobalStyle from './styles/global';
import Login from './pages/login';
import News from './pages/panel';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/panel" exact component={News}/>
        </Switch>      
      </Router>
    </>
  );
}

export default App;

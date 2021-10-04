import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./views/Home"
import Login from "./components/home/login/login"
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
       </Switch>
     </Router>
    </div>
  );
}
export default App;

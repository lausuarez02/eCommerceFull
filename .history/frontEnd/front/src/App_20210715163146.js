
import './App.css';

import {HashRouter as Router, Switch, Route} from "react-router-dom"

//components
import NavBar from "./components/navBar";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={NavBar}/>
      <Route exact path="/" component={NavBar}/>
    
    </Switch>

     {/*HomeScreen */}
       {/*ProductScreen */}
         {/*CardScreen */}
 </Router>
  );
}

export default App;


import './App.css';

import {HashRouter as Router, Switch, Route} from "react-router-dom"

//components
import NavBar from "./components/navBar";

function App() {
  return (
 <div className="app">
   <Router>
    <Switch>
      <Route exact path=""/>
    </Switch>
   </Router>
  
     {/*HomeScreen */}
       {/*ProductScreen */}
         {/*CardScreen */}
   <h1>Hey</h1>
 </div>
  );
}

export default App;

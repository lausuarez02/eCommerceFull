
import './App.css';

import {HashRouter as Router, Switch, Route} from "react-router-dom"

//components
import NavBar from "./components/navBar";

function App() {
  return (
    <Router>
 <div className="app">
  
    <Switch>
      <Route exact path="/" component={NavBar}/>
    </Switch>
  
  
     {/*HomeScreen */}
       {/*ProductScreen */}
         {/*CardScreen */}
   <h1>Hey</h1>
 </div>
  );
}

export default App;

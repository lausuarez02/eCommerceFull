
import './App.css';

import {HashRouter as Router, Switch, Route} from "react-router-dom"

//components
import NavBar from "./components/navBar";
import HomeScreen from "./components/HomeScreen";
import Product from "./components/Product";
import Card from "./components/Card";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={NavBar}/>
      <Route exact path="/" component={HomeScreen}/>
      <Route exact path="/" component={Card}/>
      <Route exact path="/" component={NavBar}/>
    
    </Switch>

     {/*HomeScreen */}
       {/*ProductScreen */}
         {/*CardScreen */}
 </Router>
  );
}

export default App;

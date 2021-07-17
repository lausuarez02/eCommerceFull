
import './App.css';

import {HashRouter as Router, Switch, Route} from "react-router-dom"

//components
import NavBar from "./components/navBar";
import HomeScreen from "./components/HomeScreen";
import Product from "./components/Product";
import Cart from "./components/Card";
import BottomBar from "./components/bottomBar";

function App() {
  return (
    <Router>
      <NavBar/>
    <Switch>
      <Route exact path="/" component={HomeScreen}/>
      <Route exact path="/Cart" component={Cart}/>
      <Route exact path="/Product" component={Product}/>
    
    </Switch>
    <BottomBar/>

     {/*HomeScreen */}
       {/*ProductScreen */}
         {/*CardScreen */}
 </Router>
  );
}

export default App;


import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

//components
import NavBar from "./components/navBar";
import HomeScreen from "./components/HomeScreen";
import ProductScreen from "./components/Product";
import Cart from "./components/Card";
//import BottomBar from "./components/bottomBar";

function App() {
  return (
    <Router>
      <NavBar/>
    <Switch>
      <Route exact path="/" component={HomeScreen}/>
      <Route exact path="/Cart" component={Cart}/>
      <Route exact path="/Product/:id" component={ProductScreen}/>
    
    </Switch>
    {/*<BottomBar/>

     HomeScreen */}
       {/*ProductScreen */}
         {/*CardScreen */}
 </Router>
  );
}

export default App;

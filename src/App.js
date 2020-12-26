import React from "react";
import Navbar from "./components/Navbar";
import Recipes from "./Pages/Recipes";
import About from "./Pages/About";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Pages/Homepage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/recipes" exact>
          <Recipes />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

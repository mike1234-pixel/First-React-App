import React from "react";
import AboutReact from "./AboutReact.js";
import BestReactTutorials from "./BestReactTutorials";
import Error from "./Error.js";
import Home from "./Home.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/AboutReact" component={AboutReact} />
          <Route path="/BestReactTutorials" component={BestReactTutorials} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

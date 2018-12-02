import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import About from "./components/about/About";
import FetchData from "./components/api/FetchData";
import FetchDataTwo from "./components/api/FetchDataTwo";
import Webshop from "./components/webshop/Webshop";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/createproject" component={CreateProject} />
            <Route path="/about" component={About} />
            <Route path="/fetchdata" component={FetchData} />
            <Route path="/fetchdatatwo" component={FetchDataTwo} />
            <Route path="/webshop" component={Webshop} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
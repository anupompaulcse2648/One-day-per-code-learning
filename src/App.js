import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Development from "./Components/Development/Development";
import Footer from "./Components/Footer/Footer";
import Headers from "./Components/Headers/Headers";
import Home from "./Components/Home/Home";
import "./index.css";

import Courses from "./Components/Courses/Courses";
import Software from "./Components/Software/Software";
import Design from "./Components/Design/Design";
import About from "./Components/About/About";

import DetailsCourse from "./Components/DetailsCourse/DetailsCourse";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import Private from "./Components/Login/Private";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    // <div>
    //   <Router>
    //     <Headers></Headers>
    //     <Switch>
    //       <Route exact path="/">
    //         <Home></Home>
    //       </Route>
    //       <Route path="/home">
    //         <Home></Home>
    //       </Route>
    //       <Route path="/courses">
    //         <Courses></Courses>
    //       </Route>
    //       <Route path="/software">
    //         <Software></Software>
    //       </Route>
    //       <Route path="/design">
    //         <Design></Design>
    //       </Route>
    //       <Route path="/development">
    //         <Development></Development>
    //       </Route>
    //       <Route path="/about">
    //         <About></About>
    //       </Route>
    //       <Route path="/details">
    //         <DetailsCourse></DetailsCourse>
    //       </Route>
    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //       <Route path="*">
    //         <NotFound></NotFound>
    //       </Route>
    //       <Redirect to="/" />
    //     </Switch>
    //     <Footer></Footer>
    //   </Router>
    // </div>

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Headers></Headers>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Private path="/home">
            <Home></Home>
          </Private>
          <Private path="/courses">
            <Courses></Courses>
          </Private>
          <Private path="/software">
            <Software></Software>
          </Private>
          <Private path="/design">
            <Design></Design>
          </Private>
          <Private path="/development">
            <Development></Development>
          </Private>
          <Private path="/about">
            <About></About>
          </Private>
          <Private path="/details">
            <DetailsCourse></DetailsCourse>
          </Private>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer></Footer>

      </Router>
    </UserContext.Provider>
  );
}

export default App;

import React from "react";
//Importing Components into App
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

//Importing Global Stlyes
import GlobalStyle from "./styles/GlobalStyle";

//Importing Switch and Router
import { Switch, Route } from "react-router-dom";
//Importing AnimatePresence to enable route transition animations
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <Nav />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;

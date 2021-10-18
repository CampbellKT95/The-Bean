import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Contact from "./components/Contact";
import Order from "./components/Order";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./styles/app.css";


function App() {
  return (
    <Router >
      <div>
        <Switch>
        
          <Route exact path="/">
            <Navbar />
            <Menu />
            <Reviews />
            <About />
            <Contact />
          </Route>
          <Route path="/order">
            <Order />
          </Route>

        </Switch>
      </div>
    </Router >

  );
}

export default App;

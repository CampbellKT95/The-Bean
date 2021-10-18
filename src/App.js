import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Contact from "./components/Contact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./styles/app.css";


function App() {
  return (
    <Router >
      <div>
        <Navbar />
        <Menu />
        <Reviews />
        <About />
        <Contact />
      </div>
    </Router >

  );
}

export default App;

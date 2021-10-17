import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles/app.css";


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Menu />
        <Reviews />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;

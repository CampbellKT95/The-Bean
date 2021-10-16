import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import About from "./components/About";
// import Contact from "./components/Contact";
import "./styles/app.css";


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Landing />
        <Menu />
        <Reviews />
        <About />
        {/* <Contact /> */}
      </div>
    </>
  );
}

export default App;

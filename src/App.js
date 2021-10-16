import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews"
import "./styles/app.css";


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Landing />
        <Menu />
        <Reviews />
      </div>
    </>
  );
}

export default App;

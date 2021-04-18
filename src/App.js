import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import NavBar from "./sections/NavBar/NavBar";
import Banner from "./sections/Banner/Banner";
import Projects from "./sections/Projects/Projects";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

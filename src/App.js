import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import NavBar from "./sections/NavBar/NavBar";
import Banner from "./sections/Banner/Banner";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div style={{ background: "gray", height: "100vh" }}>
        <NavBar />
        <Banner />
      </div>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

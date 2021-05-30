import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navigation from "./sections/Navigation/Navigation";
import Banner from "./sections/Banner/Banner";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
        <Banner />
      </div>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

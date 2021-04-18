import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navbar from "./sections/Navbar/Navbar";
import Banner from "./sections/Banner/Banner";
import Projects from "./sections/Projects/Projects";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

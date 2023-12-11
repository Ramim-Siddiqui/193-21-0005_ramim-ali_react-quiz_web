import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Offerings from './components/Offerings';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div style={{backgroundColor: "rgba(255, 238, 252, 1)"}}>
      <Header />
      <Welcome />
      <Offerings />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

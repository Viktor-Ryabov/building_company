import './App.css';
import Header from '../Header/Header.js';
import Benefit from "../Benefit/Benefit.js"
import About from "../About/About.js"
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">

      <Header/>
      <About/>
      <Benefit/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Header from '../Header/Header.js';
import Benefit from "../Benefit/Benefit.js"
import TopMenu from '../TopMenu/TopMenu.js';
import About from "../About/About.js"

function App() {
  return (
    <div className="App">

      <Header/>

      <Benefit/>

      <TopMenu/>

      <About/>
     
    </div>
  );
}

export default App;

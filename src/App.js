import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/Navbar/Navbar';
import "./components/Navbar/Navbar.css"
import Rowpost from './components/rowpost/Rowpost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost/>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Routers,Routes,Route} from 'react-router-dom';
import NavBar from './navBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routers>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            
          </Routes>
      </Routers>
      
    </div>
  );
}

export default App;

/* import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navBar'; // Corrected the import to follow React component naming conventions
import Home from './Home';
// import AboutPage from './AboutPage'; // Uncomment and import the AboutPage component if needed

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App; */
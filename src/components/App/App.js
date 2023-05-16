
import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../Navigation/Navbar';
import Home from '../Home/Home';
import EasternConference from '../Eastern-Conference/Eastern-Conference';
import WesternConference from '../Western-Conference/Western-Conference';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/eastern' element={<EasternConference />} />
        <Route path='/western' element={<WesternConference />} />
        </Routes>
      
    </div>
  );
}

export default App;

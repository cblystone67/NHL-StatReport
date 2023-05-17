import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../Navbar'
import Home from '../../Pages/Home/Home';
import WesternConferenceApi from '../WesternConference/WesternConferenceApi';
import CentralDivisionTeams from '../WesternConference/CentralDivisionTeams';
import PacificDivisionTeams from '../WesternConference/PacificDivisionTeams';


function App() {
  return (
    <div className="App">
      <NavBar />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/western' element={<WesternConferenceApi />} />
          <Route path='/western/central' element={<CentralDivisionTeams />} />
          <Route path='/western/pacific' element={<PacificDivisionTeams />} />
          
        </Routes>
      </main>
    </div>
  );
}

export default App;
import {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../Navbar'
import Home from '../../Pages/Home/Home';
import CentralDivisionTeams from '../WesternConference/CentralDivisionTeams';
import PacificDivisionTeams from '../WesternConference/PacificDivisionTeams';
import WesternConference from '../WesternConference/Western-Conference';
import EasternConference from '../EasternConference/Eastern-Conference';
import MetropolitanDivisionTeams from '../EasternConference/MetropolitanDivisionTeams';
import AtlanticDivisionTeams from '../EasternConference/AtlanticDivisionTeams';
import TeamInfo from '../../Pages/TeamInfo/TeamInfo';

function App() {
  const [teams, setTeams] = useState([]);
  const fetchTeams = async () => {
    try {
      const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams');
      const teamData = await response.json();
      setTeams(teamData.teams);
    } catch (error) {
      console.error('Error fetching teams: ', error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/western' element={<WesternConference />} />
          <Route path='/western/central' element={<CentralDivisionTeams />} />
          <Route path='/western/pacific' element={<PacificDivisionTeams />} />
          <Route path='/eastern' element={<EasternConference />} />
          <Route path='/eastern/metropolitan' element={<MetropolitanDivisionTeams />} />
          <Route path='/eastern/atlantic' element={<AtlanticDivisionTeams />} />
          <Route path='/teams/:teamId' element={<TeamInfo teams={teams} />} />          
        </Routes>
      </main>
    </div>
  );
}

export default App;
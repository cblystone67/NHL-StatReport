import {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/Navbar'
import Home from '../Home/Home';
import CentralDivisionTeams from '../../components/WesternConference/CentralDivisionTeams';
import PacificDivisionTeams from '../../components/WesternConference/PacificDivisionTeams';
import WesternConference from '../../components/WesternConference/Western-Conference';
import EasternConference from '../../components/EasternConference/Eastern-Conference';
import MetropolitanDivisionTeams from '../../components/EasternConference/MetropolitanDivisionTeams';
import AtlanticDivisionTeams from '../../components/EasternConference/AtlanticDivisionTeams';
import TeamInfo from '../TeamInfo/TeamInfo';
import AuthPage from '../AuthPage/AuthPage';
import { getUser } from '../../utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser());

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
    <main className='App'>
      {user ? (
      <>
      <NavBar  user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Home user={user}/>} />
          <Route path='/western' element={<WesternConference />} />
          <Route path='/western/central' element={<CentralDivisionTeams />} />
          <Route path='/western/pacific' element={<PacificDivisionTeams />} />
          <Route path='/eastern' element={<EasternConference />} />
          <Route path='/eastern/metropolitan' element={<MetropolitanDivisionTeams />} />
          <Route path='/eastern/atlantic' element={<AtlanticDivisionTeams />} />
          <Route path='/teams/:teamId' element={<TeamInfo teams={teams} />} />          
        </Routes>
      </>
      ):(
        <AuthPage setUser={setUser} />
      )}
      </main>
  );
}

export default App;
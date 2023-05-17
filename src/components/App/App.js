import { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../Navbar';
import Home from '../../Pages/Home/Home';
import EasternConference from '../../Pages/Eastern-Conference/Eastern-Conference';
import WesternConference from '../../Pages/Western-Conference/Western-Conference';
import EasternDivisionTeams from '../../Pages/Eastern-Conference/Eastern-Division-Teams';
import EasternConferenceTeam from '../../Pages/Eastern-Conference/Eastern-Conference-Team';
function App() {
  const [teams, setTeams] = useState([
    {
      name: 'Boston Bruins',
      city: 'Boston',
      abbreviation: 'BOS',
    },
    {
      name: 'Buffalo Sabres',
      city: 'Buffalo',
      abbreviation: 'BUF',
    },
    {
      name: 'Detroit Red Wings',
      city: 'Detroit',
      abbreviation: 'DET',
    },
    {
      name: 'Florida Panthers',
      city: 'Florida',
      abbreviation: 'FLA',
    },
    {
      name: 'Montreal Canadiens',
      city: 'Montreal',
      abbreviation: 'MTL',
    },
    {
      name: 'Ottawa Senators',
      city: 'Ottawa',
      abbreviation: 'OTT',
    },
    {
      name: 'Tampa Bay Lightning',
      city: 'Tampa Bay',
      abbreviation: 'TBL',
    },
    {
      name: 'Toronto Maple Leafs',
      city: 'Toronto',
      abbreviation: 'TOR',
    },
  ]);
  return (
    <div className="App">
      <NavBar />
      <main className='container'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/eastern' element={<EasternConference />}/>
      <Route path='/western' element={<WesternConference />} />
      <Route path='/eastern/:division' element={<EasternDivisionTeams teams={teams}/>} />
      <Route path='/eastern/:division/teams/:teamAbbreviation' element={<EasternConferenceTeam teams={teams} />} />
    </Routes>
      </main>
    </div>
  );
}

export default App;

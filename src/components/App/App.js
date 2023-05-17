import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from '../Navbar';
import Home from '../../Pages/Home/Home';
import EasternConference from '../../Pages/Eastern-Conference/Eastern-Conference';
import CentralDivisionTeams from '../WesternConference/CentralDivisionTeams';
import WesternConferenceApi from '../WesternConference/WesternConferenceApi';

function App({teams}) {
  
  return (
    <div className="App">
      <NavBar />
      <main className='container'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/eastern' element={<EasternConference />}/>
      <Route path='/western' element={<CentralDivisionTeams teams={westernConferenceTeams}/>} />
      
    </Routes>
      </main>
    </div>
  );
}

export default App;

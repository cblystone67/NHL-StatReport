
import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../Navbar';
import Home from '../Home/Home';
import EasternConference from '../Eastern-Conference/Eastern-Conference';
import WesternConference from '../Western-Conference/Western-Conference';
import EasternDivisionTeams from '../Eastern-Conference/Eastern-Division-Teams';
function App() {
  return (
    <div className="App">
      <NavBar />
      <main className='container'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/eastern' element={<EasternConference />}/>
      <Route path='/western' element={<WesternConference />} />
      <Route path='/eastern/:division' element={<EasternDivisionTeams />} />
    </Routes>
      </main>
    </div>
  );
}

export default App;

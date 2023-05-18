import { useParams} from 'react-router-dom';

import './TeamInfo.css';
import NHL from '../../Images/NHL.png';

export default function TeamInfo({ teams }) {
  const { teamId } = useParams();
  const team = teams.find((team) => team.id === parseInt(teamId));

  if (!team) {
    return <div>Team not found</div>;
  }
  const handleGoToOfficialWebsite = () => {
    window.open(team.officialSiteUrl, '_blank');
  };
  return (
    <>
      <h2 className='team-name'>{team.name}</h2>
      <div className='team-card'>
       <img alt='NHL Logo' className='nhl-logo' src={NHL} />
        <p className='team-details'>Official Website: {team.officialSiteUrl}</p>
        <p className='team-details' >Entered NHL in {team.firstYearOfPlay}</p>
        <p className='team-details' >They play at the {team.venue.name}</p>
        <p className='team-details' >Also known as the {team.teamName}</p>
        <p className='team-details' >They abbreaviation is {team.abbreviation}</p>
        <button className='official-website-button' onClick={handleGoToOfficialWebsite}>
          Click this to leave and go to Official Website
        </button>
    </div>
    </>
  );
}
//Official site is https://www.nhl.com/<team icon 'sabres'>
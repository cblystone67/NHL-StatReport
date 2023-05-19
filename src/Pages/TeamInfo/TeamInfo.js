import { useParams} from 'react-router-dom';

import './TeamInfo.css';
import NHL from '../../Images/NHL.png';
import teamLogoMap from '../../Images/TeamLogos/TeamLogos';

export default function TeamInfo({ teams }) {
  const { teamId } = useParams();
  const team = teams.find((team) => team.id === parseInt(teamId));

  if (!team) {
    return <div>Team not found</div>;
  }
  const handleGoToOfficialWebsite = () => {
    window.open(team.officialSiteUrl, '_blank');
  };
  const teamLogo = teamLogoMap[teamId];

  return (
    <>
      <h2 className='team-name'>{team.name}</h2>
      <div className='team-card' >
        <img referrerPolicy='no-referrer' className='current-logo' alt='team-logo' src={teamLogo}/>
        <p className='team-details'>Official Website: {team.officialSiteUrl}</p>
        <p className='team-details' >Entered NHL in {team.firstYearOfPlay}</p>
        <p className='team-details' >They play at the {team.venue.name}</p>
        <p className='team-details' >There Team Name is: {team.teamName}</p>
        <p className='team-details' >They abbreaviation is {team.abbreviation}</p>
        {team.officialSiteUrl && (
          <iframe 
          title='Official Website'
          src={`https://www.nhl.com/${team.teamName.toLowerCase()}`}
          width='100%'
          height='600px'
          ></iframe>
        )}
        <button className='official-website-button' onClick={handleGoToOfficialWebsite}>
          Click this to leave and go to Official Website
        </button>

        </div>
    </>
  );
}

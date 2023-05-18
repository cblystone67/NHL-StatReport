import { useParams} from 'react-router-dom';

import './TeamInfo.css';
import Pittsburge from '../../Images/PittsburghPenguins.png';

export default function TeamInfo({ teams }) {
  const { teamId } = useParams();
  const team = teams.find((team) => team.id === parseInt(teamId));

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <>
      <h2 className='team-name'>{team.name}</h2>
      <div className='team-card'>
       <img alt='Pittsburge Logo' className='pit-logo' src={Pittsburge} />
        <p className='team-details'>{team.officialSiteUrl}</p>
        <p className='team-details' >Entered NHL in {team.firstYearOfPlay}</p>
        <p className='team-details' >They play at the {team.venue.name}</p>
        <p className='team-details' >Also known as the {team.teamName}</p>
        <p className='team-details' >They abbreaviation is {team.abbreviation}</p>
       
    </div>
    </>
  );
}
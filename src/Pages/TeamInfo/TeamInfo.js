import { useParams, Link } from 'react-router-dom';
import './TeamInfo.css';
import NHLLogo from '../../Images/NHL.png';

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
      <img alt='NHL Logo' className='nhl-logo' src={NHLLogo} />
      <Link to={team.officialSiteUrl} target="_blank" rel="noopener       noreferrer">
      </Link>
      
    </div>
    </>
  );
}
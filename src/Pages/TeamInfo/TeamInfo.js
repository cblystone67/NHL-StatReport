import { useParams } from 'react-router-dom';

export default function TeamInfo({ teams }) {
  const { teamId } = useParams();
  const team = teams.find((team) => team.id === parseInt(teamId));

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div>
      <h2>{team.name}</h2>
      {/* Display additional team information here */}
    </div>
  );
}
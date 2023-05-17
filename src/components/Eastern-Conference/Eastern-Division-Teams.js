import { Link } from "react-router-dom";
export default function EasternDivisionTeams(props) {
  const teams = [
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
  ];
  return (
    <div className='teams'>
      <h3>Teams</h3>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>
            <Link to="/eastern/division/teams"><h3>{team.name}</h3></Link>
            <p>City: {team.city}</p>
            <p>Abbreviation: {team.abbreviation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
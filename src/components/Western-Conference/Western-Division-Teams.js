import React from 'react';

export default function WesternDivisionTeams(props) {
  const teams = {
    'Central': ['Chicago Blackhawks', 'Colorado Avalanche', 'Dallas Stars', 'Minnesota Wild', 'Nashville Predators', 'St. Louis Blues', 'Winnipeg Jets'],
    'Pacific': ['Anaheim Ducks', 'Arizona Coyotes', 'Calgary Flames', 'Edmonton Oilers', 'Los Angeles Kings', 'San Jose Sharks', 'Seattle Kraken', 'Vancouver Canucks', 'Vegas Golden Knights']
  };
  const division = props.division;
  const divisionTeams = teams[division];
  return (
    <div className='teams'>
      <h3>{division}</h3>
      <ul>
        {divisionTeams.map((team, index)=> (
          <li key={index}>{team}</li>
        ))}
      </ul>
      </div>
  )
}

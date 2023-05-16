import React from 'react';

export default function EasternDivisionTeams(props) {
  const teams = {
    'Metropolitan': ['Carolina Hurricanes', 'Columbus Blue Jackets', 'New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Philadelphia Flyers', 'Pittsburgh Penguins', 'Washington Capitals'],
    'Atlantic': ['Boston Bruins', 'Buffalo Sabres', 'Detroit Red Wings', 'Florida Panthers', 'Montreal Canadiens', 'Ottawa Senators', 'Tampa Bay Lightning', 'Toronto Maple Leafs']
  };

  return (
    <div className='teams'>
      <h3>Teams</h3>
      <ul>
        {teams[props.division].map(team => (
          <li key={team}>{team}</li>
        ))}
      </ul>
    </div>
  );
}
import React from 'react';
import { useParams } from 'react-router-dom';

export default function EasternConferenceTeam({teams}) {
  const { teamAbbreviation } = useParams();

  // Find the team with the matching abbreviation from the data source
  const team = teams.find((team) => team.abbreviation === teamAbbreviation);

  return (
    <div>
      <h2>Team Page</h2>
      {team ? (
        <div>
          <h3>{team.name}</h3>
          <p>City: {team.city}</p>
          <p>Abbreviation: {team.abbreviation}</p>
        </div>
      ) : (
        <p>Team not found.</p>
      )}
    </div>
  );
}

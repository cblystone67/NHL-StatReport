import React from "react";
import { Link } from "react-router-dom";
export default function EasternDivisionTeams({teams}) {
  
  return (
    <div>
      <h1>Eastern Division Teams</h1>
    <div className='teams'>
      <h3>Teams</h3>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>
          <Link to={`/eastern/division/teams/${team.abbreviation}`}>
          {team.name}
          </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
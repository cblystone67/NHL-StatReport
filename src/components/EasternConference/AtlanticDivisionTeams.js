import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AtlanticDivisionTeams(){
  const [teams, setTeams] = useState([]);
  const fetchTeams = async () => {
    try {
      const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams');
      const teamData = await response.json();
      setTeams(teamData.teams);
    } catch (error) {
      console.error('Error fetching teams: ', error);
    }
  }
  useEffect(() => {
    fetchTeams();
  }, []);
  const easternConferenceTeams = teams.filter((team) => {
    return (
      team.conference && team.conference.name === 'Eastern' &&
      team.division && team.division.name === 'Atlantic' // Replace 'Central' with your desired division
    );
  });
  return (
        <div>
          <div>
            {console.log(easternConferenceTeams.name)}
      <h2>Atlantic Division Teams</h2>
      <ul>
        {easternConferenceTeams.map((team) => (
          <li key={team.id}>
          <Link to={`/teams/${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </div>
        </div>
  )
}

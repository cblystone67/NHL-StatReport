import { useState, useEffect } from "react";
export default function CentralDivisionTeams(){
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
  const westernConferenceTeams = teams.filter((team) => {
    return (
      team.conference && team.conference.name === 'Western' &&
      team.division && team.division.name === 'Central' // Replace 'Central' with your desired division
    );
  });
  return (
        <div>
          <div>
      <h2>Central Division Teams</h2>
      <ul>
        {westernConferenceTeams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
        </div>
  )
}
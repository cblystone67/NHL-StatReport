
export default function CentralDivisionTeams({teams}){
  <div>
      <h2>Central Division Teams</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
}
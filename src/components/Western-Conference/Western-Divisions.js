import React from 'react';
import WesternDivisionTeams from './Western-Conference/WesternDivisionTeams'

export default function WesternDivisions(props) {
  return (
    <div className='division'>
      <h2>{props.division} Division</h2>
      <WesternDivisionTeams division={props.division} />
    </div>
  );
}
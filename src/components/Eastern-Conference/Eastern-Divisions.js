import React from 'react';
import EasternDivisionTeams from './Eastern-Division-Teams';

export default function EasternDivisions(props) {
  return (
    <div className='division'>
      <h2>{props.division} Division</h2>
      <EasternDivisionTeams division={props.division} />
    </div>
  );
}
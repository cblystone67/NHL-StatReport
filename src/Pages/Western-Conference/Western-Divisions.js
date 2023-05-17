import React from 'react';
import WesternConferenceApi from '../../components/WesternConference/WesternConferenceApi';

export default function WesternDivisions(props) {
  return (
    <div className='division'>
     <WesternConferenceApi teams={teams}/>
    </div>
  );
}
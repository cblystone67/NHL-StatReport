import {Link} from 'react-router-dom';

function WesternConference({teams}) {
  return (
    <div>
        <h2>Western Conference</h2>
        <ul>
          <li>
            <Link to="/western/central">Central Divison</Link>
          
          </li>
          <li>
            <Link to='/western/pacific'>Pacific Division</Link>
          </li>
        </ul>
      </div>
  );
}

export default WesternConference;
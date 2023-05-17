import {Link} from 'react-router-dom';

function WesternConference() {
  return (
    <div>
        <h2>Western Conference</h2>
        <ul>
          <li>
            <Link to="/western/atlantic">Central Divison</Link>
          </li>
          <li>
            <Link to='/western/metropolitan'>Pacific Division</Link>
          </li>
        </ul>
      </div>
  );
}

export default WesternConference;
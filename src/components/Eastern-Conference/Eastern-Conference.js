import {Link} from 'react-router-dom';

function EasternConference(props) {
  

  return (
      <div>
        <h2>Eastern Conference</h2>
        <ul>
          <li>
            <Link to="/eastern/atlantic">Atlantic Divison</Link>
          </li>
          <li>
            <Link to='/eastern/metropolitan'>Metropolitan Division</Link>
          </li>
        </ul>
      </div>
  );
}

export default EasternConference;
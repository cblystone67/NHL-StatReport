import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function EasternConference(props) {
  const [ships, setShips] = useState([]);

  //Create a helper function
  const fetchShips = async () => {
    try {
      // 1) use the fetch function to make an HTTP request to SWAPI
      const response = await fetch('https://swapi.dev/api/starships/')
      //2) take a response object that gets returned from the fetch function parse it's incoming json body
      const shipData = await response.json();
      //3 set the ships state with the returned JSON data
      setShips(shipData.results)
    } catch (error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchShips()
  }, [])
  return (
    <div className='conference'>
      <h1>Eastern Conference</h1>
      {ships.map((ship) => {
        let { name, url } = ship;
        let path = url.split("/");
        const id = path[path.length -2];
        return (
          <Link to={`/ships/${id}`} key={id}>
          <h2>{name}</h2>
          </Link>
        )
      })}
    </div>
  );
}

export default EasternConference;
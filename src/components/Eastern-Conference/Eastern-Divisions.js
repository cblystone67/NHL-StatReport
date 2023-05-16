import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EasternDivisions(props) {
  const {id} = useParams();
  const url = 'https://swapi.dev/api/starsips' + id;
  const [starship, setStarShip] = useState(null);
  const getStarship = async () => {
    try {
      const response = await fetch(url);
      const shipData = await response.json();
      setStarShip(shipData);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getStarship();
  }, []);
  const loading = () => {
    return (
      <h1>Loading ...</h1>
    );
  };
  const loaded = () => {
    return (
       <div>
            <h2>{starship.name}</h2>
            <div>
                <h3>Features</h3>
                <ul>
                    <li>Starship Class: {starship.starship_class}</li>
                    <li>Capacity: {starship.starship_capacity}</li>
                    <li>Crew (size): {starship.crew}</li>
                    <li>Passengers: {starship.passengers}</li>
                    <li>Manufacturer: {starship.manufacturer}</li>
                    <li>HD Rating: {starship.hyperdrive_rating}</li>
                </ul>
            </div>
            <div>
                <h3>Star Wars Stats</h3>
                <ul>
                    <li>Appears in {starship.films?.length} film{starship.films?.length > 1 ? "s": ""}</li>
                </ul>
            </div>
       </div> 
    );
};
  return <section>{starship ? loaded() : loading()}</section>
}
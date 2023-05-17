import { Link } from "react-router-dom";

export default function NavBar(props){
  return (
    <nav>
        <Link to="/">Home </Link>
        <Link to="/eastern"> Eastern Conference</Link>
        <Link to="/western"> Western Conference</Link>
    </nav>
  )
}
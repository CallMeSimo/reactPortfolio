import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/Home">
        _Wassim
        <br />
        El Haddaoui
      </Link>
      <Link to="/MyWork">_Work</Link>
      <Link to="/About">_About</Link>
      <Link to="/">_Github</Link>
      <span className="navBg"></span>
    </nav>
  );
}

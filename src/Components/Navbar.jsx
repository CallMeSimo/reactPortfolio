import { Link } from "react-router-dom";
import Resume from "./ResumeDowload";

export default function Navbar() {
  return (
    <nav>
      <Link to="/Home">Home</Link>
      <Link to="/MyWork">My Work</Link>
      <a
        href={`/WassimElHaddaoui_ATSFriendly.pdf`}
        download="WassimElhaddaoui.pdf"
        className="resumeDownload"
      >
        Resume
      </a>
    </nav>
  );
}

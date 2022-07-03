import { Link } from "react-router-dom";
import Resume from "./ResumeDowload";

export default function Navbar() {
  return (
    <nav>
      <a
        href={`http://localhost:3000/src/documents/Resume_Wassim-El-Haddaoui.pdf`}
        className="resumeDownload"
      >
        Resume
      </a>
      <Link to="/Home">Home</Link>
      <Link to="/MyWork">Work</Link>
      <Link to="/">Github</Link>
    </nav>
  );
}

import { Link } from "react-router-dom";
import Resume from "./ResumeDowload";

export default function Navbar() {
  return (
    <nav>
      <Link to="/Home">Home</Link>
      <Link to="/MyWork">MyWork</Link>
      <a
        href={`/00_WassimElHaddaoui_CV.pdf`}
        download="WassimElhaddaoui.pdf"
        className="resumeDownload"
      >
        Resume
      </a>
    </nav>
  );
}

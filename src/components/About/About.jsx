import "./About.css";
import selfPortrait from "../../assets/GhibliSelfPortrait.png";

export default function About() {
  return (
    <div className="About">
      <img className="About__img" src={selfPortrait} alt="self portrait" />
      <p>PokéVocab By: Runquan (Ray) Zhou</p>
      <div className="About__icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:rzhou@pursuit.org"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/runquan-ray-zhou"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/runquanrayzhou/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/runquan-ray-zhou/dictionary"
        >
          <i className="fa-solid fa-code"></i>
        </a>
      </div>
      <p>All Rights Reserved 2025</p>
    </div>
  );
}

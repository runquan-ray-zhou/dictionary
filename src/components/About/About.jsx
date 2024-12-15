import "./About.css";

export default function About() {
  return (
    <div className="About">
      <img
        className="About__img"
        src="https://media.licdn.com/dms/image/v2/D4E03AQHV7_mind9zJQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709449259555?e=1736985600&v=beta&t=Jim9DL0dySasr3wO2WLp8C1xrrJ_KKsTSJNO1QbbIo8"
        alt="self portrait"
      />
      <p>PokéVocab By: Runquan (Ray) Zhou</p>
      <div className="About__icons">
        <a href="mailto:rzhou@pursuit.org">
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a href="https://github.com/runquan-ray-zhou">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/runquanrayzhou/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/runquan-ray-zhou/2.9-linknyc">
          <i className="fa-solid fa-code"></i>
        </a>
      </div>
      <p>All Rights Reserved 2025</p>
    </div>
  );
}

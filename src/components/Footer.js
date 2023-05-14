import { FaGithub, FaLinkedin } from "react-icons/fa";

import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="iconsContainer">
        <a href="https://github.com/Rydwan94/Image-searchSite-React">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/%C5%82ukasz-rydwa%C5%84ski-237469173/">
          <FaLinkedin />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} rydwan94. All rights reserved.</p>
    </div>
  );
};

export default Footer;

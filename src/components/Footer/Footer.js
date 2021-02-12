import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright&copy; 2021</p>
      <Link to="/about" className="footer__about-link">About this project</Link>
    </footer>
  )
}

export default Footer;

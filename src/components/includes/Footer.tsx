import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <p>This is footer</p>
      <ul className="links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/faq"}>faq</Link>
        </li>
      </ul>
    </>
  );
};

export default Footer;

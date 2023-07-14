import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar sticky="top" expand="md">
        <Container>
          <Navbar.Toggle aria-controls="res-kar-nav" />
          <Navbar.Collapse
            id="res-kar-nav"
            className="d-flex justify-content-between"
          >
            <div className="left">
              <Link to="/">
                <img src="src/assets/svg/logo.svg" alt="Kartan" />
              </Link>
            </div>
            <Nav>
              <Link to="/trending">Trending</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

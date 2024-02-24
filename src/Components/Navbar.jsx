import { Link } from 'react-router-dom'; // Import Link component
import styled from "styled-components";
import { endSession } from "../Service/controller";

export function Navbar() {
  return (
    <>
      <NavbarContainer>
        <section>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand heading" to="/">
              AllServiceHub
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse navdiv" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/feedback">
                    Feedback
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    User Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/employeelogin">
                    Technician Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/adminlog">
                    Admin Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reg">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </NavbarContainer>
    </>
  );
}

const NavbarContainer = styled.section`
  section {
    top: 0;
   position: relative;
  }
  .heading {
    margin-left: 40px;
  }
  .navdiv {
    display: flex;
    justify-content: space-between;
  }
`;

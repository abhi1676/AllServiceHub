import { Button } from "bootstrap";
import styled from "styled-components";
import { endSession } from "../Service/controller";

export function Navbar() {

  return (
    <>
      <NavbarContainer>
        <section>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand heading" href="#">
            AllServiceHub
            </a>
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
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/feedback">
                    Feedback
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Employer Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/employeelogin">
                    Employee Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/adminlog">
                    Admin Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/reg">
                    Register
                  </a>
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

section{
    top: 0;
    position : fixed;
}
.heading{

    margin-left: 40px;
}
.navdiv{

    display:flex;
    justify-content: space-between;


}

`;

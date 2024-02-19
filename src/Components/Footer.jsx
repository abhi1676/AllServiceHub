import styled from "styled-components";

export function Footer() {
  return (
    <>
    <FooterContainer>
    <section>
    <footer id="footer">
      <div className="container-fluid footer bg-dark">
        <div className="row">
          <div className="col-md-3 col-sm-6 about">
            <h3>About</h3>
            <p>
            We strive for customer satisfaction.
            </p>
            <ul>
              <li>
                <a href="#facebook">facebook</a>
              </li>
              <li>
                <a href="#Twitter">Twitter</a>
              </li>
              <li>
                <a href="#Instagram">Instagram</a>
              </li>
              <li>
                <a href="#Yotube">YouTube</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 about">
            <h5>Owners</h5>
            <ul>
              <li>
                <a href="http://localhost:3000/reg">Register</a>
              </li>
              <li>
                <a href="">Book a Service</a>
              </li>
              <li>
                <a href="">Advance Skill Search</a>
              </li>
              <li>
                <a href="">Recruiting Service</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 about">
            <h5>Service Provider</h5>
            <ul>
              <li>
                <a href="http://localhost:3000/reg">Register</a>
              </li>
              <li>
                <a href="http://localhost:3000/employeelogin">Login </a>
              </li>
              <li>
                <a href="">Post Your Skills</a>
              </li>
              <li>
                <a href="">Accept Service</a>
              </li>
              
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 about">
            <h5>Have a question?</h5>
            <ul>
              <li>
                <a href=""> 203, Ramsan Road, BKC Complex, Mumbai, India</a>
              </li>
              <li>
                <a href="">+91 02292 3929 210</a>
              </li>
              <li>
                <a href="">info@AllServiceHub.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </section>
    </FooterContainer>
    </>
  );
}

const FooterContainer = styled.section`

    .about{

      margin-top: 10px;
      color:white;

    }


    
`;

import React from "react";
import styled from "styled-components";

export const About = () => {
  return (
    <>
      <AboutContainer>
        <section className="aboutc">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <>
                  <div className="title">
                    <h1 style={{ color: "darkblack" }}>About Us</h1>
                  </div>
                  <div className="content">
                    <h3>Company Overview!!!!</h3>
                    <p>
                      AllServiceHub is the one stop solution for your everyday house chores 
                      whether it is related to electricity, earthing, plumbing, cleaning, repairing, or managing the stuff. 
                      We want to become your all-time favorite and reliable directory with all important details and fair reviews 
                      when you are in a hurry or not in the mood to take any crap on your loving holiday. We will help you to get services at your doorsteps, 
                      just like you get home deliveries of your favorite products.
                    </p>
                    <div className="button">
                    
                      <a href="http://localhost:3000/" className="btn btn-primary">
                        Know More About us 
                      </a>
                    </div>
                  </div>
                </>
              </div>
              <div className="col-sm-3">
                <div className="image-section">
                  <img src="/img/LOGO.jpeg" alt="Logo" />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-sm-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="/img/home/user1.png"
                    className="card-img-top"
                    alt="..."
                    style={{ height: "20rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">User-1</h5>
                    <p className="card-text">
                      The payment system of AllServiceHub is truly awesome and
                      safe.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="/img/home/user2.jpeg"
                    className="card-img-top"
                    alt="..."
                    style={{ height: "20rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">User-2</h5>
                    <p className="card-text">
                    AllServiceHub helps me to find Home Services easily 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                   src="/img/home/user3.png"
                    className="card-img-top"
                    alt="..."
                    style={{ height: "20rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">User-3</h5>
                    <p className="card-text">
                    AllServiceHub helps me to find Service Providers who are truly
                      talented and hardworking which saves my time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AboutContainer>
    </>
  );
};

const AboutContainer = styled.section`
  .aboutc {
    margin-top: 80px;
    margin-left : 50px
  }

  .image-section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .image-section img {
    max-width: 500px;
    max-height: 400px;
  }
`;


import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const SearchJob = () => {
  return (
    <>
      <SearchJobContainer>
        <section>
          <header id="header1">
            <div className="container search_job_header">
              <div className="row">
                <div className="col job_search">
                  <br />
                  <h6 className="lead" style={{ color: "black" }}>
                    We have Various Housing Services to offer !
                  </h6>
                  <h1
                    className="display1 mt-5"
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    You can Search for Category
                    <br />
                    of your choice Below
                  </h1>
                </div>
              </div>
              <form >
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label" />{" "}
                    <input
                      name="title"
                      className="form-control"
                      type="text"
                      placeholder="Service Category"
                    />
                  </div>
                  <div className="col-md-3"></div>
                </div>
                <div className="row">
                  <div className="col">
                    <div id="searchjob" className="col-2 m-auto">
                    <Link to="/employeejob" className="btn btn-success mt-5">
                          Search
                        </Link>
                    </div>
                  </div>
                </div>
              </form>
              <br />
              <br />
              <br />
              <div className="empContent">
                <div className="emp1">
                  <div className="emp1-1">
                    <p style={{ fontWeight: "bold" }}>
                      AllServiceHub is a leading provider of housing services,
                      offering a wide array of essential maintenance solutions
                      to homeowners. With expertise in plumbing, painting,
                      housekeeping, water tank cleaning, pest control, and AC
                      repair, they provide a comprehensive approach to home
                      care. Their commitment to excellence ensures that
                      customers receive reliable and efficient service,
                      addressing their needs promptly and effectively.
                      AllServiceHub stands out for their dedication to quality
                      and customer satisfaction, making them a preferred choice
                      for homeowners seeking top-notch home maintenance
                      solutions.
                    </p>
                  </div>
                  <div className="emp1-2">
                    <p>
                      AllServiceHub is a comprehensive housing services company
                      that excels in providing a wide range of essential home
                      maintenance solutions. From plumbing and painting to
                      housekeeping, water tank cleaning, pest control, and AC
                      repair, they offer a one-stop solution for all household
                      needs. Their services are distinguished by their
                      excellent quality and reliability, ensuring that
                      customers can rely on them for efficient and effective
                      solutions to their home maintenance challenges. Whether
                      it's fixing a leaky faucet, repainting a room, or
                      ensuring a pest-free environment, AllServiceHub is
                      committed to delivering top-notch service to homeowners.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div id="postJob" className="col-4 m-auto">
                      
                      <Link to="/employeelogin" className="btn btn-danger mt-5" style={{ fontWeight: "bold" }}>
                          LOG OUT
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </section>
      </SearchJobContainer>
    </>
  );
};

const SearchJobContainer = styled.section`
  section {
    padding-top: 56px;
  }

  #header1 {
    background: url("/img/search.jpg") no-repeat 0 0;
    background-size: cover;
    color: #fff;
    min-height: 110vh;
  }

  .emp1 p {
    color: color;
    font-size: 20px;
    font-weight: 700;
  }

  .btn {
    margin-bottom: 20px;
    margin-left: 40%;
  }
  .btn-success a {
    color: black;
    font-weight: bold;
    text-decoration: none;
  }
`;



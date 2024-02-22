import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { saveJob } from "../Service/controller";

export const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    mobno: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await saveJob(formData);
    console.log(response.data);
    if (response.status === 200) {
      setFormData({
        title: "",
        date: "",
        location: "",
        mobno: "",
      });
      alertMsg();
    }
  };

  const alertMsg = () => {
    Swal.fire({
      title: "Success!!!",
      text: "Job Posted Successfully",
      icon: "success",
      buttons: "OK",
    }).then(() => {
      window.location = "/postjob";
    });
  };

  return (
    <>
      <PostJobContainer>
        <section>
          <main>
            <header id="header">
              <div className="container search_job_header">
                <div className="row">
                  <div className="col job_search">
                    <h1 className="display1 mt-5" />
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-3">
                      <label htmlFor="" className="form-label" />{" "}
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Job Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="" className="form-label" />{" "}
                      <input
                        className="form-control"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="" className="form-label" />{" "}
                      <input
                        className="form-control"
                        type="text"
                        placeholder="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="" className="form-label" />{" "}
                      <input
                        className="form-control"
                        type="text"
                        pattern="[0-9]{10}"
                        placeholder="Mobile Number"
                        name="mobno"
                        value={formData.mobno}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div id="postJob" className="col-1 m-auto">
                        <button
                          type="submit"
                          className="btn btn-success mt-5"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Post Service
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col">
                    <div id="postJob" className="col-1 m-auto">
                      <Link to="/employer" className="btn btn-dark mt-5">
                        BACK
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </main>
        </section>
      </PostJobContainer>
    </>
  );
};

const PostJobContainer = styled.section`
  section {
    padding-top: 100px;
    height: 80vh;
    background: url("/img/home/banner.jpg");
  }
`;



import React, { useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { saveFeedback } from "../Service/controller";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await saveFeedback(formData);
    console.log(response.data);
    if (response.status === 200) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      alertMsg();
    }
  };

  const alertMsg = () => {
    swal({
      title: "Success!!!",
      text: "Feedback Submitted Successfully",
      icon: "success",
      buttons: "OK",
    });
  };

  return (
    <>
      <FeedbackContainer>
        <section>
          <form className="container" onSubmit={handleSubmit}>
            <div className="heading">
              <h2>Feedback Form</h2>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows={3}
                defaultValue={""}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </section>
      </FeedbackContainer>
    </>
  );
};

const FeedbackContainer = styled.section`
  section {
    padding: 90px;
    background: url("/img/home/banner.jpg");
  }
  .container {
    width: 70vh;
    border: solid black 2px;
    border-radius: 10px;
    padding: 20px;
    background-color: white;
  }

  .heading {
    margin-left: 25%;
  }

  .btn {
    margin-left: 40%;
  }
`;

export default Feedback;

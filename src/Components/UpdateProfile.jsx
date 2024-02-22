import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { saveUser } from "../Service/controller";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const UpdateProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    dob: "",
    mobno: "",
    city: "",
    district: "",
    state: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await saveUser(formData);
    console.log(response.data);
    if (response.status === 200) {
      setFormData({
        id: "",
        fname: "",
        lname: "",
        email: "",
        dob: "",
        mobno: "",
        city: "",
        district: "",
        state: ""
      });
      alertMsg();
    }
  };

  const alertMsg = () => {
    Swal.fire({
      title: "Success!!!",
      text: "Credentials Matched",
      icon: "success",
      buttons: "OK",
    }).then(() => {
      navigate("/employer");
    });
  };

  return (
    <>
      <UpdateProfileContainer>
        <section>
          <form className="container" onSubmit={handleSubmit}>
            <div className="heading">
              <h2>Update Profile</h2>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="id">User id</label>
              <input
                type="text"
                className="form-control"
                id="id"
                placeholder="Enter user id"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="fname"
                placeholder="Enter First Name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lname"
                placeholder="Enter Last Name"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter email id"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="dob">Date Of Birth</label>
              <input
                type="text"
                className="form-control"
                id="dob"
                placeholder="Enter birth date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="mobno">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                id="mobno"
                placeholder="Enter mobile number"
                name="mobno"
                value={formData.mobno}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="district">District</label>
              <input
                type="text"
                className="form-control"
                id="district"
                placeholder="Enter District"
                name="district"
                value={formData.district}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="Enter state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-dark">
              Update
            </button>
          </form>
          <br />
          <div className="row justify-content-center">
            <div id="postJob" className="col-1 m-auto">
              <Link to="/employer" className="btn btn-dark mt-5">
                BACK
              </Link>
            </div>
          </div>
        </section>
      </UpdateProfileContainer>
    </>
  );
};

const UpdateProfileContainer = styled.section`
  section {
    margin-top: 20px; 
    padding: 50px;
    background: url("/img/home/banner.jpg");
    min-height: 140vh;
  }

  h2 {
    margin-left: 25%;
  }

  .container {
    width: 70vh;
    height: 130vh;
    border: solid black 2px;
    border-radius: 10px;
    padding: 20px;
    background-color: white;
  }
  .btn {
    display: block;
    margin: 0 auto; 
    margin-top: 20px; 
  }

  .row {
    margin: 0 auto; 
    margin-top: 0px;
    text-align: center; 
  }

`;



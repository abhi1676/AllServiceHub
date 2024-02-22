import React, { useState } from "react";
import styled from "styled-components";
import { saveUser } from "../Service/controller";
import swal from "sweetalert";

export const Registration = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    cpass: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      const response = await saveUser(formData);
      console.log(response.data);
      if (response.status === 200) {
        setFormData({
          fname: "",
          lname: "",
          email: "",
          pass: "",
          cpass: "",
        });
        alertMsg();
      }
    }
  };

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!formData["fname"]) {
      isValid = false;
      errors["fname"] = "please enter first name";
    }

    if (!formData["lname"]) {
      isValid = false;
      errors["lname"] = "please enter last name";
    }

    if (!formData["email"]) {
      isValid = false;
      errors["email"] = "please enter email address";
    }

    // Add more validation rules as needed...

    setErrors(errors);
    return isValid;
  };

  const alertMsg = () => {
    swal({
      title: "Success!!!",
      text: "Account Created Successfully",
      icon: "success",
      buttons: "OK",
    }).then(() => {
      window.location = "/";
    });
  };

  return (
    <>
      <RegistrationContainer>
        <section className="back">
          <form className="container" onSubmit={handleSubmit}>
            <div className="header">
              <h3>Create New Account</h3>
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                aria-describedby="firstNameHelp"
                placeholder="Enter first name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />
              <div className="text-danger">{errors.fname}</div>
            </div>
            {/* Repeat for other form fields */}
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </section>
      </RegistrationContainer>
    </>
  );
};

const RegistrationContainer = styled.section`
  // Your styling here
`;



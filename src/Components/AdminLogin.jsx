import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import Swal from "sweetalert2";
import { checkAdmin } from "../Service/controller";

export function AdminLogin() {
  const [formData, setFormData] = useState({
    email: "",
    pass: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      const response = await checkAdmin(formData.email);
      console.log(response.data);
      if (response.status === 200) {
        setFormData({ email: "", pass: "" });
        alertMsg();
      }
    }
  };

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!formData.email) {
      isValid = false;
      errors.email = "please enter email address";
    } else {
      const pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      if (!pattern.test(formData.email)) {
        isValid = false;
        errors.email = "Please enter valid email address.";
      }
    }

    if (!formData.pass) {
      isValid = false;
      errors.pass = "Please enter your password.";
    } else if (formData.pass.length < 6) {
      isValid = false;
      errors.pass = "Please add at least 6 characters.";
    }

    setErrors(errors);
    return isValid;
  };

  const alertMsg = () => {
    Swal.fire({
      title: "Success!!!",
      text: "Credentials Matched",
      icon: "success",
      buttons: "OK"
    }).then(() => {
      window.location = "/adminhome";
    });
  };

  return (
    <>
      <LoginContainer>
        <section className="back">
          <Form className="container" onSubmit={handleSubmit}>
            <div className="header">
              <h3>Admin Login</h3>
            </div>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="text-danger">{errors.email}</div>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="pass"
                value={formData.pass}
                onChange={handleChange}
              />
              <div className="text-danger">{errors.pass}</div>
            </Form.Group>
            <Button className="btn btn-dark" type="submit">
              Submit
            </Button>
          </Form>
        </section>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.section`
  section {
    padding-top: 20vh;
  }

  h3 {
    margin-left: 25%;
    margin-bottom: 10px;
  }
  .container {
    width: 50vh;
    border: solid black 2px;
    border-radius: 10px;
    padding: 20px;
    height: 45vh;
    background-color: white;
  }

  .btn {
    margin-top: 20px;
    margin-left: 35%;
  }
`;



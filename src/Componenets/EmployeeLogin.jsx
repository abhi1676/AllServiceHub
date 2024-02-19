import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import Swal from "sweetalert2";
import { checkUser } from "../Service/controller";

export const EmployeeLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
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
      const response = await checkUser(formData.email);
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
      errors.email = "Please enter email address";
    }

    if (typeof formData.email !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(formData.email)) {
        isValid = false;
        errors.email = "Please enter valid email address.";
      }
    }

    if (!formData.pass) {
      isValid = false;
      errors.pass = "Please enter your password.";
    }

    if (typeof formData.pass !== "undefined") {
      if (formData.pass.length < 6) {
        isValid = false;
        errors.pass = "Please add at least 6 characters.";
      }
    }

    setErrors(errors);
    return isValid;
  };

  const alertMsg = () => {
    Swal.fire({
      title: "Success!!!",
      text: "Credentials Matched",
      icon: "success",
      buttons: "OK",
    }).then(() => {
      window.location = "/searchjob";
    });
  };

  return (
    <>
      <LoginContainer>
        <section className="back">
          <Form className="container" onSubmit={handleSubmit}>
            <div className="header">
              <h3>Employee Login</h3>
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
};

const LoginContainer = styled.section`
  section {
    padding-top: 20vh;
  }

  h3 {
    margin-left: 20%;
    margin-bottom: 10x;
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



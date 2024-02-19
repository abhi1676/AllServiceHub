import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import Swal from "sweetalert2";
import { checkUser } from "../Service/controller";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [defaultValue] = useState({
    email: "",
    pass: "",
  });

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
    let isValid = true;
    let errors = {};

    if (!formData["email"]) {
      isValid = false;
      errors["email"] = "please enter email address";
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
      navigate("/employer");
    });
  };

  return (
    <>
      <LoginContainer>
        <section className="back" onSubmit={handleSubmit}>
          <Form className="container">
            <div className="header">
              <h3>Employer Login</h3>
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
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </Form>
        </section>
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled.section`

section{

  padding-top: 20vh;
}

h3{

  margin-left : 20%;
  margin-bottom : 10x;
}
.container {
  width: 50vh;
  border: solid black 2px;
  border-radius: 10px;
  padding: 20px;
  height: 45vh;
  background-color: white;
}

.btn{

  margin-top : 20px;
  margin-left : 35%;
}

`;

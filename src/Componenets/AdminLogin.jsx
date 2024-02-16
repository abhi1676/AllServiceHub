import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import Swal from "sweetalert2";
import { checkAdmin } from "../Service/controller";

export class AdminLogin extends Component {

  constructor(){
    super();
    this.state = {
      formData: {},
      errors: {},
      defaultValue: {
        email:"",
        pass:"",
      },
    
    };
  }

  handleChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };
  
  handleSubmit = async (event) => {
    event.preventDefault();
    if(this.validate()){
      const response = await checkAdmin(this.state.formData.email);
      console.log(response.data);
      if (response.status == 200) {
        this.setState({
          formData: { email: "", pass:""},
        });
  
        this.alertMsg();
      }
    }
  };

  validate(){

    
    let formData = this.state.formData;
    let errors = {};
    let isValid = true;

    if(!formData["email"]){

      isValid = false;
      errors["email"] = "please enter email address"
    }

    if (typeof formData["email"] !== "undefined") {
          
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(formData["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    
    if (!formData["pass"]) {
      isValid = false;
      errors["pass"] = "Please enter your password.";
    }

    
    if (typeof formData["pass"] !== "undefined") {
      if(formData["pass"].length < 6){
          isValid = false;
          errors["pass"] = "Please add at least 6 charachter.";
      }
    }

    
    this.setState({
      errors: errors
    });

    return isValid;

  }

  alertMsg = () =>{

    
    Swal.fire({

      title: "Success!!!",
      text: "Credentials Matched",
      icon: "success",
      buttons: "OK",
    }).then(() => {
      
      window.location="/adminhome";
    })
    
  }

  render() {
    return (
      <>
        <LoginContainer>
          <section className="back">
            <Form className="container" onSubmit={this.handleSubmit}>
            <div className="header">
                <h3>Admin Login</h3>
              </div>
              <Form.Group controlid="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={this.state.formData.email}
                  onChange={this.handleChange}
                ></Form.Control>
                <div className="text-danger">{this.state.errors.email}</div>
              </Form.Group>
              <Form.Group controlid="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="pass"
                  value={this.state.formData.pass}
                  onChange={this.handleChange}
                ></Form.Control>
                <div className="text-danger">{this.state.errors.pass}</div>
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
}

const LoginContainer = styled.section`

section{

  padding-top: 20vh;
}

h3{

  margin-left : 25%;
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

import { Component } from "react";
import styled from "styled-components";
import { saveUser } from "../Service/controller";
import swal from "sweetalert";

export class Registration extends Component {
  constructor() {
    super();
    this.state = {
      formData: {},
      errors:{},
      defaultValue: {
        fname: "",
        lname: "",
        email: "",
        pass: "",
        cpass: "",
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
      const response = await saveUser(this.state.formData);
      console.log(response.data);
      if (response.status == 200) {
        this.setState({
          formData: { fname: "", lname: "", email: "", pass: "", cpass: "" },
        });

        this.alertMsg();
      }
    }
  };

  validate(){

    let formData = this.state.formData;
    let errors = {};
    let isValid = true;

    if(!formData["fname"]){

      isValid = false;
      errors["fname"] = "please enter first name"
    }

    
    if(!formData["lname"]){

      isValid = false;
      errors["lname"] = "please enter last name"
    }

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

    if (!formData["cpass"]) {
      isValid = false;
      errors["cpass"] = "Please enter your confirm password.";
    }

    if (typeof formData["pass"] !== "undefined") {
      if(formData["pass"].length < 6){
          isValid = false;
          errors["pass"] = "Please add at least 6 charachter.";
      }
    }

    if (typeof formData["pass"] !== "undefined" && typeof formData["cpass"] !== "undefined") {
        
      if (formData["pass"] != formData["cpass"]) {
        isValid = false;
        errors["pass"] = "Passwords don't match.";
      }
    }


    this.setState({
      errors: errors
    });

    return isValid;
  }

  alertMsg = () =>{

    swal({
      title: "Success!!!",
      text: "Account Created Successfully",
      icon: "success",
      buttons: "OK",
    })
    .then(() => {

      window.location = "/";
    });
  }

  render() {
    return (
      <>
        <RegistrationContainer>
          <section className="back">
            <form className="container" onSubmit={this.handleSubmit}>
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
                  value={this.state.formData.fname}
                  onChange={this.handleChange}
                />
                <div className="text-danger">{this.state.errors.fname}</div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter last name"
                  name="lname"
                  value={this.state.formData.lname}
                  onChange={this.handleChange}
                />
                <div className="text-danger">{this.state.errors.lname}</div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  value={this.state.formData.email}
                  onChange={this.handleChange}
                  
                />
                <div className="text-danger">{this.state.errors.email}</div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  name="pass"
                  value={this.state.formData.pass}
                  onChange={this.handleChange}
                />
                <div className="text-danger">{this.state.errors.pass}</div>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  name="cpass"
                  value={this.state.formData.cpass}
                  onChange={this.handleChange}
                />
                <div className="text-danger">{this.state.errors.cpass}</div>
              </div>
              <br></br>
              <div>
                <label for="employee" className="rad1">
                  User
                </label>
                <input
                  type="radio"
                  id="employee"
                  name="group1"
                  value="employee"
                />
                <label for="employer" className="rad2">
                  Technician
                </label>
                <input
                  type="radio"
                  id="employer"
                  name="group1"
                  value="employer"
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </section>
        </RegistrationContainer>
      </>
    );
  }
}

const RegistrationContainer = styled.section`
  section {
    padding: 60px;
    height : 120vh;
  }
  .container {
    width: 70vh;
    border: solid black 2px;
    border-radius: 10px;
    padding: 20px;
    height: 100vh;
    background-color: white;
  }

  h3 {
    margin-left: 80px;
  }

  .form-group {
    margin-top: 20px;
  }

  .rad1 {
    margin-right: 20px;
  }

  .rad2 {
    margin-left: 70px;
    margin-right: 20px;
  }

  .btn {
    margin-top: 20px;
    margin-left: 180px;
  }
`;

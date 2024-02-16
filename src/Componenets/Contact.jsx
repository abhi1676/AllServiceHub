import { Component } from "react";
import { redirect } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";
import { saveContact } from "../Service/controller";

export class Contact extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      formData: {},
      defaultValue: {
        name:"",
        email:"",
        message:"",
      }
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
    const response = await saveContact(this.state.formData);
    console.log(response.data);
    if (response.status == 200) {
      this.setState({
        formData: { name: "", email: "", message: "" },
      });

      this.alertMsg();
    }
  };

  alertMsg = () =>{

    swal({
      title: "Success!!!",
      text: "Account Created Successfully",
      icon: "success",
      buttons: "OK",
    })
  }


  render() {
    return (
      <>
        <ContactContainer>
          <section>
            <div className="line">
                <p>Have a question? Feel feel to contact us.</p>
            </div>
            <form className="container" onSubmit={this.handleSubmit}> 
            <div className="heading">
                <h2>Contact Form</h2>
            </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  value={this.state.formData.name}
                  onChange={this.handleChange}
                />
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value={this.state.formData.email}
                  onChange={this.handleChange}
                />
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={3}
                  defaultValue={""}
                  name="message"
                  value={this.state.formData.message}
                  onChange={this.handleChange}
                />
              </div>
              <br></br>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </section>
        </ContactContainer>
      </>
    );
  }
}

const ContactContainer = styled.section`
section {
    padding: 90px;
    background: url("/img/home/banner.jpg");
  }

  .line{

    text-align: center;
  }

  .line p{

    font-size: 25px;
    color : white;
  }
  .container {
    width: 70vh;
    border: solid black 2px;
    border-radius: 10px;
    padding: 20px;
    background-color: white;
  }

  .heading{

    margin-left : 25%;
  }

  .btn{

    margin-left: 40%;
  }
`;

import { Component } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { saveUser } from "../Service/controller";

export class UpdateProfile extends Component {
    constructor() {
        super();
        this.state = {
          formData: {},
          defaultValue: {
            id:"",
            fname:"",
            lname:"",
            email:"",
            dob:"",
            mobno:"",
            city:"",
            district:"",
            state:"",
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
        const response = await saveUser(this.state.formData);
        console.log(response.data);
        if (response.status == 200) {
          this.setState({
            formData: { id:"", fname:"", lname:"", email:"", dob:"", mobno:"", city:"", district:"", state:"" },
          });
    
          this.alertMsg();
        }
      };
    
      alertMsg = () =>{
    
        swal({
          title: "Success!!!",
          text: "Profile Updated Successfully",
          icon: "success",
          buttons: "OK",
        })
      }
    render(){
  return (
    <>
      <UpdateProfileContainer>
        <section>
          <form className="container" onSubmit={this.handleSubmit}>
            <div className="heading">
              <h2>Update Profile</h2>
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="id">User id</label>
              <input
                type="text"
                className="form-control"
                id="id"
                placeholder="Enter user id"
                name="id"
                value={this.state.formData.id}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="fname"
                placeholder="Enter First Name"
                name="fname"
                value={this.state.formData.fname}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lname"
                placeholder="Enter Last Name"
                name="lname"
                value={this.state.formData.lname}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter email id"
                name="email"
                value={this.state.formData.email}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="dob">Date Of Birth</label>
              <input
                type="text"
                className="form-control"
                id="dob"
                placeholder="Enter birth date"
                name="dob"
                value={this.state.formData.dob}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="mobno">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                id="mobno"
                placeholder="Enter mobile number"
                name="mobno"
                value={this.state.formData.mobno}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter city"
                name="city"
                value={this.state.formData.city}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="district">District</label>
              <input
                type="text"
                className="form-control"
                id="district"
                placeholder="Enter District"
                name="district"
                value={this.state.formData.district}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="Enter state"
                name="state"
                value={this.state.formData.state}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <button type="submit" className="btn btn-dark">
              update
            </button>
          </form>
          <br></br>
          <div className="row">
                      <div className="col">
                        <div id="postJob" className="col-1 m-auto">
                          <button
                            type="submit"
                            className="btn btn-danger mt-5"
                          ><a href= "/employer">
                             BACK
                          </a>
                           
                          </button>
                        </div>
                      </div>
                    </div>

        </section>
      </UpdateProfileContainer>
    </>
  );
    }
}

const UpdateProfileContainer = styled.section`
  section {
    padding: 60px;
    background: url("/img/home/banner.jpg");
    min-height: 140vh;
  }

  h2{

    margin-left : 25%;
  }

  .container {
    width: 70vh;
    height: 130vh;
    border: solid black 2px;
    border-radius: 10px;
    padding: 20px;
    background-color: white;
  }

  .btn{

    margin-left : 40%;
  }
`;

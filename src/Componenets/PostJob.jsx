import { Component } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { saveJob } from "../Service/controller";

export class PostJob extends Component {
  constructor() {
    super();
    this.state = {
      formData: {},
      defaultValue: {
        title: "",
        date: "",
        location: "",
        mobno: "",
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
    const response = await saveJob(this.state.formData);
    console.log(response.data);
    if (response.status == 200) {
      this.setState({
        formData: { title: "", date: "", location: "", mobno: "" },
      });

      this.alertMsg();
    }
  };

 
  alertMsg = () =>{

    Swal.fire({
      title: "Success!!!",
      text: "Job Posted Successfully",
      icon: "success",
      buttons: "OK",
    }).then(()=>{
      
      window.location="/postjob";
    })
    

  }

  render() {
    return (
      <>
        <PostJobContainer>
          <section>
            <main>
              <header id="header">
                <div className="container search_job_header">
                  <div className="row">
                    <div className="col job_search">
                      <h1 className="display1 mt-5" />
                    </div>
                  </div>
                  <form  onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-md-3">
                        <label htmlFor="" className="form-label" />{" "}
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Job Title"
                          name="title"
                          value={this.state.formData.title}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="" className="form-label" />{" "}
                        <input
                          className="form-control"
                          type="date"
                          name="date"
                          value={this.state.formData.date}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="" className="form-label" />{" "}
                        <input
                          className="form-control"
                          type="text"
                          placeholder="location"
                          name="location"
                          value={this.state.formData.location}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="" className="form-label" />{" "}
                        <input
                          className="form-control"
                          type="text"
                          pattern="[0-9]{10}"
                          placeholder="Mobile Number"
                          name="mobno"
                          value={this.state.formData.mobno}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div id="postJob" className="col-1 m-auto">
                          <button
                            type="submit"
                            className="btn btn-success mt-5"
                          >
                            Post Job
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                      <div className="col">
                        <div id="postJob" className="col-1 m-auto">
                          <button
                            type="submit"
                            className="btn btn-dark mt-5"
                          ><a href= "/employer">
                             BACK
                          </a>
                           
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
              </header>
            </main>
          </section>
        </PostJobContainer>
      </>
    );
  }
}

const PostJobContainer = styled.section`
  section {
    padding-top: 100px;
    height: 80vh;
    background: url("/img/home/banner.jpg");
  }
`;

import { Component } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { savePayment } from "../Service/controller";

export class Payment extends Component {
  constructor() {
    super();
    this.state = {
      formData: {},
      defaultValue: {
        cardNo: "",
        cardHolName: "",
        expDate: "",
        cvv: "",
        repName: "",
        repEmail: "",
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

    const response = await savePayment(this.state.formData);
    console.log(response.data);
    if (response.status == 200) {
      this.setState({
        formData: {
          cardNo: "",
          cardHolName: "",
          expDate: "",
          cvv: "",
          repName: "",
          repEmail: "",
        },
      });

      this.alertMsg();
    }
  };

  alertMsg = () => {
    Swal.fire({
      title: "Success!!!",
      text: "Payment Successful",
      icon: "success",
      buttons: "OK",
    }).then(() => {
      window.location = "/employer";
    });
  };

  render() {
    return (
      <>
        <PaymentContainer>
          <section>
            <form className="container" onSubmit={this.handleSubmit}>
              <div className="header">
                <h3>Payment Form</h3>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="cardNumber">Card number</label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  placeholder="Card number"
                  name="cad_no"
                  value={this.state.formData.cardNo}
                  onChange={this.handleChange}
                />
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="cardHolderName">Card holder name</label>
                <input
                  type="text"
                  className="form-control"
                  id="cardHolderName"
                  placeholder="Card holder name"
                  name="cardHolName"
                  value={this.state.formData.cardHolName}
                  onChange={this.handleChange}
                />
              </div>
              <br></br>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="expiryDate">Expiry date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    placeholder="MM/YY"
                    name="expDate"
                    value={this.state.formData.expDate}
                    onChange={this.handleChange}
                  />
                </div>
                <br></br>
                <div className="form-group col-md-6">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvv"
                    placeholder="CVV"
                    name="cvv"
                    value={this.state.formData.cvv}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <br></br>
              <hr />
              <div className="form-group">
                <label htmlFor="recipientName">Recipient name</label>
                <input
                  type="text"
                  className="form-control"
                  id="recipientName"
                  placeholder="Recipient name"
                  name="repName"
                  value={this.state.formData.repName}
                  onChange={this.handleChange}
                />
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="recipientEmail">Recipient email</label>
                <input
                  type="email"
                  className="form-control"
                  id="recipientEmail"
                  placeholder="Recipient email"
                  name="repEmail"
                  value={this.state.formData.repEmail}
                  onChange={this.handleChange}
                />
              </div>
              <br></br>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
            <div className="row">
              <div className="col">
                <div id="postJob" className="col-1 m-auto">
                  <button type="submit" className="btn btn-danger mt-5">
                    <a href="/employer">BACK</a>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </PaymentContainer>
      </>
    );
  }
}

const PaymentContainer = styled.section`
  section {
    padding: 70px;
    height: 130vh;
    background: url("/img/bg-2.jpg");
  }

  .header h3 {
    margin-left: 23%;
  }
  .container {
    width: 70vh;
    border: solid black 2px;
    border-radius: 10px;
    padding: 20px;
    height: 100vh;
    background-color: white;
  }

  .btn {
    margin-left: 40%;
  }
`;

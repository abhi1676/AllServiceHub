import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { savePayment } from "../Service/controller";

export const Payment = () => {
  const [formData, setFormData] = useState({
    cardNo: "",
    cardHolName: "",
    expDate: "",
    cvv: "",
    repName: "",
    repEmail: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await savePayment(formData);
    console.log(response.data);
    if (response.status === 200) {
      setFormData({
        cardNo: "",
        cardHolName: "",
        expDate: "",
        cvv: "",
        repName: "",
        repEmail: "",
      });

      alertMsg();
    }
  };

  const alertMsg = () => {
    Swal.fire({
      title: "Success!!!",
      text: "Payment Successful",
      icon: "success",
      buttons: "OK",
    });
  };

  return (
    <>
      <PaymentContainer>
        <section>
          <form className="container" onSubmit={handleSubmit}>
            <div className="header">
              <h3>Payment Form</h3>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="cardNumber">Card number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                placeholder="Card number"
                name="cardNo"
                value={formData.cardNo}
                onChange={handleChange}
                required // Added required attribute
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="cardHolderName">Card holder name</label>
              <input
                type="text"
                className="form-control"
                id="cardHolderName"
                placeholder="Card holder name"
                name="cardHolName"
                value={formData.cardHolName}
                onChange={handleChange}
                required // Added required attribute
              />
            </div>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="expiryDate">Expiry date</label>
                <input
                  type="text"
                  className="form-control"
                  id="expiryDate"
                  placeholder="MM/YY"
                  name="expDate"
                  value={formData.expDate}
                  onChange={handleChange}
                  required // Added required attribute
                />
              </div>
              <br />
              <div className="form-group col-md-6">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  placeholder="CVV"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required // Added required attribute
                />
              </div>
            </div>
            <br />
            <hr />
            <div className="form-group">
              <label htmlFor="recipientName">Recipient name</label>
              <input
                type="text"
                className="form-control"
                id="recipientName"
                placeholder="Recipient name"
                name="repName"
                value={formData.repName}
                onChange={handleChange}
                required // Added required attribute
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="recipientEmail">Recipient email</label>
              <input
                type="email"
                className="form-control"
                id="recipientEmail"
                placeholder="Recipient email"
                name="repEmail"
                value={formData.repEmail}
                onChange={handleChange}
                required // Added required attribute
              />
            </div>
            <br />
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
          <div className="row">
            <div className="col">
              <div id="postJob" className="col-1 m-auto">
                <Link to="/employer" className="btn btn-danger mt-5">
                  BACK
                </Link>
              </div>
            </div>
          </div>
        </section>
      </PaymentContainer>
    </>
  );
};

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

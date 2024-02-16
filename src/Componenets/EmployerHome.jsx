import { useEffect, useState } from "react";
import { Alert, Button, Container, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import { getInfoFromDatabase } from "../Service/controller";

export function EmployerHome() {
  const [user, setUser] = useState([]);
  const [selectId, setSelectId] = useState('');

  async function getInfo() {
    const response = await getInfoFromDatabase(selectId);
    setUser(response.data);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <EmployerContainer>
        <section>
          <div className="header_emp">
            <div className="navbar_emp container-fluid">
              <div className="navigation_bar_emp">
                
                    <div className="headtag">
                    <p>Welcome</p>
                    </div>
                  
                <br></br>
                <div className="headcontent">
                  <p>
                  AllServiceHub is a comprehensive housing services company that excels in providing a wide range of essential home maintenance solutions.
                   From plumbing and painting to housekeeping, water tank cleaning, pest control, and AC repair, 
                   they offer a one-stop solution for all household needs. Their services are distinguished by their excellent quality and reliability, 
                   ensuring that customers can rely on them for efficient and effective solutions to their home maintenance challenges. Whether it's fixing a leaky faucet,
                   repainting a room, or ensuring a pest-free environment, AllServiceHub is committed to delivering top-notch service to homeowners, 
                  making them a trusted partner for maintaining and enhancing the quality of residential spaces.
                      
                    </p>
                </div>
                <br></br>
                <div className="headcontent">
                <p>
      
                    </p>
                </div>
                
                <br></br>
                <br></br>
                <div className="nav_menu_emp buttons">
                  <div>
                    <a href="postjob" className="btn btn-success">
                      Post Job
                    </a>
                  </div>
                  <div>
                    <a
                      href="/updateprofile"
                      className="btn btn-info"
                    >
                      Update Profile
                    </a>
                  </div>
                  <div>
                    <a href="/employerjob" className="btn btn-info">
                      Posted Jobs
                    </a>
                  </div>
                  <div>
                    <a href="/payment" className="btn btn-info">
                      Payment
                    </a>
                  </div>
                  <div>
                    <a href="login" className="btn btn-danger">
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </EmployerContainer>
    </>
  );
}

const EmployerContainer = styled.section`
  section {
    padding-top: 70px;
    height: 80vh;
    background: url("/img/home/banner1.jpg");
  }

  .headtag p{

    margin-left: 45%;
    font-size : 50px;
    font-weight : 600;
    color : white;
  }

  .headcontent p{

    color : white;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;

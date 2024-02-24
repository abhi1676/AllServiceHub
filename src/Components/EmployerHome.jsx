import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  const handleLogout = () => {
    
    sessionStorage.clear();

    
  };
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
                  
                <br />
                <div className="headcontent">
                  <p className="content-paragraph">
                    AllServiceHub is a comprehensive housing services company that excels in providing a wide range of essential home maintenance solutions.
                    From plumbing and painting to housekeeping, water tank cleaning, pest control, and AC repair, 
                    they offer a one-stop solution for all household needs. Their services are distinguished by their excellent quality and reliability, 
                    ensuring that customers can rely on them for efficient and effective solutions to their home maintenance challenges. Whether it's fixing a leaky faucet,
                    repainting a room, or ensuring a pest-free environment, AllServiceHub is committed to delivering top-notch service to homeowners, 
                    making them a trusted partner for maintaining and enhancing the quality of residential spaces.
                  </p>
                </div>
                
                <br />
                <br />
                <div className="nav_menu_emp buttons">
                  <div>
                    <Link to="/postjob" className="btn btn-success">
                      Book Service 
                    </Link>
                  </div>
                  <div>
                    <Link to="/updateprofile" className="btn btn-info">
                      Update Profile
                    </Link>
                  </div>
                  <div>
                    <Link to="/employerjob" className="btn btn-info">
                      Posted Services
                    </Link>
                  </div>
                  <div>
                    <Link to="/payment" className="btn btn-info">
                      Payment
                    </Link>
                  </div>
                  <div>
                    <Link to="/login" className="btn btn-danger" onClick={handleLogout}>
                      Log Out
                    </Link>
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

  .headtag p {
    margin-left: 45%;
    font-size: 50px;
    font-weight: 600;
    color: white;
  }

  .headcontent p.content-paragraph {
    color: white;
    font-size: 20px; /* Set your desired font size */
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;

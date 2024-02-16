import { useEffect, useState } from "react";
import { Alert,  Container, Table } from "react-bootstrap";
import styled from "styled-components";
import { getAllAdminFromDatabase } from "../Service/controller";

export function AllAdmins() {
  const [adminList, setAdminList] = useState([]);
 
  async function getAllAdmins() {
    const response = await getAllAdminFromDatabase();
    setAdminList(response.data);
  }

  useEffect(() => {
    getAllAdmins();
  }, []);

  return (
    <>
      <AllAdminsContainer>
        <section className="alltestlist">
          <Container className="mt-4 mb-4 text-center">
            <Alert>All Admins Details</Alert>
          </Container>
          <Container>
            <Table>
              <thead>
                <tr>
                  <th>Admin Id</th>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Mobile Number</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {adminList.map((admin) => {
                  return (
                    <tr>
                      <td>{admin.id}</td>
                      <td>{admin.name}</td>
                      <td>{admin.email}</td>
                      <td>{admin.mobno}</td>
                      <td>{admin.city}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div className="row">
                      <div className="col">
                        <div id="postJob" className="col-1 m-auto">
                          <button
                            type="submit"
                            className="btn btn-dark mt-5"
                          ><a href= "/adminhome">
                             BACK
                          </a>
                           
                          </button>
                        </div>
                      </div>
                    </div>
          </Container>
        </section>
      </AllAdminsContainer>
    </>
  );
}

const AllAdminsContainer = styled.section`
  section {
    padding-top: 100px;
    min-height: 80vh;
  }
`;

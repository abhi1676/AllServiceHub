import React, { useEffect, useState } from "react";
import { Alert, Container, Table } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getAllJobsFromDatabase } from "../Service/controller";

export function EmployerJob() {
  const [jobList, setJobList] = useState([]);

  async function getAllJobs() {
    const response = await getAllJobsFromDatabase();
    setJobList(response.data);
  }

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <>
      <EmployerJobContainer>
        <section className="alltestlist">
          <Container className="mt-4 mb-4 text-center">
            <Alert>All Posted Services</Alert>
          </Container>
          <Container>
            <Table>
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Mobile Number</th>
                </tr>
              </thead>
              <tbody>
                {jobList.map((postjob) => {
                  return (
                    <tr key={postjob.id}>
                      <td>{postjob.id}</td>
                      <td>{postjob.title}</td>
                      <td>{postjob.date}</td>
                      <td>{postjob.location}</td>
                      <td>{postjob.mobno}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
          <br />
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
      </EmployerJobContainer>
    </>
  );
}

const EmployerJobContainer = styled.section`
  section {
    padding-top: 100px;
  }
`;

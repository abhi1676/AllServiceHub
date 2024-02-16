import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import styled from "styled-components";
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
                <Alert>
                    All Job Details
                </Alert>
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
                        {
                            jobList.map((postjob) => {
                                return (
                                    <tr>
                                        <td>{postjob.id}</td>
                                        <td>{postjob.title}</td>
                                        <td>{postjob.date}</td>
                                        <td>{postjob.location}</td>
                                        <td>{postjob.mobno}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
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
            </EmployerJobContainer>

        </>
    );
}

const EmployerJobContainer = styled.section`

section{

    padding-top: 100px;
}

`;
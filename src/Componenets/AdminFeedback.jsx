import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import styled from "styled-components";
import { deleteFeedbackFromDatabase, getAllFeedbackFromDatabase } from "../Service/controller";

export function AdminFeedback() {

    const [feedbackList, setFeedbackList] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [isModalOpened,setIsModalOpened] = useState(false);

    const openModal = ()=>{
        setIsModalOpened(true);
    }
    const closeModal = ()=>{
        setIsModalOpened(false);
    }

    async function getAllFeedback() {
        const response = await getAllFeedbackFromDatabase();
        setFeedbackList(response.data);
    }

    const deleteFeedback = async()=>{
        const response=await deleteFeedbackFromDatabase(selectedUserId);
        console.log(response.data);
        closeModal();
        getAllFeedback();
    }

    useEffect(() => {
        getAllFeedback();
    }, []);

    return (
        <>
        <AllContactContainer>
            <section className="alltestlist">
            <Container className="mt-4 mb-4 text-center">
                <Alert>
                    All Feedback        
             </Alert>
            </Container>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            feedbackList.map((feedback) => {
                                return (
                                    <tr>
                                        <td>{feedback.id}</td>
                                        <td>{feedback.name}</td>
                                        <td>{feedback.email}</td>
                                        <td>{feedback.message}</td>
                                        <td><Button variant="danger" className="btn-sm" onClick={() => {
                                            setSelectedUserId(feedback.id);
                                           openModal();
                                        }}>Delete</Button></td>
                                    </tr>
                                )
                            })
                        }
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
            </AllContactContainer>
            <Modal show={isModalOpened} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete feedback with {selectedUserId} ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={deleteFeedback}>
                       Yes, Delete
                    </Button>
                    <Button variant="danger" onClick={closeModal}>
                       No
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

const AllContactContainer = styled.section`

section{

    padding-top: 100px;
    min-height: 80vh;
}

`;
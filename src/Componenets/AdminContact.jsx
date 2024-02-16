import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import styled from "styled-components";
import { deleteContactFromDatabase, getAllContactFromDatabase } from "../Service/controller";

export function AdminContact() {

    const [contactList, setContactList] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [isModalOpened,setIsModalOpened] = useState(false);

    const openModal = ()=>{
        setIsModalOpened(true);
    }
    const closeModal = ()=>{
        setIsModalOpened(false);
    }

    async function getAllContacts() {
        const response = await getAllContactFromDatabase();
        setContactList(response.data);
    }

    const deleteContact = async()=>{
        const response=await deleteContactFromDatabase(selectedUserId);
        console.log(response.data);
        closeModal();
        getAllContacts();
    }

    useEffect(() => {
        getAllContacts();
    }, []);

    return (
        <>
        <AllContactContainer>
            <section className="alltestlist">
            <Container className="mt-4 mb-4 text-center">
                <Alert>
                    All Contact Details
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
                            contactList.map((user) => {
                                return (
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.message}</td>
                                        <td><Button variant="danger" className="btn-sm" onClick={() => {
                                            setSelectedUserId(user.id);
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
                <Modal.Body>Are you sure you want to delete entry with {selectedUserId} ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={deleteContact}>
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
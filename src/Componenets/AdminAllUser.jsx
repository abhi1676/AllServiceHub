import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import styled from "styled-components";
import { deleteUserFromDatabase, getAllUserFromDatabase } from "../Service/controller";

export function AdminAllUser() {

    const [userList, setUserList] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [isModalOpened,setIsModalOpened] = useState(false);

    const openModal = ()=>{
        setIsModalOpened(true);
    }
    const closeModal = ()=>{
        setIsModalOpened(false);
    }

    async function getAllUsers() {
        const response = await getAllUserFromDatabase();
        setUserList(response.data);
    }

    const deleteUser = async()=>{
        const response=await deleteUserFromDatabase(selectedUserId);
        console.log(response.data);
        closeModal();
        getAllUsers();
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <>
        <AdminAllUserContainer>
            <section className="alltestlist">
            <Container className="mt-4 mb-4 text-center">
                <Alert>
                    All User Details
                </Alert>
            </Container>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>City</th>
                            <th>District</th>
                            <th>State</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((user) => {
                                return (
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobno}</td>
                                        <td>{user.city}</td>
                                        <td>{user.district}</td>
                                        <td>{user.state}</td>
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
            </AdminAllUserContainer>
            <Modal show={isModalOpened} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete user with {selectedUserId} ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={deleteUser}>
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

const AdminAllUserContainer = styled.section`

section{

    padding-top: 100px;
    min-height: 70vh;
}

`;
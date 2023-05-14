

import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import axios from 'axios';


export function PaymentsView() {

    const [applicantsList, setapplicantsList] = useState([]);
    const [selectedapplicantName, setselectedapplicantName] = useState('');
    const [isModalOpened,setIsModalOpened] = useState(false);
   

    const openModal = ()=>{
        setIsModalOpened(true);
    }
    const closeModal = ()=>{
        setIsModalOpened(false);
    }
    async function getAllapplicants() {
        const response = await axios.get(`http://localhost:8080/payment`);
        setapplicantsList(response.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/payment/${id}`);
        getAllapplicants();
      };
   
    

    useEffect(() => {
        getAllapplicants();
    }, []);

    return (
        <>
        <div className="mt-5">
            <Container className="mt-4 mb-4 text-center">
                <Alert>
                    List of all the Payments
                </Alert>
            </Container>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>User Id</th>
                            <th>date</th>
                            <th>amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applicantsList.map((applicant) => {
                                return (
                                    <tr>
                                        <td>{applicant.name}</td>
                                        <td>{applicant.userId}</td>
                                        <td>{applicant.date}</td>
                                        <td>{applicant.amoount}</td>
                                        
                                        <td><Button variant="danger" className="btn-sm" onClick={() => deleteUser(applicant.paymentId)}>Delete</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            </div>
            
        </>
    );
}

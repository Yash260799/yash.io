

import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import axios from 'axios';


export function BookingView() {

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
        const response = await axios.get(`http://localhost:8080/booking`);
        setapplicantsList(response.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/booking/${id}`);
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
                    List of all the Bookings
                </Alert>
            </Container>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Emails</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th>amount</th>
                            <th>fromLocation</th>
                            <th>dropLocation</th>
                            <th>noOfDays</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applicantsList.map((applicant) => {
                                return (
                                    <tr>
                                        <td>{applicant.firstName}</td>
                                        <td>{applicant.lastName}</td>
                                        <td>{applicant.email}</td>
                                        <td>{applicant.age}</td>
                                        <td>+91-{applicant.phone}</td>
                                        <td>{applicant.amount}</td>
                                        <td>{applicant.fromLocation}</td>
                                        <td>{applicant.dropLocation}</td>
                                        <td>{applicant.noOfDays}</td>
                                        <td>{applicant.date}</td>
                                        
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
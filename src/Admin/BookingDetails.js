import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import axios from 'axios';


export function BookingDetails() {

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
        const response = await axios.get(`http://localhost:8080/booking`);;
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
                    List of all Bookings
                </Alert>
            </Container>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Destination</th>
                            <th>Numbers of Days</th>
                            <th>Date</th>
                            <th>Booking Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applicantsList.map((applicant) => {
                                return (
                                    <tr>
                                        <td>{applicant.firstName}</td>
                                        <td>{applicant.lastName}</td>
                                        <td>+91-{applicant.phone}</td>
                                        <td>{applicant.fromLocation}</td>
                                        <td>{applicant.dropLocation}</td>
                                        <td>{applicant.noOfDays}</td>
                                        <td>{applicant.date}</td>
                                        <td>{applicant.bookingStatus}</td>
                                        
                                        
                                        <td><Button variant="danger" className="btn-sm" onClick={() => deleteUser(applicant.bookingId)}>Delete</Button></td>
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
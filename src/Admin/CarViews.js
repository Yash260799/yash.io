import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import axios from 'axios';


export function CarViews() {

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
        const response = await axios.get(`http://localhost:8080/car`);
        setapplicantsList(response.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/car/${id}`);
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
                    List of all the Customers
                </Alert>
            </Container>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Car Id</th>
                            <th>Car Name</th>
                            <th>FuelType</th>
                            <th>Seats</th>
                            <th>Location</th>
                            <th>Driven KM</th>
                            <th>Amount</th>
                            <th>Image Url</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applicantsList.map((applicant) => {
                                return (
                                    <tr>
                                        <td>{applicant.carId}</td>
                                        <td>{applicant.carName}</td>
                                        <td>{applicant.fuelType}</td>
                                        <td>{applicant.seats}</td>
                                        <td>{applicant.location}</td>
                                        <td>{applicant.drivenKm}</td>
                                        <td>{applicant.amount}</td>
                                        <td>{applicant.imageUrl}</td>
                                        <td>{applicant.quantity}</td>
                                       
                                        <td><Button variant="danger" className="btn-sm" onClick={() => deleteUser(applicant.id)}>Delete</Button></td>
                                        <td><Button variant="danger" className="btn-sm" onClick={() => deleteUser(applicant.id)}>Edit</Button></td>
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
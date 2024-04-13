import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function App() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://backend.isgbiblecollegeuk.com/getDetails');
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);



    return (
        <div>
            <h2>Data For 2025 Ordination and Student Graduate Program</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>S.No</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Father Name</TableCell>
                            <TableCell>DOB</TableCell>
                            <TableCell>Marraige Status</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Postal Code</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>WhatsApp Number</TableCell>
                            <TableCell>Church Name</TableCell>
                            <TableCell>Church Register Number</TableCell>
                            <TableCell>Church Address</TableCell>
                            <TableCell>Church Phone Number</TableCell>
                            <TableCell>Church Members</TableCell>
                            <TableCell>Church Experience</TableCell>
                            <TableCell>Course Certificate</TableCell>
                            <TableCell>Attestation By College</TableCell>
                            <TableCell>Passport Photo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{user.country}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.fatherName}</TableCell>
                                <TableCell>{user.dob}</TableCell>
                                <TableCell>{user.married}</TableCell>
                                <TableCell>{user.address}</TableCell>
                                <TableCell>{user.city}</TableCell>
                                <TableCell>{user.state}</TableCell>
                                <TableCell>{user.postalCode}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.whatsappNumber}</TableCell>
                                <TableCell>{user.churchName}</TableCell>
                                <TableCell>{user.churchRegisterNumber}</TableCell>
                                <TableCell>{user.churchAddress}</TableCell>
                                <TableCell>{user.churchPhoneNumber}</TableCell>
                                <TableCell>{user.churchMembers}</TableCell>
                                <TableCell>{user.churchExperience}</TableCell>
                                <TableCell>{user.courseCertificate}</TableCell>
                                <TableCell>{user.attestation}</TableCell>
                                <TableCell>
                                    {user.passportPhoto && (
                                        <div>
                                            <img src={user.passportPhoto || avatar} alt="" />
                                        </div>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

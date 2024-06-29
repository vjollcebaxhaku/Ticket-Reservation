import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Container, Table, TableBody, TableCell, TableHead, TableRow, Typography, Box } from '@mui/material';

const SoldTickets = () => {
    const [soldTickets, setSoldTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSoldTickets = async () => {
            try {
                const response = await axios.get('http://localhost:4000/tickets-data/sold');
                setSoldTickets(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching sold tickets:', error);
                setLoading(false);
            }
        };

        fetchSoldTickets();
    }, []);

    return (
        <Box
            sx={{
                bgcolor: "#f5f5f5",
                borderRadius: 4,
                p: 4,
                boxShadow: 1,
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 4,
                }}
            >
                <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{ fontFamily: "'Roboto Mono', monospace", color: "black" }}
                >
                    Sold Tickets
                </Typography>
                {loading ? (
                    <CircularProgress />
                ) : soldTickets.length > 0 ? (
                    <Table sx={{ mt: 4, bgcolor: "background.paper" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>User ID</TableCell>
                                <TableCell>Ticket ID</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Ticket Name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {soldTickets.map(ticket => (
                                <TableRow key={ticket.id} hover>
                                    <TableCell>{ticket.id}</TableCell>
                                    <TableCell>{ticket.userId}</TableCell>
                                    <TableCell>{ticket.ticketId}</TableCell>
                                    <TableCell>{ticket.quantity}</TableCell>
                                    <TableCell>{ticket.ticket.name}</TableCell>
                                    <TableCell>{ticket.ticket.price}</TableCell>
                                    <TableCell>{ticket.ticket.type}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <Typography
                        variant="h6"
                        sx={{ fontFamily: "'Roboto Mono', monospace", color: "black" }}
                    >
                        No sold tickets available.
                    </Typography>
                )}
            </Container>
        </Box>
    );
};

export default SoldTickets;

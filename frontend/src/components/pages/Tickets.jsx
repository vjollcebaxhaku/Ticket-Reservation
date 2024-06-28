import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Nav from '../Nav';
import Footer from '../Footer';
import ticketPic from './pictures/pic3.png';
import Modal from 'react-modal'; // Import react-modal

Modal.setAppElement('#root'); // Set app root element for accessibility

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userTickets, setUserTickets] = useState([]);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/tickets')  // replace 'your_port' with the actual port number
      .then(response => {
        setTickets(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleViewMyTickets = () => {
    const userId = sessionStorage.getItem('userID'); // Assuming userId is stored in sessionStorage

    if (userId) {
      setModalLoading(true);
      axios.get(`http://localhost:4000/tickets/user/${userId}`)
        .then(response => {
          setUserTickets(response.data);
          setModalLoading(false);
          setShowModal(true);
        })
        .catch(error => {
          console.error('Error fetching user tickets:', error);
          setModalLoading(false);
          // Handle error state or message to user
        });
    } else {
      // Handle case where userId is not available
      console.error('User ID not found in sessionStorage');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading tickets: {error.message}</p>;

  return (
    <>
      <Nav />
      <Layout pictureSrc={ticketPic} contentStyle={{ paddingTop: '80px' }}>
        <section className="text-center mt-20 relative">
          <div className="flex justify-center">
            {tickets.map((ticket, index) => (
              <div key={ticket.id} className={`p-4 ${index !== 0 && 'ml-3'}`}>
                <p className="text-3xl font-bold text-purple-800 tracking-wide font-mono">{ticket.name}</p>
                <p className="text-4xl font-bold text-gray-500 tracking-wide font-mono mt-6">{ticket.price}€</p>
                <Link to="/ticket-purchase" target="_blank">
                  <button className="bg-purple-800 text-black font-mono rounded-sm px-10 py-2 text-custom mt-4">BUY NOW</button>
                </Link>
              </div>
            ))}
          </div>
          <button onClick={handleViewMyTickets} className="bg-blue-500 text-white font-mono rounded-md px-6 py-2 mt-8">
            View My Tickets
          </button>
        </section>
        <div className="mt-20"></div>
      </Layout>
      <Footer />

      <Modal
  isOpen={showModal}
  onRequestClose={() => setShowModal(false)}
  contentLabel="My Tickets Modal"
  className="modal-content mx-auto max-w-lg p-4"
  overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
>
        <div>
          <h2 className="text-xl font-bold">My Tickets</h2>
          {modalLoading ? (
            <p>Loading user tickets...</p>
          ) : (
            <table className="table-auto mt-4">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Ticket Name</th>
                  <th className="border px-4 py-2">Price (€)</th>
                  {/* Add more table headers if needed */}
                </tr>
              </thead>
              <tbody>
                {userTickets.map(ticket => (
                  <tr key={ticket.id}>
                    <td className="border px-4 py-2">{ticket.name}</td>
                    <td className="border px-4 py-2">{ticket.price.toFixed(2)}</td>
                    {/* Add more table cells if needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Modal>
    </>
  );
}

export default Tickets;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import earlyBirdImage from './pictures/earlybird.png'; 
import believerImage from './pictures/believer.png'; 
import { useNavigate } from 'react-router-dom';

function TicketPurchase() {
  const [tickets, setTickets] = useState([]);
  const [ticketAmounts, setTicketAmounts] = useState({});
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/tickets') 
      .then(response => {
        const initialAmounts = response.data.reduce((acc, ticket) => {
          acc[ticket.id] = 0;
          return acc;
        }, {});
        setTickets(response.data);
        setTicketAmounts(initialAmounts);
      })
      .catch(error => console.error('Error fetching tickets:', error));
  }, []);

  const handleTicketChange = (ticketId, value) => {
    const newAmount = ticketAmounts[ticketId] + value;
    if (newAmount >= 0) {
      setTicketAmounts({
        ...ticketAmounts,
        [ticketId]: newAmount,
      });
      setShowCheckout(Object.values(ticketAmounts).some(amount => amount > 0) || newAmount > 0);
    }
  };
  const navigate= useNavigate()
  const handleCheckout = () => {
    const userId = localStorage.getItem('userID'); 
  
    Object.keys(ticketAmounts)
      .filter(ticketId => ticketAmounts[ticketId] > 0)
      .forEach(ticketId => {
        const ticketPurchase = {
          userId: parseInt(userId),
          ticketId: parseInt(ticketId),
          quantity: ticketAmounts[ticketId],
        };
  console.log(ticketPurchase);
        axios.post(`http://localhost:4000/buy-ticket`, ticketPurchase)
          .then(response => {
            console.log(`Ticket ${ticketPurchase.ticketId} purchased successfully:`, response.data);
              navigate("/tickets")
          })
          .catch(error => console.error(`Error purchasing ticket ${ticketPurchase.ticketId}:`, error));
      });
  };
  

  return (
    <div className="container mx-auto mt-20 py-20">
      <div className="container text-center">
        <h1 className="text-black text-3xl font-bold font-mono mb-4">Tickets</h1>
        <h2 className="text-black text-xl font-bold font-mono mb-8">Securely purchase and receive your event tickets</h2>
      </div>
      {tickets.map(ticket => (
        <div key={ticket.id} className="max-w-xl mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8">
          <img src={ticket.id === 1 ? earlyBirdImage : believerImage} alt={ticket.name} className="w-full" />
          <div className="p-8 flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold font-mono text-black mb-4">{ticket.name}</h2>
              <div className="bg-orange-100 inline-block rounded-lg p-2 mr-4 mb-4">
                <p className="text-lg font-bold font-mono text-orange-700">{ticket.price.toFixed(2)} €</p>
              </div>
              <p className="text-gray-500 font-light font-mono mt-2">+ 3.75 € booking fee</p>
            </div>
            <div className="flex items-center mt-12">
              <div className="flex items-center mr-4">
                <button
                  onClick={() => handleTicketChange(ticket.id, -1)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 font-mono"
                >
                  -
                </button>
                <p className="mx-2 text-gray-700 font-mono">{ticketAmounts[ticket.id]}</p>
                <button
                  onClick={() => handleTicketChange(ticket.id, 1)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 font-mono"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {showCheckout && (
        <footer className="p-4 bg-orange-500 text-center rounded-b-lg">
          <button
            onClick={handleCheckout}
            className="bg-orange-500 text-white font-mono rounded-md px-6 py-2 text-lg"
          >
            CHECKOUT ({Object.keys(ticketAmounts).reduce((total, ticketId) => total + (ticketAmounts[ticketId] * tickets.find(ticket => ticket.id === parseInt(ticketId, 10)).price) + (ticketAmounts[ticketId] * 3.75), 0).toFixed(2)} €)
          </button>
        </footer>
      )}
    </div>
  );
}

export default TicketPurchase;

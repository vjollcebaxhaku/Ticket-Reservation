import React, { useState } from 'react';
import earlyBirdImage from './pictures/earlybird.png'; // Importing the earlybird.png image
import believer from './pictures/believer.png'; // Importing the earlybird.png image

function TicketPurchase() {
  const ticketPriceEarlyBird = 150.00; // Price per ticket for Early Bird
  const ticketPriceBeliever = 100.00; // Price per ticket for Believer
  const bookingFee = 3.75; // Booking fee per ticket
  const [ticketAmountEarlyBird, setTicketAmountEarlyBird] = useState(0);
  const [ticketAmountBeliever, setTicketAmountBeliever] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false); // Combined checkout button visibility state

  const handleTicketChangeEarlyBird = (value) => {
    const newAmount = ticketAmountEarlyBird + value;
    if (newAmount >= 0) {
      setTicketAmountEarlyBird(newAmount);
      setShowCheckout(newAmount > 0 || ticketAmountBeliever > 0); // Show checkout button if positive amount selected for either ticket type
    }
  };

  const handleTicketChangeBeliever = (value) => {
    const newAmount = ticketAmountBeliever + value;
    if (newAmount >= 0) {
      setTicketAmountBeliever(newAmount);
      setShowCheckout(newAmount > 0 || ticketAmountEarlyBird > 0); // Show checkout button if positive amount selected for either ticket type
    }
  };

  const handleCheckout = () => {
    // Redirect to checkout page with selected ticket amounts
    console.log(`Redirecting to checkout for Early Bird with ${ticketAmountEarlyBird} ticket(s) and Believer with ${ticketAmountBeliever} ticket(s)`);
  };

  const totalPriceEarlyBird = (ticketAmountEarlyBird * ticketPriceEarlyBird) + (ticketAmountEarlyBird * bookingFee);
  const totalPriceBeliever = (ticketAmountBeliever * ticketPriceBeliever) + (ticketAmountBeliever * bookingFee);

  return (
    <div className="container mx-auto mt-20 py-20">
        <div className="container text-center">
  <h1 className="text-black text-3xl font-bold font-mono mb-4">Tickets</h1>
  <h2 className="text-black text-xl font-bold font-mono mb-8">Securely purchase and receive your event tickets</h2>
    </div>
      <div className="max-w-xl mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8">
        <img src={earlyBirdImage} alt="Early Bird" className="w-full" />
        <div className="p-8 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold font-mono text-black mb-4">Early Bird</h2>
            <div className="bg-orange-100 inline-block rounded-lg p-2 mr-4 mb-4">
              <p className="text-lg font-bold font-mono text-orange-700">{ticketPriceEarlyBird.toFixed(2)} €</p>
            </div>
            <p className="text-gray-500 font-light font-mono mt-2">+ {bookingFee.toFixed(2)} € booking fee</p>
          </div>
          <div className="flex items-center mt-12">
            <div className="flex items-center mr-4">
              <button
                onClick={() => handleTicketChangeEarlyBird(-1)}
                className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 font-mono"
              >
                -
              </button>
              <p className="mx-2 text-gray-700 font-mono">{ticketAmountEarlyBird}</p>
              <button
                onClick={() => handleTicketChangeEarlyBird(1)}
                className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 font-mono"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Believer Box */}
      <div className="max-w-xl mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8">
        <img src={believer} alt="believer" className="w-full" />
        <div className="p-8 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold font-mono text-black mb-4">Believer</h2>
            <div className="bg-orange-100 inline-block rounded-lg p-2 mr-4 mb-4">
              <p className="text-lg font-bold font-mono text-orange-700">{ticketPriceBeliever.toFixed(2)} €</p>
            </div>
            <p className="text-gray-500 font-light font-mono mt-2">+ {bookingFee.toFixed(2)} € booking fee</p>
          </div>
          <div className="flex items-center mt-12">
            <div className="flex items-center mr-4">
              <button
                onClick={() => handleTicketChangeBeliever(-1)}
                className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 font-mono"
              >
                -
              </button>
              <p className="mx-2 text-gray-700 font-mono">{ticketAmountBeliever}</p>
              <button
                onClick={() => handleTicketChangeBeliever(1)}
                className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 font-mono"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Checkout Button */}
      {showCheckout && (
        <footer className="p-4 bg-orange-500 text-center rounded-b-lg">
          <button
            className="bg-orange-500 text-white font-mono rounded-md px-6 py-2 text-lg"
            onClick={handleCheckout}
          >
            CHECKOUT ({(totalPriceEarlyBird + totalPriceBeliever).toFixed(2)} €)
          </button>
        </footer>
      )}
    </div>
  );
}

export default TicketPurchase;

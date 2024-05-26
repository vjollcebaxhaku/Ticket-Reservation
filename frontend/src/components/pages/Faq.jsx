import React, { useState } from 'react';
import Layout from '../Layout';
import ticketPic from './pictures/pic7.png'; 
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Faq() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    if (index === selectedQuestion) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  const faqData = [
    {
      question: "Can I refund my ticket?",
      answer: "ALL TICKETS ARE NON-TRANSFERABLE AND NON-REFUNDABLE"
    },
    {
      question: "Can I buy a parking ticket?",
      answer: "YES, PARKING TICKETS WILL BE AVAILABLE FOR PURCHASE SOON."
    },
    {
      question: "What are the festival dates?",
      answer: "BE READY FOR FOUR UNFORGETTABLE NIGHTS! SUNNY HILL FESTIVAL 2024 DATES ARE 25, 26, 27 AND 28 JULY."
    },
    {
      question: "How can I top-up my wristband online?",
      answer: "ALL TICKETS ARE NON-TRANSFERABLE AND NON-REFUNDABLE"
    },
    {
      question: "Where can i top-up my wristband",
      answer: "YOU WILL BE ABLE TO TOP-UP YOUR WRISTBAND THROUGH OUR APP AND DIRECTLY AT THE VENUE."
    },
    {
      question: "How to use smart wristband?",
      answer: "SUNNY HILL FESTIVAL IS PROVIDING AN EASY AND SECURE CASHLESS PAYMENT SYSTEM. YOU’LL BE ABLE TO BUY ALL THAT YOU WANT UPON TOPPING-UP YOUR WRISTBAND. WHEN ORDERING FOOD AND DRINKS, SIMPLY SHOW YOUR WRISTBAND TO BARTENDERS FOR SCAN!"
    },
    {
      question: "What is the check-in process?",
      answer: "DON’T FORGET YOUR ID CARD! UPON PRESENTING YOUR ID CARD AND TICKET AT THE VENUE GATE, YOU WILL RECEIVE THE FESTIVAL QR BRACELET, OUR FAMOUS WRISTBAND. IT IS LINKED TO YOUR UNIQUE ID AND CANNOT BE EXCHANGED OR TRANSFERRED TO ANOTHER INDIVIDUAL. FAILURE TO HAVE THE BRACELET WILL RESULT IN DENIAL OF RE-ENTRY TO THE FESTIVAL VENUE."
    },
    {
      question: "How can I transfer my ticket to another person?",
      answer: "ALL TICKETS ARE NON-TRANSFERABLE AND NON-REFUNDABLE."
    },
    {
      question: "What is the difference between a Regular and VIP ticket?",
      answer: "REGULAR TICKET HOLDERS WILL ENTER THROUGH THE MAIN GATE AND EXPERIENCE THE FESTIVAL RIGHT IN FRONT OF THE MAIN STAGE. VIP TICKET HOLDERS WILL HAVE A SPECIAL ENTRANCE AND A DESIGNATED VIP HANGOUT SPACE."
    },
    {
      question: "Where can I buy tickets?",
      answer: "ALL FESTIVAL TICKETS WILL BE AVAILABLE ONLINE ON OUR WEBSITE: SUNNYHILLFESTIVAL.COM . ALL TICKETS ARE 4-DAY PASSES"
    },
    {
      question: "Use of tickets for promotions",
      answer: "TICKET CAN NOT BE USED FOR ANY KIND OF PROMOTIONAL ACTIVITY (E.G. PRIZE-WINNING GAMES AND/OR SIMILAR), WITHOUT SUNNY HILL FESTIVAL’S CONSENT. FOR MORE DETAILS ON CORPORATE OR BULK TICKETS, CONTACT US AT: SUNNYHILLFESTIVAL@REPUBLIKA.TV"
    },
    {
      question: "Recommended Hotels and Hostels to stay during the festival?",
      answer: "HERE YOU HAVE A LIST OF HOTELS AND HOSTELS, WHERE YOU CAN CONSIDER TO STAY DURING THE DAYS OF THE FESTIVAL AND EVEN MORE IF YOU LIKE TO FURTHER EXPLORE THE CITY OF PRISHTINA: HOSTELS: HTTPS://WWW.BOOKING.COM/HOSTELS/CITY/XK/PRISTINA.HTML HOTELS: HTTPS://WWW.BOOKING.COM/CITY/XK/PRISTINA.HTML"
    },
    {
      question: "The minimum age to attend?",
      answer: "THE MINIMUM AGE TO ATTEND THE FESTIVAL ALONE IS 16. YOUNGSTERS BELOW 16 SHOULD BE ACCOMPANIED BY THEIR PARENTS OR ANY OTHER ADULT."
    },
    {
      question: "How do I get to the festival?",
      answer: "HAPPY NEWS! WE HAVE A NEW LOCATION THIS YEAR AND WE CAN’T WAIT TO MEET YOU THERE. OUR NEW VENUE IS IN THE VILLAGE OF BËRNICË E POSHTME, JUST A 15-MINUTE DRIVE FROM THE CITY. WE RECOMMEND USING SHUTTLE BUSES DEDICATED FOR THE FESTIVAL VENUE, AS THERE WILL BE LIMITED PARKING AVAILABLE."
    },
    {
      question: "How many types of tickets are available?",
      answer: "TICKET CAN NOT BE USED FOR ANY KIND OF PROMOTIONAL ACTIVITY (E.G. PRIZE-WINNING GAMES AND/OR SIMILAR), WITHOUT SUNNY HILL FESTIVAL’S CONSENT. FOR MORE DETAILS ON CORPORATE OR BULK TICKETS, CONTACT US AT: SUNNYHILLFESTIVAL@REPUBLIKA.TV"
    },
    {
      question: "Can I work as a volunteer at the festival?",
      answer: "YES, YOU CAN WORK AS A VOLUNTEER. ALL THE INFORMATION WILL BE POSTED IN THE SUNNY HILL FESTIVAL WEBSITE AND FACEBOOK PAGE, SO STAY TUNED TO BE PART OF THE BIGGEST FESTIVAL IN THE REGION."
    },
    {
      question: "Whats the age limit?",
      answer: "A PERSON OF 16 YEARS OR OLDER IS CLASSIFIED AS AN ADULT AND IS ELIGIBLE TO ENTER THE VENUE ON THEIR OWN. CHILDREN AT THE AGE OF 15 AND UNDER MUST BE ACCOMPANIED BY AN ADULT OVER THE AGE OF 18."
    },
  ];

  return (
    <Layout pictureSrc={ticketPic}>
      <section>
        <div>
          {faqData.map((faq, index) => (
            <div key={index} className="mb-0">
              <div className={`border-b ${selectedQuestion === index ? '' : 'border-green-500'}`}>
                <button
                  className={`text-left w-full bg-white text-black font-bold font-mono py-3 px-4 rounded-t-lg text-lg relative focus:outline-white ${selectedQuestion === index ? 'border border-green-500' : ''}`}
                  onClick={() => handleQuestionClick(index)}
                >
                  {faq.question}
                  {selectedQuestion === index ? <FiChevronUp className="absolute right-4 top-1/2 transform -translate-y-1/2" /> : <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2" />}
                </button>
              </div>
              {selectedQuestion === index && (
                <div className="bg-white text-black font-mono border-l border-r border-b border-green-500 py-3 px-4 text-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Faq;

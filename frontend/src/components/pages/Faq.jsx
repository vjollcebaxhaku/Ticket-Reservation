import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout';
import ticketPic from './pictures/pic7.png'; 
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Nav from '../Nav';
import Footer from '../Footer';

function Faq() {
  const [faqData, setFaqData] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/faq');
        setFaqData(response.data);
      } catch (error) {x
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFaqs();
  }, []);

  const handleQuestionClick = (index) => {
    if (index === selectedQuestion) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  return (
    <>
      <Nav />
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
                    {selectedQuestion === index ? <FiChevronUp className="absolute right-4 top-1/2 transform -translate-y-1/2" />
                    : <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2" />}
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
        <Footer />
      </>
    );
  }
  
  export default Faq;

import React, { useState } from 'react';
import Layout from '../Layout';
import Slider from '../Slider';
import galleryPic from './pictures/pic5.png'; 

function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsList = [
    { id: 1, title: "BURNA BOY ANNOUNCED AS HEADLINER FOR SUNNY HILL FESTIVAL" },
  ];

  const handleNewsClick = (id) => {
    setSelectedNews(selectedNews === id ? null : id);
  };

  return (
    <Layout pictureSrc={galleryPic}>
      <Slider />
      <section>
        <div>
          {newsList.map((news) => (
            <div key={news.id} className="mb-0">
              <button
                className={`text-left w-full bg-white text-gray-500 font-bold font-mono py-4 px-6 rounded-lg text-xl relative focus:outline-none transition-colors duration-300 hover:bg-green-200 ${selectedNews === news.id ? 'bg-green-100' : ''}`}
                onClick={() => handleNewsClick(news.id)}
              >
                {news.title}
              </button>
              {selectedNews === news.id && (
                <div className="bg-white text-black font-mono border-l border-r border-b border-green-500 py-3 px-4 text-lg">
                  This is the detailed news content...
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default News;

'use client';

import React, { useRef } from 'react';

const SponsorSection = () => {
  const scrollRef = useRef(null);

  const handleMouseEnter = () => {
    if (scrollRef.current) {
      (scrollRef.current as HTMLElement).style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      (scrollRef.current as HTMLElement).style.animationPlayState = 'running';
    }
  };

  const sponsors = [
    '/himakom.png',
    '/himakom.png',
    '/himakom.png',
    '/himakom.png',
    '/himakom.png',
  ];

  return (
    <section className="bg-[#fff] p-6">
      <div className="container mx-auto flex flex-col items-center justify-center p-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 text-center">
            Sponsor
          </h1>
        </div>
        <div className="bg-[#eee] p-3 mt-8 w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex items-center justify-start space-x-6 animate-scroll group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {sponsors.concat(sponsors).map((sponsor, index) => (
              <img
                key={index}
                src={sponsor} 
                alt={`Sponsor ${index + 1}`}
                className="h-20 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;

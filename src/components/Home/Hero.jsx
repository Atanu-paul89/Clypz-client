import React from 'react';
import { Carousel } from 'flowbite-react';

const Hero = () => {
  const posters = [
    "https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg", // Wonder Woman
    "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg", // Interstellar
    "https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg", // Inception
    "https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", // The Matrix
  ];

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Carousel */}
      <Carousel slideInterval={4000} className="absolute inset-0 z-0">
        {posters.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`poster-${index}`}
            className="h-full w-full object-cover"
          />
        ))}
      </Carousel>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide mb-4">
            Only the Greatest. Ever.
          </h1>
          <p className="text-lg md:text-xl font-light mb-6">
            Discover legendary films. Request your favorites. Download with ease.
          </p>
          <button className="px-6 py-2 bg-[#898AC4] dark:bg-[#B5A8D5] text-white font-semibold rounded hover:opacity-90 transition">
            Explore Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

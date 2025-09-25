import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const posters = [
    "https://static0.colliderimages.com/wordpress/wp-content/uploads/2021/07/the-Shawshank-Redemption-movie-lede.jpg?w=1200&h=675&fit=crop", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHZC9l1PmawD0oY7uFG0uQnIWn0FIhxamsA&s", 
    "https://wallpapercat.com/w/full/b/4/3/79715-2560x1707-desktop-hd-green-book-background-photo.jpg", 
    "https://coldfeet-space.nyc3.cdn.digitaloceanspaces.com/wsb/2018/06/Forrest-Gump-3.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF93__uLt8YNcZypqQ7uUaqiC3SiadbsU2OA&s",
    "https://spaces.filmstories.co.uk/uploads/2020/10/the-godfather.jpg",
    

];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % posters.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[90vh]  max-w-300 mx-auto my-5 rounded-2xl overflow-hidden">
            {/* Background Slideshow */}
            {posters.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`poster-${index}`}
                    className={`absolute rounded-2xl inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}

            {/* Dramatic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10"></div>

            {/* Centered Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide text-white mb-4">
                    Only the Greatest. Ever.
                </h1>
                <p className="text-lg md:text-xl text-white/80 font-base mb-6">
                    Discover legendary films. Request your favorites. Download with ease.
                </p>
                <Link className="px-6 py-2 rounded font-semibold transition-colors duration-300
          bg-[#898AC4] cursor-pointer hover:bg-[#A2AADB] text-white dark:bg-[#B5A8D5] dark:hover:bg-[#7A73D1]">
                    Explore Movies
                </Link>
            </div>
        </div>
    );
};

export default Hero;

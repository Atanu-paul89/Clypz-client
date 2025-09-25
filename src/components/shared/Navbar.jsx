import React, { useEffect, useState } from 'react';
import { BsCameraReels } from 'react-icons/bs';
import { FaMoon, FaSun } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
import { GoSignIn } from 'react-icons/go';
import { IoCreateOutline, IoGitPullRequestOutline, IoHomeOutline, IoMailUnreadOutline } from 'react-icons/io5';
import { PiFilmReel } from 'react-icons/pi';
import { RiMenu2Fill } from 'react-icons/ri';
import { RxAvatar } from 'react-icons/rx';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.classList.remove("dark");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        }
        setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.classList.remove("dark");
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        }
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <div className={`navbar px-2 md:px-4 py-2 shadow-md transition-all duration-300
            `}>

            <div className="navbar-start">
                <div className="drawer z-20">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="cursor-pointer drawer-button text-xl">
                            <RiMenu2Fill className='dark:text-[#FFF2E0]' />
                        </label>
                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer" className="drawer-overlay"></label>
                        <ul className={`menu min-h-full w-80 p-4  font-semibold space-y-5 text-md  md:space-y-5
                            ${theme === "dark" ? "bg-[#211C84] text-[#FFF2E0]" : "bg-[#FFF2E0] text-[#898AC4]"}`}>
                            <NavLink className="flex items-center gap-3" to="/"><IoHomeOutline className='' size={22} />Home</NavLink>
                            <NavLink className="flex items-center gap-3" to="/movies"><PiFilmReel className='' size={22} />Movies</NavLink>
                            <NavLink className="flex items-center gap-3" to="/request"><IoGitPullRequestOutline className='' size={22} />Request</NavLink>
                            <NavLink className="flex items-center gap-3" to="/contact"><IoMailUnreadOutline className='' size={22} />Contact Us</NavLink>
                            <NavLink className="flex items-center gap-3" to="/contact"><GoSignIn className='' size={22} />Sign In</NavLink>
                            <NavLink className="flex items-center gap-3" to="/contact"><IoCreateOutline className='' size={22} />Register</NavLink>
                            <NavLink className="flex items-center gap-3" to="/contact"><RxAvatar className='' size={22} />My Profile</NavLink>
                            <NavLink className="flex items-center gap-3" to="/contact"><GiSelfLove className='' size={22} />Wishlist</NavLink>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="navbar-center">
                <NavLink to="/" className="font-extrabold text-2xl flex items-center dark:text-[#FFF2E0] gap-1 font-serif tracking-wide">
                    CLY<BsCameraReels className="text-xl hover:rotate-12 transition-transform duration-300" />PZ
                </NavLink>
            </div>

            <div className="navbar-end">
                <button
                    aria-label="Toggle theme"
                    className="btn bg-transparent shadow-none border-none text-xl transition-colors duration-300"
                    onClick={toggleTheme}
                >
                    {theme === "dark" ? <FaSun className='text-[#FFF2E0] ' /> : <FaMoon className='text-blue-800 ' />}
                </button>
            </div>
        </div>
    );
};

export default Navbar;

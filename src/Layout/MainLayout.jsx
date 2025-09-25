import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[#FFF2E0] dark:bg-[#211C84] text-[#211C84] dark:text-[#B5A8D5] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-1 md:px-4">
                <Navbar />
                <div className='min-h-screen'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;

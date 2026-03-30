import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import ReadySection from './ReadySection/ReadySection';

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar">
                <div className="navbar-start">
                    <div>
                        
                        <span className='bg-gradient-to-r from-[#4f39f6]  to-[#124de4] bg-clip-text text-transparent  font-bold text-4xl'>DigiTools</span>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-2 px-1 text-lg">
                        <li><a className='bg-gradient-to-t from-[#4f39f6] to-[#124de4] bg-clip-text text-transparent font-semibold text-xl'>Products</a></li>
                        <li><a className='bg-gradient-to-l from-[#124de4] to-[#1c0368] bg-clip-text text-transparent font-semibold text-xl'>Features</a></li>
                        <li><a className='bg-gradient-to-l from-[#124de4] to-[#1c0368] bg-clip-text text-transparent font-semibold text-xl'>Pricing</a></li>
                        <li><a className='bg-gradient-to-l from-[#124de4] to-[#1c0368] bg-clip-text text-transparent font-semibold text-xl'>Testimonials</a></li>
                        <li><a className='bg-gradient-to-l from-[#124de4] to-[#1c0368] bg-clip-text text-transparent font-semibold text-xl'>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <div className='flex items-center gap-2'>
                      <p className='text-4xl'><CiShoppingCart /></p>
                       <span  className='bg-gradient-to-l from-[#124de4] to-[#1c0368] bg-clip-text text-transparent font-semibold text-xl'>Login</span> 
                    
                    </div>
                    <a className="btn bg-gradient-to-r from-[#4f39f6] to-[#800cb9] rounded-full text-white animate-pulse">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
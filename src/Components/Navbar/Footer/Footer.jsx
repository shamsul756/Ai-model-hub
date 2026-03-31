import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (

        <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-6">

                            <h2 className="text-3xl font-bold tracking-tighter text-white">
                                DigiTools
                            </h2>
                        </div>

                        <p className="text-zinc-400 text-lg max-w-md">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>


                    </div>
                    

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Templates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>
<div className='flex gap-2 '>
                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Resources </h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Help
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Contract
                                </a>
                            </li>

                        </ul>
                      
                     
                    
                    </div>
                     {/* social icon  */}
                      <div className='px-1 ml-[45px]'>
                       <p className='text-white font-semi-bold text-xl'> Social Links </p>
                       <div className='list-none flex gap-3 mx-auto'>
                       <li className='text-white py-4 text-2xl hover:text-gray-600'><BsFacebook/></li>
                       <li className='text-white py-4 text-2xl hover:text-gray-600'><FaXTwitter/></li>
                       <li className='text-white py-4 text-2xl hover:text-gray-600'><FaInstagramSquare/></li>
                       </div>
                      </div>
                      </div>
                </div>
                
           

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                    <div>© {new Date().getFullYear()} Digitools. All rights reserved..</div>

                    <div className="flex gap-6">
                        <li className='list-none'>
                            <a href="#" className="hover:text-red-400 transition">
                                Privacy Policy
                            </a>
                        </li>
                        <li className='list-none'>
                            <a href="#" className="hover:text-red-400 transition">
                                Terms of service
                            </a>
                        </li> <li className='list-none'>
                            <a href="#" className="hover:text-red-400 transition">
                                Cookies
                            </a>
                        </li>
                        
                    </div>
                    
                </div>
            </div>
        </footer>


    );
};

export default Footer;
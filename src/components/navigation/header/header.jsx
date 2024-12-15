import '../../../index.css';
import samarLogo from '../../../assets/logo/favicon.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='fixed w-screen h-[110px] px-6 md:px-28 bg-black bg-opacity-50 backdrop-blur-lg transition-all duration-300 flex justify-between items-center border-b border-white border-opacity-20 z-50'>
            {/* Left Section */}
            <div className='flex items-center gap-4 md:gap-6'>
                <img src={samarLogo} alt="Samar Logo" width="50px" height="50px" />
                <h1 className='text-lg text-white'>|</h1>
                <NavLink className='font-vermin text-2xl md:text-3xl text-white cursor-pointer' to="/">SAMAR</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white focus:outline-none"
                >
                    {/* Hamburger Icon */}
                    {isMenuOpen ? (
                        <span>&#x2715;</span> // Close Icon (X)
                    ) : (
                        <span>&#9776;</span> // Hamburger Icon (☰)
                    )}
                </button>
            </div>

            {/* Navigation Links */}
            <nav
                className={`absolute md:static top-[110px] left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row gap-4 md:gap-0 items-center transition-transform duration-300 ${
                    isMenuOpen ? 'translate-y-0' : '-translate-y-[200%] md:translate-y-0'
                }`}
            >
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-4 md:px-8 py-2 md:py-3 hover:text-rose-400 font-crossFly text-xs tracking-widest transition-all ease-in-out ${
                            isActive ? 'text-rose-200' : 'text-white'
                        }`
                    }
                >
                    HOME
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `px-4 md:px-8 py-2 md:py-3 hover:text-rose-400 font-crossFly text-xs tracking-widest transition-all ease-in-out ${
                            isActive ? 'text-rose-200' : 'text-white'
                        }`
                    }
                >
                    ABOUT
                </NavLink>
                <NavLink
                    to="/merchandise"
                    className={({ isActive }) =>
                        `px-4 md:px-8 py-2 md:py-3 hover:text-rose-400 font-crossFly text-xs tracking-widest transition-all ease-in-out ${
                            isActive ? 'text-rose-200' : 'text-white'
                        }`
                    }
                >
                    MERCHANDISE
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `px-4 md:px-8 py-2 md:py-3 hover:text-rose-400 font-crossFly text-xs tracking-widest transition-all ease-in-out ${
                            isActive ? 'text-rose-200' : 'text-white'
                        }`
                    }
                >
                    CONTACT US
                </NavLink>
            </nav>

            {/* Play Button */}
            <button className='hidden md:block border-2 px-8 py-3 border-rose-200 bg-rose-500 text-white italic font-crossFly rounded-tl-3xl rounded-br-3xl hover:rounded-lg hover:text-white hover:scale-[.97] transition-all ease-in-out'>
                PLAY
            </button>
        </header>
    );
}

export default Header;

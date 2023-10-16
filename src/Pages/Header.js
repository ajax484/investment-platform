import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Vesta } from '../Assets/img';
import { HamburgerMenu } from '../Assets/Icons';

function NavbarLink(props) {
    return (
        <NavLink {...props} className={({ isActive }) => { return isActive ? 'text-white' : '' }}>
            {props.children}
        </NavLink>
    )
}

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    window.addEventListener('scroll', () => window.scrollY >= 68 ? setScrolled(true) : setScrolled(false))

    return (
        <header className={`text-white w-full body-font fixed top-0 z-50 transition-colors duration-[600ms] ${scrolled ? 'bg-vestaPurple-1' : "bg-[transparent]"}`}>
            <div className="mx-auto flex flex-wrap py-1.5 px-2 md:px-5 flex-col md:flex-row items-center">
                <div className="w-full md:w-fit mb-2 md:mb-0 pr-2 flex justify-between items-center">
                    <NavLink to="/" aria-label="logo">
                        <img src={Vesta} alt="" className='h-14' />
                    </NavLink>

                    <button
                        onClick={
                            () => {
                                setOpen((prevOpen => !prevOpen));
                                if (!scrolled) setScrolled((prevScrolled => !prevScrolled));
                            }
                        }
                        aria-label="Open Menu"
                    >
                        <HamburgerMenu className="md:hidden block h-8" />
                    </button>
                </div>

                <nav
                    className={`${!open ? 'hidden md:flex' : 'flex'} lg:text-lg transition-opacity duration-[600ms] md:ml-auto flex-wrap flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-10 text-gray-300`}
                >
                    <NavbarLink to="/">
                        Home
                    </NavbarLink>

                    <NavbarLink to="/test1">
                        Agent
                    </NavbarLink>

                    <NavbarLink to="/test2">
                        Services
                    </NavbarLink>

                    <NavbarLink to="/test3">
                        Properties
                    </NavbarLink>

                    <NavbarLink to="/test4">
                        Blog
                    </NavbarLink>

                    <NavbarLink to="/test5">
                        About
                    </NavbarLink>

                    <NavbarLink to="/test6">
                        Contact
                    </NavbarLink>

                </nav>
            </div>
        </header >
    )
}

import { Link, NavLink, useLocation } from "react-router-dom";
import { svgs } from '../assets/svgs';
import logo from './../assets/imgs/fraiman-logo.png'
import React, { useRef, useState } from 'react';
import { useBlur, useGlobalState } from '../hooks';

const pages = [
   { name: 'home', link: '/' },
   { name: 'about', link: 'about' },
   { name: 'services', link: 'services' },
   { name: 'resources', link: 'resources' },
   { name: 'contact', link: 'contact' },
];



export const NavBar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [isUserProfileOpen, setIsUserProfileOpen] = useState(false)
   const { search, pathname } = useLocation()
   const { loggedInUser } = useGlobalState()
   const userProfileRef = useBlur(() => setIsUserProfileOpen(false))

   return (
      <div className='nav-bar'>


         <section className='logo-section' >
            <Link to='/'>
               <img src={logo} alt="" />
            </Link>
         </section>


         <section onClick={() => setIsMenuOpen(prev => !prev)} className={isMenuOpen ? 'nav open' : 'nav'}>
            {
               pages.map(page =>
                  <NavLink key={page.link} to={pathname === page.link ? page.link + search : page.link}>{page.name}</NavLink>
               )
            }
         </section>

         <section className='hamburger-section'>
            <button onClick={() => setIsMenuOpen(prev => !prev)}>
               {svgs.hamburger}
            </button>
         </section>

      </div >
   )
}







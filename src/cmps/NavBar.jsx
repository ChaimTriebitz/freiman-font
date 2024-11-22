import { Link, NavLink, useLocation } from "react-router-dom";
import { svgs } from '../assets/svgs';

import { useState } from 'react';
import { imgs } from '../assets/imgs';

const pages = [
   { name: 'home', link: '/' },
   { name: 'about', link: 'about' },
   { name: 'services', link: 'services' },
   { name: 'resources', link: 'resources' },
   // { name: 'contact', link: 'contact' },
];



export const NavBar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const { search, pathname } = useLocation()

   return (
      <nav className='nav-bar'>


         <section className='logo-section' >
            <Link to='/'>
               <img src={imgs.logo} alt="" />
            </Link>
         </section>


         <section onClick={() => setIsMenuOpen(prev => !prev)} className={isMenuOpen ? 'nav open' : 'nav'}>
            {
               pages.map(page =>
                  <NavLink key={page.link} to={pathname === page.link ? page.link + search : page.link}>{page.name}</NavLink>
               )
            }
         </section>

            <button className={isMenuOpen ? 'hamburger open' : 'hamburger'} onClick={() => setIsMenuOpen(prev => !prev)}>
               {svgs.hamburger}
            </button>

      </nav >
   )
}







import React, { useState } from 'react';
import { NavbarType } from '../types/Navbar';
import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler,
} from 'mdb-react-ui-kit';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import CustomLink from './CustomLink';

const Navbar: React.FC<NavbarType> = ({ logoSrc, links }) => {
  const [openNav, setOpenNav] = useState(true);

  return (
    <MDBNavbar expand='lg' light bgColor='light' fixed='top' className='px-5'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img src={logoSrc} height='30' alt='brand logo' loading='lazy' />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            {links.map((link, index) => (
              <MDBNavbarItem key={index} className='linkCursor'>
                {link.isScroll ? (
                  <ScrollLink
                    to={link.href.replace('#', '')} // react-scroll requires just the id name
                    smooth={true}
                    offset={-70} // Adjusts for navbar height if needed
                    duration={500}
                    className='nav-link'
                  >
                    {link.label}
                  </ScrollLink>
                ) : (
                  <a href={link.href} className='nav-link'>
                    {link.label}
                  </a>
                )}
              </MDBNavbarItem>
            ))}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;

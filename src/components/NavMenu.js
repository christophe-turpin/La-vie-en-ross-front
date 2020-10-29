import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import './nav.css';
import resumeData from '../assets/resumeData';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const [navbar, setNavbar] = useState(false)
	const toggle = () => setIsOpen(!isOpen);

	const changeBackground = () => {
		window.scrollY >= 80 ?
		setNavbar(true) : setNavbar(false)
	}

	window.addEventListener('scroll', changeBackground)

	return (
		<Navbar className={navbar ? "navbar active" : "navbar"} expand="md">
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					<NavItem>
						<NavLink to='/' exact activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#about">A propos</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to='/mariage' activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#competences">Mariage</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to='/evenementiel' activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#portfolio">Evènementiel</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to='/contact' activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#contact">Contact</NavLink>
					</NavItem>
					{resumeData.socialLinks && resumeData.socialLinks.map((item) => 
						<NavItem>
							<a className="navbar__link" target="blank" href={item.url} key={item.name}><i className={item.className}/></a>
						</NavItem>
					)}
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default NavMenu;

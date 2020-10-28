import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import './nav.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resumeData from '../assets/resumeData';
import { Link } from 'react-router-dom';

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
						<Link to='/' className="nav-link active" offset='100' href="#about">A propos</Link>
					</NavItem>
					<NavItem>
						<Link to='/mariage' className="nav-link active" offset='100' href="#competences">Mariage</Link>
					</NavItem>
					<NavItem>
						<Link to='/evenementiel' className="nav-link active" offset='100' href="#portfolio">Evènementiel</Link>
					</NavItem>
					<NavItem>
						<Link to='/contact' className="nav-link active" offset='100' href="#contact">Contact</Link>
					</NavItem>
					{resumeData.socialLinks && resumeData.socialLinks.map((item) => 
						<NavItem>
							<a className="nav-link active" target="blank" href={item.url} key={item.name}><i className={item.className}/></a>
						</NavItem>
					)}
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default NavMenu;

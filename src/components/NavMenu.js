import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './nav.css';
import resumeData from '../assets/resumeData';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const [ navbar, setNavbar ] = useState(false)
	const [mariageDropdownOpen, setMariageDropdownOpen] = useState(false)
	const [eventDropdownOpen, setEventDropdownOpen] = useState(false)
	
	const toggle = () => setIsOpen(!isOpen);

	const changeBackground = () => {
		window.scrollY >= 80 ?
		setNavbar(true) : setNavbar(false)
	}

	window.addEventListener('scroll', changeBackground)

	return (
		<Navbar className={navbar ? "navbar active" : "navbar"} expand="md">
			<NavbarToggler id='NBToggler' onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					<NavItem>
						<NavLink onClick={toggle} to='/' exact activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#about">A propos</NavLink>
					</NavItem>
					<Dropdown 
					onMouseEnter={()=> setMariageDropdownOpen(true)}
					onMouseLeave={()=> setMariageDropdownOpen(false)}
					isOpen={mariageDropdownOpen}
					toggle={()=>setMariageDropdownOpen(!mariageDropdownOpen)}
					nav 
					inNavbar
					>
						<DropdownToggle nav caret>
							<NavLink onClick={toggle} to='/mariage' exact activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#about">Mariage</NavLink>
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>
								<NavLink onClick={toggle} to='/mariage/themes' exact activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#about">Thèmes</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink onClick={toggle} to='/mariage/témoignages' exact activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#about">Témoignages</NavLink>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<NavItem>
						<NavLink onClick={toggle} to='/brunch' activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#competences">Brunch</NavLink>
					</NavItem>
					<Dropdown 
					onMouseEnter={()=> setEventDropdownOpen(true)}
					onMouseLeave={()=> setEventDropdownOpen(false)}
					isOpen={eventDropdownOpen}
					toggle={()=>setEventDropdownOpen(!mariageDropdownOpen)}
					nav 
					inNavbar
					>
						<DropdownToggle nav caret>
							<NavLink to='/evenementiel/anniversaire' exact activeClassName="navbar__link--active" className="navbar__link" offset='100' >Evenementiel</NavLink>
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>
								<NavLink onClick={toggle} to='/evenementiel/anniversaire' exact activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#about">Anniversaire</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink onClick={toggle} to='/evenementiel/evjfevg' exact activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#about">EVJF / EVG</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink onClick={toggle} to='/evenementiel/genderreveal' exact activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#about">Gender Reveal</NavLink>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<NavItem>
						<NavLink onClick={toggle} to='/professionnel' activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#competences">Professionnel</NavLink>
					</NavItem>
					<NavItem>
						<NavLink onClick={toggle} to='/contact' activeClassName="navbar__link--active" className="navbar__link" offset='100' href="#contact">Contact</NavLink>
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

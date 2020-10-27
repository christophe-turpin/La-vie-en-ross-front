import React from 'react';
import NavMenu from './NavMenu';
import AnimBorder from './AnimBorder';
import About from './About';
import Portfolio from './Portfolio';
import Competences from './Competences';
import Contact from './Contact';
import Footer from './Footer';

const Landing = (props) => {
	return (
		<div id="home">
			<NavMenu />
            <AnimBorder />
            <About />
            <Competences />
            <Portfolio />
            <Contact />
            <Footer />
		</div>
	);
};

export default Landing;

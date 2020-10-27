import React from 'react';
import './scroll.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const ScrollButton = () => {
	return (
		<div className="demo" id="section10">
            <AnchorLink offset='100' href="#about"><span></span></AnchorLink>
        </div>	
	);
};

export default ScrollButton;

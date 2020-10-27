import React from 'react';
import { Icon } from 'semantic-ui-react' 
import './footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
	return (
		<div className="footer">
			<div className="scrollup">
				<AnchorLink href="#home">
					<Icon className="arrowleft" name="chevron circle up" size="big" />
				</AnchorLink>
			</div>
			<div className="footerLogo">
				<a className="medialogo" href="https://www.linkedin.com/in/kenny-phiri/">
					<Icon name="linkedin" size='large' />
				</a>
				<a className="medialogo" href="https://github.com/kphiri84">
					<Icon name="github" size="large" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
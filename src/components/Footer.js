import React from 'react';
import { Icon } from 'semantic-ui-react';
import './footer.css';
import chris from '../assets/images/logo_ct_rondnoir_blanc.png';
import ken from '../assets/images/logoK.png';

const Footer = () => {
	return (
		<div className="footer">
			<h4 className="devItem">Ce site a été crée par :</h4>
			<div className="devContent">
				<p className="devItem">Christophe :</p>
				<a href="https://cv-christophe-turpin.netlify.app/" target="blank">
					<img src={chris} className="logodev" alt="logo christophe" />
				</a>
				<p className="devItem">Kenny :</p>
				<a href="https://phiri-kenny.netlify.app/" target="blank">
					<img src={ken} className="logodev" alt="logo kenny" />
				</a>
			</div>
		</div>
	);
};

export default Footer;

import React from 'react';
import { Icon } from 'semantic-ui-react';
import './footer.css';
import chris from '../assets/images/logo_ct_rondnoir_blanc.png'
import ken from '../assets/images/logoK.png'

const Footer = () => {
	return (
		<div className="footer">
			<div className="devContent">
				<h4 className="devItem">Ce site a été crée par :</h4>
				<ul>
					<li>
						<h5 className="devItem">
							Christophe :<a href="https://cv-christophe-turpin.netlify.app/" target="blank">
								<img src={chris} className="logodev" alt="logo christophe" />
							</a>
						</h5>
					</li>
					<li>
						<h5 className="devItem">
							Kenny :<a href="https://phiri-kenny.netlify.app/" target="blank">
								<img src={ken} className="logodev" alt="logo kenny" />
							</a>
						</h5>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;

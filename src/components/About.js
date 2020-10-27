import React from 'react';
import './about.css';
import Gsap from './Gsap';
import { Col } from 'reactstrap';
import kenny from '../assets/kenny.jpg';

const About = () => {
	return (
		<div className="about" id="about">
			<div className="columns">
				<Col md="8">
					<h1 className="presentation">PRESENTATION</h1>
					<p className="name">KENNY PHIRI - Développeur</p>
					<p className="me">
						Développeur web fullstack autodidacte de 28 ans basé sur Avignon, j'ai suivi une formation de
						développeur web à la Wild Code School. <br />
						Le développement web est une de mes passions que je cultive au quotidien. <br />
						Je suis passionné par l'UX-UI design, les créations web, la manipulation de bases de données et toutes les dernières technologies.{' '}
						<br />
						J'aime expérimenter, créer et relever de nouveaux défis. <br />
						Si vous êtes intéressé par mon profil ou que vous voulez en savoir plus sur moi, n'hésitez pas à
						me contacter.
					</p>
					<Gsap />
				</Col>
				<Col className="image" md="4">
					<img className="kennys" src={kenny} alt="" />
				</Col>
			</div>
		</div>
	);
};

export default About;

import React from 'react';
import './about.css';
import { Col, Row } from 'reactstrap';
import resumeData from '../assets/resumeData';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className="about">
			<div className="columns">
				<Col className="image" md="4">
					<img className="Alex" src={resumeData.aboutPic} alt="alex" />
				</Col>
				<Col md="8">
					<h1 className="presentation">{resumeData.name} - {resumeData.role}</h1>
					<h3 className="soutitle">{resumeData.aboutTitle}</h3>
					{ resumeData.aboutText && resumeData.aboutText.map(item => <p className="me" key={item}>{item}</p>
					)}
					<p className='me'>{resumeData.aboutFinal}</p>
					<Row className='aboutRow'>
						<h4 className='aboutCategory'>Certifications :</h4>
						<p>liens vers les diplomes</p>
					</Row>
					<Row className='aboutRow'>
						<h4 className='aboutCategory'>Prestations :</h4>
						<Link className='eventCarousel' to='/mariage'><button className="LinkButton">Mariage</button></Link>
						<Link className='eventCarousel' to='/evenementiel'><button className="LinkButton">Evenementiel</button></Link>
					</Row>
					<Link to="/contact">
						<div className="evenCarousel">
						<button className="contactButton">Contactez-nous</button>
						</div>
					</Link>
				</Col>
			</div>
		</div>
	);
};

export default About;

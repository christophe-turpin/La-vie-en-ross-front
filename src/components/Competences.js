import React from 'react';
import './competences.css';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.svg';
import node from '../assets/node.png';
import mysql from '../assets/mysql.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import illustrator from '../assets/illustrator.png';
import scrum from '../assets/scrum.png';
import wordpress from '../assets/wordpress.png';
import bootstrap from '../assets/boot.png';

const Competences = () => {
	return (
		<div className="comp" id="competences">
			<h1 className="compTitle">COMPETENCES</h1>
			<div className="firstRow">
				<div className="cards">
					<img className="logos" src={html} alt="logo html" />
					<p className="compName">HTML</p>
				</div>
				<div className="cards">
					<img className="logos" src={css} alt="logo css" />
					<p className="compName">CSS</p>
				</div>
				<div className="cards">
					<img className="logos" src={bootstrap} alt="logo bootstrap" />
					<p className="compName">BOOTSTRAP</p>
				</div>
				<div className="cards">
					<img className="logos" src={js} alt="logo js" />
					<p className="compName">JAVASCRIPT</p>
				</div>
			</div>
			<div className="secondRow">
				<div className="cards">
					<img className="logos" src={react} alt="logo react" />
					<p className="compName">REACTJS</p>
				</div>
				<div className="cards">
					<img className="logos logoNode" src={node} alt="logo node" />
					<p className="compName">NODEJS</p>
				</div>
				<div className="cards">
					<img className="logos logoMysql" src={mysql} alt="logo mysql" />
					<p className="compName">MYSQL</p>
				</div>
				<div className="cards">
					<img className="logos" src={wordpress} alt="logo wordpress" />
					<p className="compName">WORDPRESS</p>
				</div>
			</div>
			<div className="thirdRow">
				<div className="cards">
					<img className="logos" src={git} alt="logo git" />
					<p className="compName">GIT</p>
				</div>
				<div className="cards">
					<img className="logos" src={github} alt="logo github" />
					<p className="compName">GITHUB</p>
				</div>
				<div className="cards">
					<img className="logos" src={illustrator} alt="logo illustrator" />
					<p className="compName">ILLUSTRATOR</p>
				</div>
				<div className="cards">
					<img className="logos logoScrum" src={scrum} alt="logo scrum" />
					<p className="compName">METHODE AGILE</p>
				</div>
			</div>
		</div>
	);
};

export default Competences;

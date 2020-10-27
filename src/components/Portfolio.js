import React from 'react';
import './portfolio.css';
import storpe from '../assets/storpe.png'

const Portfolio = () => {
	return ( 
		<div id="portfolio">
			<div className="title">
			<h1 className="portfolio">MES REALISATIONS</h1>
			</div>
			<div className="container">
				<div className="box">
					<div className="imgBx">
						<img className="images" src="https://zupimages.net/up/20/21/k9fl.png" alt="tarantino"/>
					</div>
					<div className="contentBx">
						<h2>SITE TARANTINO</h2>
						<p>Développement d'un site web sur le thème de Quentin Tarantino</p>
						<p>HTML/CSS/JavaScript</p>
						<a href="https://site-tarantino.netlify.app/ ">Lien</a>
					</div>
				</div>
				<div className="box">
					<div className="imgBx">
						<img className="images" src="https://zupimages.net/up/20/22/naix.png" alt="geek trotter"/>
					</div>
					<div className="contentBx">
						<h2>GEEK TROTTER</h2>
						<p>Développement d'une application web, basé sur l'API Windy, sur le thème de voyager depuis son canapé</p>
						<p>JavaScript/ReactJS</p>
						<a href="https://geek-trotter.netlify.app/">Lien</a>
					</div>
				</div>
				<div className="box">
					<div className="imgBx">
						<img className="images" src="https://zupimages.net/up/20/22/x1jy.png" alt="memory"/>
					</div>
					<div className="contentBx">
						<h2>MEMORY HORROR GAME</h2>
						<p>Développement d'une application web, basé sur le thème des films d'horreurs</p>
						<p>JavaScript/ReactJS</p>
						<a href="https://memory-horror-game.netlify.app/">Lien</a>
					</div>
				</div>
				<div className="box">
					<div className="imgBx">
						<img className="images" src="https://zupimages.net/up/20/37/klq2.png" alt="marche rose" />
					</div>
					<div className="contentBx">
						<h2>MARCHE ROSE COMBOURG</h2>
						<p>Création d'un site à l'occasion de la marche rose à Combourg</p>
						<p>JavaScript/ReactJS</p>
						<a href="https://marche-rose-combourg2020.netlify.app/">Lien</a>
					</div>
				</div>
				<div className="box">
					<div className="imgBx">
						<img className="images" src="https://zupimages.net/up/20/37/bkoo.png" alt="chat app"/>
					</div>
					<div className="contentBx">
						<h2>CHAT APP</h2>
						<p>Développement d'un chat en temps réel</p>
						<p>ReactJS/NodeJS/Express/Socket.io</p>
						<a href="https://kenny-chat.netlify.app/">Lien</a>
					</div>
				</div>
				<div className="box">
					<div className="imgBx">
						<img className="images" src="https://zupimages.net/up/20/37/f5mj.png" alt="wild circus"/>
					</div>
					<div className="contentBx">
						<h2>WILD CIRCUS</h2>
						<p>Développement d'un site sur le thème du cirque avec authentification et réservation en ligne</p>
						<p>ReactJS/NodeJS/Express/JWT/MySql/Sequelize</p>
						<a href="https://wild-circus-app.netlify.app/">Lien</a>
					</div>
				</div>
				<div className="box">
					<div className="imgBx">
						<img className="images" src={storpe} alt="storpe"/>
					</div>
					<div className="contentBx">
						<h2>STORPE</h2>
						<p>Développement d'un application de championnat de pronostics sportifs web et mobile</p>
						<p>ReactJS/NodeJS/Express/JWT/MySql/Sequelize</p>
						<a href="https://www.storpe.club/">Lien</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;

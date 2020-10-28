import React from 'react';
import './portfolio.css';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
const Portfolio = () => {
	return (
		<div className="evenementiel">
			<div>
				<h1 className="title">Anniversaires</h1>
				<div id="ct">
					<div class="corner " id="left_top" />
					<div class="corner" id="left_bottom" />
					<div class="corner" id="right_top" />
					<div class="corner" id="right_bottom" />
					<span>Mae West</span>
					<blockquote>
						<p>
							<i>&ldquo;On est jamais trop vieux pour rajeunir &rdquo; </i>
						</p>
					</blockquote>
				</div>
			</div>
			<div>
				<h1 className="title">EVJF/EVG</h1>
				<div id="ct">
					<div class="corner " id="left_top" />
					<div class="corner" id="left_bottom" />
					<div class="corner" id="right_top" />
					<div class="corner" id="right_bottom" />
					<span>Confidentielles</span>
					<blockquote>
						<p>
							<i>
								&ldquo;Souvent je me remémore les bons moments et je souris comme un(e) idiot(e) &rdquo;{' '}
							</i>
						</p>
					</blockquote>
				</div>
			</div>
			<p>
				EVJF - Août 2020 par Fanny : " Une organisatrice qui pense à tout pour rendre vos évènements aussi beaux
				que vous les aviez imaginés. Une confiance aveugle à cette jeune femme pétillante ! Merci d'avoir
				organisé le meilleur enterrement de vie de jeune fille, nous étions toutes ravies et cétait inoubliable
				!"
			</p>
			<div className="evenCarousel">
				<Carousel />
			</div>
			<p>
				EVJF - Août 2020 par Marion : " Un grand merci à toi Alex pour nous avoir soutenu et surtout encadrer
				pour l'enterrement de vie de jeune fille de Mélissa et surtout organiser un petit moment entre nous
				toutes comme on a voulu. Vivement la prochaine fois où l'on aura besoin de toi !"
			</p>
			<div className="evenCarousel">
				<Carousel />
			</div>
			<p>EVJF - Août 2020 par Marion : " Organisatrice au top, je recommande les yeux fermés ! "</p>
			<div className="evenCarousel">
				<Carousel />
			</div>
			<p>
				EVJF - 2020 par Sarah : "Alex est une personne pétillante, bienveillante et à l’écoute. Elle a su
				comprendre les envies de notre amie Meli et nos contraintes pour faire de ce moment un souvenir unique,
				qui restera dans nos têtes !"
			</p>
			<div className="evenCarousel">
				<Carousel />
			</div>
			<h1 className="title">ENTREPRISES</h1>
			<div id="ct">
				<div class="corner " id="left_top" />
				<div class="corner" id="left_bottom" />
				<div class="corner" id="right_top" />
				<div class="corner" id="right_bottom" />
				<span>Robert Lassus</span>
				<blockquote>
					<p>
						<i>&ldquo;Je travaille à être heureux c'est le plus beaux des métiers&rdquo; </i>
					</p>
				</blockquote>
			</div>
			<Link to="/contact">
                <div className="evenCarousel">
				<button className="contactButton">Contactez-nous</button>
                </div>
			</Link>
		</div>
	);
};

export default Portfolio;

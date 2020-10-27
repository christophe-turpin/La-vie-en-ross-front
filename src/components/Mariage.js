import React from 'react';
import './mariage.css';
import { Col } from 'reactstrap';

const Mariage = () => {
	return (
		<div className="mariage" id="mariage">
			<div className="columns">
				<Col md="8">
				{/* <blockquote>Quand on aime le jour de son mariage, on aime pour la vie!</blockquote>
                <cite>Jospeh Lallier</cite> */}
                    <div id="ct">
                    <div class="corner "id="left_top"></div>
                    <div class="corner" id="left_bottom"></div>
                    <div class="corner" id="right_top"></div>
                    <div class="corner" id="right_bottom"></div>
                    <span>Joseph Lallier</span>
                    <blockquote>
                        <p><i>&ldquo;Quand on aime le jour de son mariage on aime pour la vie ! &rdquo; </i></p>
                    </blockquote>
                    </div>
                    <p> Le Mariage est un passage de la vie auquel beaucoup de personnent aspirent.</p>
                    <p>Une journée unique, la vôtre, que vous devrier déguster et apprécier tout le long !</p>
                    <p>Photo</p>
                    <p>Bienvenue dans les mariages de la vie en Ross! </p>
                    <p>Je m'entoure des meilleures prestataiures, ceux s'accordant le plus possible au mariage de vos rêves, tel un menu accorde mets et vins</p>

                    <table>
                        {/* <caption>Prestations: </caption> */}

                        {/* <tr>
                            <th>Titre colonne 1</th>
                            <th>Titre colonne 2</th>
                        </tr> */}
                        <thead>Prestations:</thead>
                        <tr>
                            <td>Détendez vous on s'occupe de tout</td>
                            <td>Organisation de A à Z de votre mariage jusqu'au Jour-J</td>
                            <td>À partir de 2500€</td>
                        </tr>

                        <tr>
                            <td>À la carte </td>
                            <td>Besoin d'une aide complémentaire pour avancer jusqu'au Jour-J</td>
                            <td>À partir de 1200€</td>
                        </tr>
                        <tr>
                            <td>Only Jour-J</td>
                            <td>Répétition et coordination du Jour-J</td>
                            <td>À partir de 900€</td>
                        </tr>
</table>
<button>Obtenir un devis</button>


				</Col>
				<Col className="image" md="4">
				
				</Col>
			</div>
		</div>
	);
};

export default Mariage;

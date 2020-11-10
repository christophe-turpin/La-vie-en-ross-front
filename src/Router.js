import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navmenu from './components/NavMenu'
import AnimBorder from './components/AnimBorder'
import Contact from './components/Contact';
import Mariage from './components/Mariage';
import Birthday from './components/Birthday';
import EVJFEVG from './components/EVJFEVG';
import GenderReveal from './components/GenderReveal';
import MariageTemoignage from './components/MariageTemoignage';
import PagesBientotDispo from './components/PagesBientotDispo';
import About from './components/About'
import Footer from './components/Footer'
import { Container } from "reactstrap"
import MariageThemes from './components/MariageThemes';
import Brunch from './components/Brunch';

const Router = () => {
	return (
		<Container fluid='l' >
			<Navmenu/>
			<AnimBorder />
			<Switch>
				<Route exact path="/" component={About} />
				<Route exact path="/mariage" component={Mariage} />
				<Route path="/mariage/themes" component={MariageThemes} />
				<Route path="/mariage/témoignages" component={MariageTemoignage} />
				<Route path="/brunch" component={Brunch} />
				<Route path="/evenementiel/anniversaire" component={Birthday} />
				<Route path="/evenementiel/evjfevg" component={EVJFEVG} />
				<Route path="/evenementiel/genderreveal" component={GenderReveal} />
				<Route path="/professionnel" component={PagesBientotDispo} />
				<Route path="/contact" component={Contact} />
			</Switch>
			<Footer />
		</Container>
	);
};
export default Router;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navmenu from './components/NavMenu'
import AnimBorder from './components/AnimBorder'
import Contact from './components/Contact';
import Mariage from './components/Mariage';
import Portfolio from './components/Portfolio';
import About from './components/About'
import Footer from './components/Footer'
import { Container } from "reactstrap"

const Router = () => {
	return (
		<Container fluid='l' >
			<Navmenu/>
			<AnimBorder />
			<Switch>
				<Route exact path="/" component={About} />
				<Route path="/mariage" component={Mariage} />
				<Route path="/evenementiel" component={Portfolio} />
				<Route path="/contact" component={Contact} />
			</Switch>
			<Footer />
		</Container>
	);
};
export default Router;

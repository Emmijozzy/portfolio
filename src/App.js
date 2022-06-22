import React from 'react';
import { Hero, About, Footer, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.scss';

function App() {
	return (
		<div>
			<Hero />
			<Navbar />
			<Header />
			<About />
			<SpecialMenu />
			<Intro />
			<Footer />
		</div>
	);
}
export default App;

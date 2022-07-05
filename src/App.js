import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Hero, About, Footer, Portfolios, Contact } from './container';
// import AboutMe from './components/About/AboutMe';
// import Education from './components/About/Education';
// import Certificate from './components/About/Certificate';
// import Skills from './components/About/Skills';
import { Navbar } from './components';
import './App.scss';

function App() {
	const [menuMood, setMenuMood] = React.useState(false);
	const toggleMenuMood = () => {
		setMenuMood((prevMood) => !prevMood);
	};
	return (
		<Router basename={window.location.pathname || ''}>
			<div className="app">
				<Navbar toggleMenuMood={toggleMenuMood} toggleMenu={menuMood} />
				<Hero menuMood={menuMood} />
				<About menuMood={menuMood} />
				<Portfolios menuMood={menuMood} />
				<Contact menuMood={menuMood} />
				<Footer menuMood={menuMood} />
			</div>
		</Router>
	);
}
export default App;

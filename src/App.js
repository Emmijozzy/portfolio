import { animateScroll as scroll } from 'react-scroll';
import React, { useEffect, useState } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { BsArrowUp } from 'react-icons/bs';
import { Hero, About, Footer, Portfolios, Contact } from './container';
// import AboutMe from './components/About/AboutMe';
// import Education from './components/About/Education';
// import Certificate from './components/About/Certificate';
// import Skills from './components/About/Skills';
import { Navbar, MenuButton } from './components';
import './App.scss';

function App() {
	const [menuMood, setMenuMood] = useState(false);
	const [showButton, setShowButton] = useState(false);
	const toggleMenuMood = () => {
		console.log('clicked 1');
		setMenuMood((prevMood) => !prevMood);
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 300) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	const scrollToTop = function () {
		scroll.scrollToTop();
	};

	return (
		<Router basename={window.location.pathname || ''}>
			<div className="app">
				<Navbar toggleMenuMood={toggleMenuMood} toggleMenu={menuMood} />
				<MenuButton setMenuMood={setMenuMood} toggleMenu={menuMood} />
				<Hero menuMood={menuMood} />
				<About menuMood={menuMood} />
				<Portfolios menuMood={menuMood} />
				<Contact menuMood={menuMood} />
				<Footer menuMood={menuMood} />
				{showButton && (
					<button onClick={scrollToTop} className="back-to-top" type="button">
						<BsArrowUp />
					</button>
				)}
			</div>
		</Router>
	);
}
export default App;

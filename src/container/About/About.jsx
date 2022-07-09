import React from 'react';
// import profilePic from '../../assets/abou_pic.png';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
// import { Link, Outlet } from 'react-router-dom';
import MenuBlock from '../../components/MenuBlock/MenuBlock';
// import Skill from '../../components/Skill/Skill';
import AboutMe from '../../components/About/AboutMe';
import Certificate from '../../components/About/Certificate';
import Education from '../../components/About/Education';
import Skills from '../../components/About/Skills';
import './About.scss';

function About({ menuMood }) {
	const mood = menuMood ? 'menu__block menu__block-open' : 'menu__block';
	const { pathname } = useLocation();
	return (
		<div className="app__about">
			<MenuBlock mood={mood} />
			<div className="about">
				<h2 className="app__subhead">ABOUT ME</h2>
				<div className="about__board">
					<ul className="about__innerboard-left">
						<li className={`about__list active flex__center ${pathname === '/' ? 'active_link' : 'link'}`} >
							<Link to="/"> About me </Link>
						</li>
						<li className={`about__list active flex__center ${pathname === '/education' ? 'active_link' : 'link'}`}>
							<Link to="/education">Education</Link>	
						</li>
						<li className={`about__list active flex__center ${pathname === '/certificate' ? 'active_link' : 'link'}`}>
							<Link
								to="/certificate"
							>Certificate</Link>
						</li>
						<li className={`about__list active flex__center ${pathname === '/skills' ? 'active_link' : 'link'}`}>
							<Link to="/skills">Skills</Link>
						</li>
					</ul>
					<Routes>
						<Route path="/">
							<Route index element={<AboutMe />} />
							<Route path="education" element={<Education />} />
							<Route path="certificate" element={<Certificate />} />
							<Route path="skills" element={<Skills />} />
						</Route>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default About;

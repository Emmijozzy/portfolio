import React from 'react';
import './Portfolios.scss';
import Portfolio from '../../components/Portfolio/Portfolio';
import MenuBlock from '../../components/MenuBlock/MenuBlock';

export default function Portfolios({ menuMood }) {
	const mood = menuMood ? 'menu__block menu__block-open' : 'menu__block';
	return (
		<div className="portfolio">
			<MenuBlock mood={mood} />
			<div className="app__portfolio flex__center">
				<div className="port_subhead app__subhead">PORTFOLIO</div>
				<ul className="port__nav flex__center">
					<li>ALL</li>
					<li>UX/UI</li>
					<li>FRONT-END</li>
					<li>BACK-END</li>
					<li>FULL STACK</li>
				</ul>
				<div className="portfolio__container flex__center">
					<Portfolio />
					<Portfolio />
					<Portfolio />
					<Portfolio />
					<Portfolio />
					<Portfolio />
				</div>
			</div>
		</div>
	);
}

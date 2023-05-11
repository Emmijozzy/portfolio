import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Skill.scss';

function Skill({ name, rate }) {
	return (
		<div className="about__skill" animateIn="animate__bounceIn" duration={1}>
			<div className="skill__details">
				<h4 className="skill__name"> {name} </h4>
				<p className="rate">{rate}%</p>
			</div>
			<div className="out__reg">
				<ScrollAnimation className="in__reg" style={{ width: `${rate}%` }} animateIn="animate__slideInLeft" duration={1}>
					{' '}
				</ScrollAnimation>
			</div>
		</div>
	);
}

export default Skill;

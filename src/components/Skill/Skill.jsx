import React from 'react';
import './Skill.scss';

function Skill({ name, rate }) {
	return (
			<div className="about__skill">
				<div className="skill__details">
					<h4 className="skill__name"> {name} </h4>
					<p className="rate">{rate}%</p>
				</div>
				<div className="out__reg">
					<div className="in__reg" style={{ width: `${rate}%` }}>
						{' '}
					</div>
				</div>
			</div>
	);
}

export default Skill;

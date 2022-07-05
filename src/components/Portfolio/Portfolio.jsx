import React from 'react';
import './Portfolio.scss';
import portImg from '../../assets/port_image.png';

export default function Portfolio() {
	return (
		<div className="port__container">
			<div className="img-box">
				<img className="port__img" src={portImg} alt="img" />
			</div>
			<div className="port__name">User Profile card Template</div>
			<div className="port__btn">
				<button type="button" className="btn github">
					Github
				</button>
				<button type="button" className="btn live-demo">
					Live Demo
				</button>
			</div>
		</div>
	);
}

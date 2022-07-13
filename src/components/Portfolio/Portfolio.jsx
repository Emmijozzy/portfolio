import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Portfolio.scss';
import portImg from '../../assets/port_image.png';

export default function Portfolio() {
	return (
		<ScrollAnimation className="port__container" animateIn="animate__fadeInRight" duration={1}>
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
		</ScrollAnimation>
	);
}

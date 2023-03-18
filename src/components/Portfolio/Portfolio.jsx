import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Portfolio.scss';
// import portImg from '../../assets/port_image.png';

export default function Portfolio({ portfolioDetails }) {
	let portImg;
	let title;
	let githubLink;
	let demoLick;
	let stack;
	let figma;
	if (portfolioDetails) {
		portImg = portfolioDetails.portImg;
		title = portfolioDetails.title;
		githubLink = portfolioDetails.githubLink;
		demoLick = portfolioDetails.demoLink;
		stack = portfolioDetails.stack;
		figma = portfolioDetails.figma;
	}

	return (
		<ScrollAnimation className="port__container" animateIn="animate__fadeInRight" duration={1}>
			<div className="img-box">
				<img className="port__img" src={portImg} alt="img" />
			</div>
			<div className="port__name">
				{title}
				<span>{stack}</span>
			</div>
			<div className="port__btn">
				{githubLink && (<div className="btn github flex__center">
					<a href={githubLink}>Github</a>
				</div>)}
				{demoLick && (
					<div className="btn live-demo flex__center">
						<a href={demoLick}>{!figma ? "Live Demo" : "Link"}</a>
					</div>
				)}
			</div>
		</ScrollAnimation>
	);
}

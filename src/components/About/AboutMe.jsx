import React from 'react';
import { Link } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import profilePic from '../../assets/profile-pic2.png';

export default function AboutMe() {
	return (
		<div className="about__innerboard-right about-me">
			<div className="about__me">
				<div className="about__pic-board">
					<img src={profilePic} alt="profile pic" className="about__pic" />
				</div>
				<ScrollAnimation
					className="about-me__content"
					animateIn="animate__fadeInRight"
					delay={500}
					duration={1}
				>
					<p>
						Hi! I’m Joseph Ogunsuyi, and I’m a designer & developer who has passion for building
						clean web applications with intuitive functionality. I enjoy the process of turning
						ideas into reality using creative solutions. I’m always curious about learning new
						skills, tools, and concepts. In addition to working on various solo full stack projects,
						I have worked with creative teams, which involves daily stand-ups and communications,
						source control, and project management.
					</p>
				</ScrollAnimation>
			</div>
			<div className="about__action-btn">
				<button className="download btc" type="button">
					<a
						href="https://drive.google.com/file/d/1cb8mNHRv-ydWQkNLdvlXDOy2IffSxS_J/view?usp=share_link"
						type="button"
					>
						Download CV
					</a>
				</button>
				<button className="contact btc" type="button">
					<Link to="contact" smooth spy duration={1000}>
						Contact Me
					</Link>
				</button>
			</div>
		</div>
	);
}

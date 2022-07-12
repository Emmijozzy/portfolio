import React from 'react';
import profilePic from '../../assets/abou_pic.png';

export default function AboutMe() {
	return (
		<div className="about__innerboard-right about-me">
			<div className="about__me">
				<div className="about__pic-board">
					<img src={profilePic} alt="profile pic" className="about__pic" />
				</div>
				<div className="about-me__content">
					<p>
						Hi! I’m Joseph Ogunsuyi, and I’m a designer & developer who has passion for building clean
						web applications with intuitive functionality. I enjoy the process of turning ideas into
						reality using creative solutions. I’m always curious about learning new skills, tools, and
						concepts. In addition to working on various solo full stack projects, I have worked with
						creative teams, which involves daily stand-ups and communications, source control, and
						project management.
					</p>
				</div>
			</div>
			<div className="about__action-btn">
				<button className="download btc" type="button">
					Download CV
				</button>
				<button className="contact btc" type="button">
					Contact Me
				</button>
			</div>
		</div>
	);
}

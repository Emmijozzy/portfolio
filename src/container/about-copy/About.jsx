import React from 'react';
import profilePic from '../../assets/abou_pic.png';
import MenuBlock from '../../components/MenuBlock/MenuBlock';
import Skill from '../../components/Skill/Skill';
import './About.scss';

function About({ menuMood }) {
	const mood = menuMood ? 'menu__block menu__block-open' : 'menu__block';
	return (
		<div className="app__about flex__center .section__padding">
			<h2 className="app__subhead">ABOUT ME</h2>
			<div className="about">
				<MenuBlock mood={mood} />
				<div className="about__board">
					<ul className="about__innerboard-left">
						<li className="about__list active flex__center">About Me</li>
						<li className="about__list flex__center">Education</li>
						<li className="about__list flex__center">Certificate</li>
						<li className="about__list flex__center">Skill</li>
					</ul>
					<div className="about__innerboard-right about-me">
						<div className="about__pic-board">
							<img src={profilePic} alt="profile pic" className="about__pic" />
						</div>
						<div className="about-me__content">
							<p>
								Hi! I’m Joseph Ogunsuyi, and I’m a designer & developer who has passion for building
								clean web applications with intuitive functionality. I enjoy the process of turning
								ideas into reality using creative solutions. I’m always curious about learning new
								skills, tools, and concepts. In addition to working on various solo full stack
								projects, I have worked with creative teams, which involves daily stand-ups and
								communications, source control, and project management.
							</p>
						</div>
						<button className="download btc" type="button">
							Download CV
						</button>
						<button className="contact btc" type="button">
							Contact Me
						</button>
					</div>
					<div className="about__innerboard-right education">
						<table>
							<tr className="heading__row">
								<th>Degree</th>
								<th>Department</th>
								<th>Institution</th>
								<th>year</th>
							</tr>
							<div className="table__body">
								<tr>
									<td>SSCE</td>
									<td>Business Class</td>
									<td>St. Thomas Anglican High School</td>
									<td>2009-2014</td>
								</tr>
								<tr>
									<td>B.Sc/B.Ed</td>
									<td>Accounting</td>
									<td>Adekunle Ajashin University</td>
									<td>2015-2019</td>
								</tr>
							</div>
						</table>
					</div>
					<div className="about__innerboard-right certificate">
						<table>
							<tr className="heading__row">
								<th>Name</th>
								<th>Authority</th>
								<th>year</th>
							</tr>
							<div className="table__body">
								<tr>
									<td>HTML5</td>
									<td>University of Michigan</td>
									<td>2021</td>
								</tr>
								<tr>
									<td>CSS3</td>
									<td>University of Michigan</td>
									<td>2021</td>
								</tr>
								<tr>
									<td>Responsive Design</td>
									<td>University of Michigan</td>
									<td>2021</td>
								</tr>
								<tr>
									<td>JavaScript Algorithms & Data Structure</td>
									<td>Freecodecamp</td>
									<td>2022</td>
								</tr>
								<tr>
									<td>Back End Development and API</td>
									<td>Freecodecamp</td>
									<td>2022</td>
								</tr>
							</div>
						</table>
					</div>
					<div className="about__innerboard-right skills">
						<Skill name="HTML" rate={85} />
						<Skill name="CSS" rate={70} />
						<Skill name="JavaScript" rate={75} />
						<Skill name="Bootstrap" rate={70} />
						<Skill name="SASS/SCSS" rate={65} />
						<Skill name="React.js" rate={60} />
						<Skill name="Node.js" rate={65} />
						<Skill name="Express.js" rate={75} />
						<Skill name="Passport.js" rate={75} />
						<Skill name="MongoDB" rate={70} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;

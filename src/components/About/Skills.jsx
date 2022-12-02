import React from 'react';
import Skill from '../Skill/Skill';

export default function Skills() {
	return (
		<div className="about__innerboard-right skills">
			<Skill name="HTML" rate={85} />
			<Skill name="CSS" rate={70} />
			<Skill name="JavaScript" rate={75} />
			<Skill name="Bootstrap" rate={70} />
			<Skill name="SASS/SCSS" rate={65} />
			<Skill name="React.js" rate={60} />
			<Skill name="Node.js" rate={65} />
			<Skill name="Express.js" rate={75} />
			<Skill name="Typescript" rate={55} />
			<Skill name="MongoDB" rate={70} />
		</div>
	);
}

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Education() {
	return (
		<div className="about__innerboard-right certificate">
			<ScrollAnimation animateIn="animate__fadeInRight" delay={500} duration={1}>
				<table>
					<tr className="heading__row">
						<th>Name</th>
						<th>Authority</th>
						<th>year</th>
					</tr>
					<tbody className="table__body">
						<tr>
							<td><a href="https://drive.google.com/file/d/1OJgUQ1ZT9oWqKaN7ZY5CXWDbcQxcQN3u/view?usp=drivesdk"> HTML5 </a> </td>
							<td>University of Michigan</td>
							<td>2021</td>
						</tr>
						<tr>
							<td><a href="https://drive.google.com/file/d/1PYGFd0CEzmMG2OrsYaFCbBm9147Z7yN8/view?usp=drivesdk">CSS3</a></td>
							<td>University of Michigan</td>
							<td>2021</td>
						</tr>
						<tr>
							<td><a href="https://drive.google.com/file/d/1WaKU_WbXdB7Xw6ZcdANivv7OrX1JHssx/view?usp=drivesdk">Responsive Design</a></td>
							<td>University of Michigan</td>
							<td>2021</td>
						</tr>
						<tr>
							<td><a href="https://www.freecodecamp.org/certification/emmijozzy/javascript-algorithms-and-data-structures">JavaScript Algorithms & Data Structure</a></td>
							<td>Freecodecamp</td>
							<td>2022</td>
						</tr>
						<tr>
							<td><a href="https://www.freecodecamp.org/certification/emmijozzy/back-end-development-and-apis">Back End Development and API</a></td>
							<td>Freecodecamp</td>
							<td>2022</td>
						</tr>
					</tbody>
				</table>
			</ScrollAnimation>
		</div>
	);
}

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Certificate() {
	return (
			<ScrollAnimation animateIn="animate__fadeInRight" delay= {500} duration={1.3} className="about__innerboard-right education">
				<table>
					<tr className="heading__row">
						<th>Degree</th>
						<th>Department</th>
						<th>Institution</th>
						<th>year</th>
					</tr>
					<tbody className="table__body">
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
					</tbody>
				</table>
			</ScrollAnimation>
	);
}

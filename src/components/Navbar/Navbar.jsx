import React from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as IconMenu } from '../../assets/logopink.svg';
import './Navbar.scss';

function Navbar({ toggleMenuMood, toggleMenu }) {
	return (
		<div className={toggleMenu ? 'Navbar nav__show' : 'Navbar nav__close'}>
			<div className="hero__menu--outerboard">
				<nav className="hero__menu--innerboard">
					<div className="toggle__box flex__center" onClick={toggleMenuMood}>
						<p className="toggle__command">Close</p>
					</div>
					<div className="menu__circle flex__center ">
						<IconMenu className="menu__icon" />
					</div>
					<ul className="menu__group flex__center p__opensans">
						<li className="menu__tag flex__center">
							<Link to="hero" smooth spy duration={1000} activeClass="active">
								HOME
							</Link>
						</li>
						<li className="menu__tag flex__center">
							<Link to="about" smooth spy duration={1000} activeClass="active">
								ABOUT
							</Link>
						</li>
						{/* <li className="menu__tag flex__center">
							<a href="emmi.home">SERVICE</a>
						</li> */}
						<li className="menu__tag flex__center">
							<Link to="portfolio" smooth spy duration={1000} activeClass="active">
								PORTFOLIO
							</Link>
						</li>
						<li className="menu__tag flex__center">
							<Link to="contact" smooth spy duration={1000} activeClass="active">
								CONTACT
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Navbar;

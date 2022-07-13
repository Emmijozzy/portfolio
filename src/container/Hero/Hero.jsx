import React from 'react';
// import { IconContext } from 'react-icons';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsGithub, BsTelegram } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import hero from '../../assets/hero-pic.png';
import MenuBlock from '../../components/MenuBlock/MenuBlock';
import './Hero.scss';

function Hero({ menuMood }) {
	const mood = menuMood ? 'menu__block menu__block-open' : 'menu__block';
	return (
		<div id="hero" className="app__hero flex__center">
			<MenuBlock mood={mood} />
			<div className="app__hero--board">
				<div className="hero__moon--center flex__center">
					<h1 className="hero__logo">EMMIJOZZY</h1>
					<h3 className="hero__stack">WEB DEVELOPER</h3>
					<div className="hero__social-icon flex__center">
						<a href="https://www.facebook.com/emmijozzy360" target="_blank" className="social-icon__box flex__center" rel="noreferrer">
							<FaFacebook className="social-icons" size={28} />
						</a>
						<a href=" https://wa.me/qr/2ULLFKQXPQTKP1" target="_blank" className="social-icon__box flex__center">
							<IoLogoWhatsapp className="social-icons" size={28} />
						</a>
						<a href="https://github.com/Emmijozzy/" target="_blank" className="social-icon__box flex__center" rel="noreferrer">
							<BsGithub className="social-icons" size={28} />
						</a>
						<a href="https://www.linkedin.com/in/ogunsuyi-joseph-oluwaseun-9b07911bb/" target="_blank" className="social-icon__box flex__center" rel="noreferrer">
							<ImLinkedin className="social-icons" size={28} />
						</a>
						<a href=" https://t.me/Emmijozzy" target="_blank" className="social-icon__box flex__center">
							<BsTelegram className="social-icons" size={28} />
						</a>
					</div>
				</div>
				<div className="hero__moon--left" />
				<div className="hero__moon--right">
					<img src={hero} alt="hero" className="hero__img" />
				</div>
				<div className="hero__moon--small-right1" />
				<div className="hero__moon--small-right2" />
				<div className="hero__moon--small-left2" />
				<div className="hero__moon--small-left1" />
			</div>
		</div>
	);
}
export default Hero;

import React from 'react';
import './Contact.scss';
import { MdEmail } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import MenuBlock from '../../components/MenuBlock/MenuBlock';

export default function Contact({ menuMood }) {
	const mood = menuMood ? 'menu__block menu__block-open' : 'menu__block';
	return (
		<div className="app__contact section__padding">
			<MenuBlock mood={mood} />
			<div className="contact__board flex__center">
				<h3 className="app__subhead">Contact</h3>
				<div className="contact__box">
					<div className="contact__medias">
						<motion.div className="contact__media  contact__email" animate={{
							scale:[1, 2, 3, 1]
						}}>
							<MdEmail size={50} />
							<h4>Email</h4>
							<h5>josephogunsuyi@gmail.com</h5>
							<div className="contact__link">
								<a href="email.com">Send a message</a>
							</div>
						</motion.div>
						<div className="contact__media contact__messager">
							<BsFacebook size={50} />
							<h4>Messager</h4>
							<h5>Ogunsuyi Joseph O.</h5>
							<div className="contact__link">
								<a href="http://email.com">Send a message</a>
							</div>
						</div>
						<div className="contact__media contact__whatapp">
							<RiWhatsappFill size={50} />
							<h4>WhatsApp</h4>
							<h5>+2349032846121</h5>
							<div className="contact__link">
								<a href="email.com">Send a message</a>
							</div>
						</div>
					</div>
					<div className="contact__message">
						<form className="flex__center">
							<div className="form__group">
								<label htmlFor="name">
									<input
										type="text"
										name="name"
										placeholder="Name"
										id="name"
										className="form__input"
									/>
								</label>
							</div>
							<div className="form__group">
								<label htmlFor="email">
									<input
										type="text"
										name="email"
										placeholder="Email"
										id="email"
										className="form__input"
									/>
								</label>
							</div>
							<div className="form__group">
								<textarea name="message" placeholder="Message" className="form__input" />
							</div>
							<button type="submit" className="submit__btn btn">
								{' '}
								SEND{' '}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

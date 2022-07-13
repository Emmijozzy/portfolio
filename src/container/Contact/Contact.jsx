import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { MdEmail } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import MenuBlock from '../../components/MenuBlock/MenuBlock';

export default function Contact({ menuMood }) {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v2hou0e', 'template_n33x4xf', form.current, 'vsizMm-5hmi-MTNel')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

	const mood = menuMood ? 'menu__block menu__block-open' : 'menu__block';

	return (
		<div id="contact" className="app__contact section__padding">
			<MenuBlock mood={mood} />
			<div className="contact__board flex__center">
				<h3 className="app__subhead">Contact</h3>
				<div className="contact__box">
					<div className="contact__medias">
						<ScrollAnimation animateIn="animate__fadeInLeft" duration={1} className="contact__media  contact__email">
							<MdEmail size={50} />
							<h4>Email</h4>
							<h5>josephogunsuyi@gmail.com</h5>
							<div className="contact__link">
								<a href="email.com">Send a message</a>
							</div>
						</ScrollAnimation>
						<ScrollAnimation animateIn="animate__fadeInLeft" duration={1} className="contact__media contact__messager">
							<BsFacebook size={50} />
							<h4>Messager</h4>
							<h5>Ogunsuyi Joseph O.</h5>
							<div className="contact__link">
								<a href="http://email.com">Send a message</a>
							</div>
						</ScrollAnimation>
						<ScrollAnimation animateIn="animate__fadeInLeft" duration={1} className="contact__media contact__whatapp">
							<RiWhatsappFill size={50} />
							<h4>WhatsApp</h4>
							<h5>+2349032846121</h5>
							<div className="contact__link">
								<a href="email.com">Send a message</a>
							</div>
						</ScrollAnimation>
					</div>
					<ScrollAnimation animateIn="animate__fadeInRight" duration={1} className="contact__message">
						<form ref={form} onSubmit={sendEmail} className="flex__center">
							<div className="form__group">
								<label htmlFor="name">
									<input
										type="text"
										name="user_name"
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
										name="user_email"
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
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
}

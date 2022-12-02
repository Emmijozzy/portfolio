import { quizApp, emmiTenzies, backEndImg, redPlant } from '../assets/port_image';

const portfolios = [
	{
		portImg: redPlant,
		title: 'Red Plant',
		githubLink: 'https://github.com/Emmijozzy/e-commerce-wae-spaces',
		demoLink: 'https://e-commerce-wae-spaces.vercel.app/',
		stack: 'Front-end(React.ts)',
	},
	{
		portImg: quizApp,
		title: 'Quiz App',
		githubLink: 'https://github.com/Emmijozzy/Quiz-app',
		demoLink: 'https://emmijozzy.github.io/Quiz-app/',
		stack: 'Front-end(React.Js)',
	},
	{
		portImg: emmiTenzies,
		title: 'Emmi-Tenzies',
		githubLink: 'https://github.com/Emmijozzy/Emmi-Tenzies',
		demoLink: 'https://emmijozzy.github.io/Emmi-Tenzies',
		stack: 'Front-end(React.js)',
	},
	{
		portImg: backEndImg,
		title: 'login-registraion-system-passportjs-nodemailer',
		githubLink: 'https://github.com/Emmijozzy/login-registraion-system-passportjs-nodemailer',
		stack: 'Back-end(Node.js)',
	},
];

export default { portfolios };

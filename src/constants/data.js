import { quizApp, emmiTenzies, backEndImg, redPlant, portFigma } from '../assets/port_image';

const portfolios = [
	{
		portImg: redPlant,
		title: 'Red Plant',
		githubLink: 'https://github.com/Emmijozzy/e-commerce-wae-spaces',
		demoLink: 'https://e-commerce-wae-spaces.vercel.app/',
		stack: 'Front-end(React.ts)',
		figma: false,
	},
	{
		portImg: quizApp,
		title: 'Quiz App',
		githubLink: 'https://github.com/Emmijozzy/Quiz-app',
		demoLink: 'https://emmijozzy.github.io/Quiz-app/',
		stack: 'Front-end(React.Js)',
		figma: false,
	},
	{
		portImg: emmiTenzies,
		title: 'Emmi-Tenzies',
		githubLink: 'https://github.com/Emmijozzy/Emmi-Tenzies',
		demoLink: 'https://emmijozzy.github.io/Emmi-Tenzies',
		stack: 'Front-end(React.js)',
		figma: false,
	},
	{
		portImg: backEndImg,
		title: 'login-registraion-system-passportjs-nodemailer',
		githubLink: 'https://github.com/Emmijozzy/login-registraion-system-passportjs-nodemailer',
		stack: 'Back-end(Node.js)',
		figma: false,
	},
	{
		portImg: portFigma,
		title: 'Portfolio',
		demoLink: 'https://www.figma.com/file/waEIjMO3CE5jpbyJHH4J1s/My-Portfolio?node-id=0%3A1&t=pe3BFe6zjth4je0g-1',
		stack: 'Figma',
		figma: true,
	},
];

export default { portfolios };

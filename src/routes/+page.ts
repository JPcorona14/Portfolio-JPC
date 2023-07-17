import odeitsImg from '../assets/Odeits.png';
import portfolio from '../assets/Portfolio.png';

/** @type {import('./$types').PageLoad} */
export function load() {
	interface project {
		side: 'Left' | 'Right';
		name: string;
		site: string;
		picture: any;
		description: string;
		code: string[];
	}

	const projects = [
		<project>{
			side: 'Left',
			name: 'Odeits',
			site: 'https://www.odeits.com',
			picture: odeitsImg,
			description:
				"Auditing Software for customer support managers/leads to track and rate the performance of their representative's contacts. This software allows users to create custom audit sheets and rate the members of their team. Company have the ability to fully manage all team members and set roles for users. Team members are able to create audits on representatives and submit them for sign off when completed. This software is free to use for everyone.",
			code: ['Sveltekit', 'Typescript', 'Tailwind', 'MariaDB', 'SendGrid API', 'Vite', 'Vercel']
		},
		<project>{
			side: 'Right',
			name: 'Portfolio',
			site: 'https://portfolio-jpc.pages.dev/',
			picture: portfolio,
			description:
				"This site stands as my personal resume for all the projects I've completed and everything I've contributed to as a developer. I've also include information about past roles before becoming a developer.",
			code: ['Sveltekit', 'Typescript', 'Tailwind', 'Vercel']
		}
	];

	return { projects };
}

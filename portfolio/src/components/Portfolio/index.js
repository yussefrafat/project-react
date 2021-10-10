import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Run Buddy',
            description: 'A website that offers fitness training services',
			image: 'RunbUDDY.png',
			technologies: [
				'HTML/CSS',
			],
			github: 'https://github.com/yussefrafat/Run-Buddy',
			deployed: 'https://yussefrafat.github.io/Run-Buddy/',
		},
		{
			name: 'Robot Gladiator',
			description: 'Robot fighting game with JS',
			image: 'sf2ce.png',
			technologies: [
				'JavaScript',
			],
			github: 'https://github.com/yussefrafat/robot-gladiators',
		},
		{
			name: 'SpaceCamp',
			description: 'A website to get sone fun fact and info about space',
			image: 'space-camp.png',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery', 'API'],
			deployed: 'https://jackloveday-git.github.io/space-camp/',
		},
		{
			name: 'SportKonnect-RYM',
			description:
				'A live website where you can get sport news and interact by commenting.',
			image: 'SK.png',
			technologies: [
				'JavaScript',
                'JQuery',
				'CSS',
				'HandleBars',
				'Node.js',
				'ORM',
                'SQL',
                'MVC',
                'VueJS',

		],
			github: 'https://github.com/yussefrafat/SportKonnect-RYM',
			deployed: 'https://sportkonnect-rym.herokuapp.com/login',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather-dashboard-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/OwaisIslam/weather-dashboard',
			deployed: 'https://owaisislam.github.io/weather-dashboard/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'pw-gen.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/yussefrafat/Password-Generator-of-Yuss/tree/master',
			deployed: 'https://yussefrafat.github.io/Password-Generator-of-Yuss/',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: 'note-taker-image.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/yussefrafat/Note-Taker',
			deployed: 'https://note-taker0812.herokuapp.com/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;

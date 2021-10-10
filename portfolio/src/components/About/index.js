import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/avatar.jpeg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am a full stack web developer looking to build a more
					intuitive user experience on the web. I will soon be receiving
				    my certificate in full stack development from the
					University of Carleton Bootcamp, with newly developed
					skills in JavaScript, CSS, React.js, and responsive web
					design. 
				</p>
				
				
			</div>
		</section>
	);
}

export default About;

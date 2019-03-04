import * as React from 'react';

interface HomeProps {}
interface HomeState {}

/**
 * Defines the home panel within the main carousel
 */
export class Home extends React.Component<HomeProps, HomeState> {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div id="home">
				<div className="carousel-header">
					<h2>ABOUT ME</h2>
				</div>
                <p className="bio">I'm a senior undergraduate student studying Computer Science at the University of Massachusetts, Amherst.
                    I have roughly 6 years of programming experience under my belt coupled with a lifelong interest in computers and technology.
                    My work experience consists of web and mobile software projects including scalable social networking platforms, automated texting services and mobile iOS applications.
                    Last summer I spent my time as a software engineer intern at Google on the Site Reliability team, and I'm currently working as a Scala Web Developer for the Computer Science MS and PhD admissions system at UMass.
                    When I'm not programming I enjoy doing puzzles, biking, reading, and investing.</p>
			</div>
		)
	}
}
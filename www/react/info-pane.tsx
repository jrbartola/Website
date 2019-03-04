import * as React from 'react';

interface InfoPaneProps {}
interface InfoPaneState { facebookURL: string, githubURL: string, linkedinURL: string }

/**
 * Defines the info panel on the left side of the home page
 */
export class InfoPane extends React.Component<InfoPaneProps, InfoPaneState> {
	constructor(props) {
		super(props);

		this.state = { facebookURL: "https://www.facebook.com/jbartola",
		               githubURL: "https://github.com/jrbartola/",
		               linkedinURL: "https://www.linkedin.com/in/jessebartola/" }

	}

	render() {
		return (
			<div id="info">
				<h2 className="info-header">JESSE BARTOLA</h2>

				<img className="info-picture bg-light" src="../static/img/6522_square.png" />

				<h6 id="traits">software engineer, math lover, finance enthusiast</h6>

				{/* Social Icon Row */}
				<div className="social-icons flex flex-row">
					<div className="social-icon">
						<a href={this.state.linkedinURL} target="_blank">
							<i className="fab fa-linkedin"></i>
						</a>
					</div>
					<div className="social-icon">
						<a href={this.state.facebookURL} target="_blank">
							<i className="fab fa-facebook"></i>
						</a>
					</div>
					<div className="social-icon">
						<a href={this.state.githubURL} target="_blank">
							<i className="fab fa-github"></i>
						</a>
					</div>
				</div>

				<footer>
					<span>© Jesse Bartola, 2019</span>
				</footer>
			</div>
		)
	}
}
import * as React from 'react';

interface ContactProps {}
interface ContactState {}

/**
 * Defines the contact panel within the main carousel
 */
export class Contact extends React.Component<ContactProps, ContactState> {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div id="contact">
				<div className="carousel-header">
					<h2>LET'S CHAT</h2>
				</div>
                <div className="contact-info">
                    <p>Feel free to get in touch! I'm always interested in meeting new people. If you have any ideas, projects, or questions don't hesitate to shoot me an email!</p>
                    <p className="email-label">Email</p>
                    <p>
                        <a className="contact-email" href="mailto:jrbartola@gmail.com">jrbartola@gmail.com</a>
                    </p>
                </div>
			</div>
		)
	}
}
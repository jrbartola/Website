import * as React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

interface ExperienceItemProps { timeFrame: string, company: string, location: string, jobTitle: string,
	                            description: string, imageUrl?: string }

interface ResumeProps {}
interface ResumeState {}

/**
 * Defines the resume panel within the main carousel
 */
export class Resume extends React.Component<ResumeProps, ResumeState> {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div id="resume">
				<div className="carousel-header flex">
					<h2>RESUME</h2>
                    <h3>(Updated 3/4/2019)&nbsp;&nbsp;
						<a className="download-btn" href="/resume" target="_blank"><i className="fas fa-download"></i></a>
                    </h3>
				</div>
				<Accordion>
					<Experience />
				</Accordion>
			</div>
		)
	}
}

/**
 * Functional component that renders the experience accordion section within the resume
 * @constructor
 */
const Experience = () => {
	return (
			<AccordionItem expanded={true}>
				<AccordionItemTitle>
					<h3><i className="fas fa-briefcase"></i>    Work Experience</h3>
				</AccordionItemTitle>
				<AccordionItemBody>
					<ExperienceItem timeFrame="Sep 2017 - Now" company="UMass Amherst" location="Amherst, MA"
									jobTitle="Scala Web Developer" description="Scala web developer"
					                imageUrl="../static/img/umass-logo.png" />
					<ExperienceItem timeFrame="May 2018 - Aug 2018" company="Google" location="Cambridge, MA"
									jobTitle="Software Engineer Intern" description="SWE Intern, site reliability"
					                imageUrl="../static/img/google-logo.png" />
					<ExperienceItem timeFrame="May 2017 - Aug 2017" company="Charles River Analytics" location="Cambridge, MA"
									jobTitle="Software Engineer Intern" description="SWE Intern, Decision Management"
					                imageUrl="../static/img/cra-logo.jpg" />
					<ExperienceItem timeFrame="Sep 2016 - May 2018" company="UMass Amherst" location="Amherst, MA"
									jobTitle="Undergraduate Teaching Assistant" description="UG TA for CS 220"
					                imageUrl="../static/img/umass-logo.png" />
					<ExperienceItem timeFrame="May 2015 - Nov 2015" company="TxtAdvice" location="West Orange, NJ"
									jobTitle="Lead Platform Developer" description="Lead platform dev for TxtAdvice"
					                imageUrl="../static/img/txtadvice-logo.png" />
				</AccordionItemBody>
			</AccordionItem>
	);
};

/**
 * Functional component that renders an experience timeline item
 * @constructor
 */
const ExperienceItem = (props: ExperienceItemProps) => {
    return (
        <div className="experience-item">
            <div className="row">
				<div className="col-sm-4 job-info">
					<h4 className="job-timeframe">{props.timeFrame}</h4>
					<h4 className="job-company">{props.company}</h4>
					<p className="job-location"><i className="fas fa-map-marker-alt"></i> {props.location}</p>
					{ props.imageUrl &&
						<img className="company-logo" src={props.imageUrl} alt="Company Logo"/>
					}
				</div>
				<div className="col-sm-8">
					<h4 className="job-title">{props.jobTitle}</h4>
				</div>
			</div>
		</div>
	);
};
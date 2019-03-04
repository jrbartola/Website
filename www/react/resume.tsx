import * as React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import {
	CRA_INTERN_DESC,
	GOOGLE_INTERN_DESC,
	SCALA_WEB_DESC,
	TXTADVICE_DESC,
	UGTA_DESC
} from "./descriptions/experience";

interface ExperienceItemProps { timeFrame: string, company: string, location: string, jobTitle: string,
	                            description: string, imageUrl?: string }

interface EducationProps { timeFrame: string, school: string, location: string, major: string, description: string,
	                       imageUrl?: string, gpa: string, courses: JSX.Element }

interface AwardProps { timeFrame: string, event: string, location: string, award: string, description: string,
	                   imageUrl?: string }

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
					<Education />
					<Awards />
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
									jobTitle="Scala Web Developer" description={SCALA_WEB_DESC}
					                imageUrl="../static/img/umass-logo.png" />
					<ExperienceItem timeFrame="May 2018 - Aug 2018" company="Google" location="Cambridge, MA"
									jobTitle="Software Engineer Intern" description={GOOGLE_INTERN_DESC}
					                imageUrl="../static/img/google-logo.png" />
					<ExperienceItem timeFrame="May 2017 - Aug 2017" company="Charles River Analytics" location="Cambridge, MA"
									jobTitle="Software Engineer Intern" description={CRA_INTERN_DESC}
					                imageUrl="../static/img/cra-logo.jpg" />
					<ExperienceItem timeFrame="Sep 2016 - May 2018" company="UMass Amherst" location="Amherst, MA"
									jobTitle="Undergraduate Teaching Assistant" description={UGTA_DESC}
					                imageUrl="../static/img/umass-logo.png" />
					<ExperienceItem timeFrame="May 2015 - Nov 2015" company="TxtAdvice" location="West Orange, NJ"
									jobTitle="Lead Platform Developer" description={TXTADVICE_DESC}
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
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
};


/**
 * Functional component that renders the education accordion section within the resume
 * @constructor
 */
const Education = () => {
	const courses = (<div className="row">
		                 <div className="col-sm-6">
							 <ul className="course-list">
								 <li>Software Engineering</li>
								 <li>Digital Forensics</li>
								 <li>Operating Systems</li>
								 <li>Artificial Intelligence</li>
								 <li>Natural Language Processing</li>
								 <li>Machine Learning</li>
							 </ul>
						 </div>
		                 <div className="col-sm-6">
							 <ul className="course-list">
								 <li>Ordinary Differential Equations</li>
								 <li>Intro to Abstract Algebra</li>
								 <li>Mathematics of Finance</li>
								 <li>Applied Linear Algebra</li>
								 <li>Intro to Scientific Computing</li>
								 <li>Combinatorics &amp; Graph Theory</li>
							 </ul>
						 </div>
	                 </div>);
	return (
        <AccordionItem>
				<AccordionItemTitle>
					<h3><i className=" fas fa-graduation-cap"></i>    Education</h3>
				</AccordionItemTitle>
				<AccordionItemBody>
					<EducationItem timeFrame="Sep 2015 - May 2019" school="UMass Amherst" location="Amherst, MA"
									major="Computer Science and Mathematics (BS)" description="umass amherst school"
					                imageUrl="../static/img/umass-logo.png" courses={courses} gpa="3.93/4.0" />
				</AccordionItemBody>
		</AccordionItem>
	);
};

/**
 * Functional component that renders an education timeline item
 * @param props
 * @constructor
 */
const EducationItem = (props: EducationProps) => {
    return (
    	<div className="education-item">
            <div className="row">
				<div className="col-sm-4 edu-info">
					<h4 className="edu-timeframe">{props.timeFrame}</h4>
					<h4 className="edu-school">{props.school}</h4>
					<p className="edu-gpa">GPA: {props.gpa}</p>
					<p className="edu-location"><i className="fas fa-map-marker-alt"></i> {props.location}</p>
					{ props.imageUrl &&
						<img className="company-logo" src={props.imageUrl} alt="Company Logo"/>
					}
				</div>
				<div className="col-sm-8">
					<h4 className="job-title">{props.major}</h4>
					{props.courses}
				</div>
			</div>
		</div>
	)
};


/**
 * Functional component that renders the awards accordion section within the resume
 * @constructor
 */
const Awards = () => {
	return (
        <AccordionItem>
				<AccordionItemTitle>
					<h3><i className="fas fa-medal"></i>    Awards</h3>
				</AccordionItemTitle>
				<AccordionItemBody>
					<AwardItem timeFrame="Oct 2015" event="Hack UMass III" location="Amherst, MA" award="3rd Place"
							   description="umass amherst school" imageUrl="../static/img/hackumass-logo.png" />
					<AwardItem timeFrame="April 2015" event="NJ SkillsUSA State Championships" location="Bridgewater, NJ"
							   award="2nd Place" description="Skills uSA" imageUrl="../static/img/skillsusa-logo.jpeg" />
				</AccordionItemBody>
		</AccordionItem>
	);
};

/**
 * Functional component that renders an award timeline item
 * @param props
 * @constructor
 */
const AwardItem = (props: AwardProps) => {
    return (
    	<div className="award-item">
            <div className="row">
				<div className="col-sm-4 award-info">
					<h4 className="award-timeframe">{props.timeFrame}</h4>
					<h4 className="award-title">{props.event}</h4>
					<p className="award-location"><i className="fas fa-map-marker-alt"></i> {props.location}</p>
					{ props.imageUrl &&
						<img className="company-logo" src={props.imageUrl} alt="Event Logo"/>
					}
				</div>
				<div className="col-sm-8">
					<h4 className="job-title">{props.award}</h4>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	)
};
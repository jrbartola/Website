import * as React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import {
	CRA_INTERN_DESC,
	GOOGLE_INTERN_DESC,
	SCALA_WEB_DESC,
	TXTADVICE_DESC,
	UGTA_DESC
} from "./descriptions/experience";
import {HACK_UMASS3_DESC, HACK_UMASS5_DESC, SKILLS_USA_DESC} from "./descriptions/awards";
import {GETRequest} from "./util/http";
import {getRepositories} from "./util/code-counter";

interface ExperienceItemProps { timeFrame: string, company: string, location: string, jobTitle: string,
	                            description: string, imageUrl?: string }

interface EducationProps { timeFrame: string, school: string, location: string, major: string, description: string,
	                       imageUrl?: string, gpa: string, courses: JSX.Element }

interface AwardProps { timeFrame: string, event: string, location: string, award: string, description: string,
	                   imageUrl?: string, awardUrl?: string }


interface SkillProps { skillName: string, skillNum: number, minValue: number, maxValue: number }

interface ResumeProps {}
interface ResumeState { codeMap: Map<string, number> }

/**
 * Defines the resume panel within the main carousel
 */
export class Resume extends React.Component<ResumeProps, ResumeState> {
	constructor(props) {
		super(props);

        this.mapRepositories = this.mapRepositories.bind(this);
		this.mapLanguageResponse = this.mapLanguageResponse.bind(this);

		// Hardcode this in case the Github API gives us problems later down the line
		this.state = { codeMap: new Map<string, number>([["Javascript", 1192159], ["CSS", 570597],
			                                                     ["HTML", 124604], ["Python", 118751],
			                                                     ["Swift", 89462], ["Typescript", 72043],
			                                                     ["Java", 56195], ["Scala", 17646]]) }

	}

	componentDidMount() {
		GETRequest("https://api.github.com/users/jrbartola/repos").then(resp => {
            const repos = this.mapRepositories("jrbartola", resp as object[]);
            const resps = repos.map(r => GETRequest(`https://api.github.com/repos/jrbartola/${r}/languages`));
            Promise.all(resps).then(this.mapLanguageResponse);
		}).catch(resp => {
			console.error("Something went wrong...", resp);
		});
	}

	/**
	 * Maps the response object from the Github request to an array of repository names
	 *
	 * @param {string} username: The username of the Github user
	 * @param {object[]} repos: An array of repository response objects owned by the given user
	 *
	 * @returns {string[]}: An array of repository names
	 */
	private mapRepositories(username: string, repos: object[]): string[] {
		return repos.filter(obj => !obj["fork"]).map(obj => obj["name"]);
	};

    /**
	 * Obtains a mapping from language names to number of bytes written in that language for all repositories, and then
	 * updates the Skills state accordingly
	 *
	 * @param {object[]} responses: An array of objects whose keys are languages, and values are bytes in that language
	 *
	 */
	private mapLanguageResponse(responses: object[]): void {
		let codeMap = new Map<string, number>();

		responses.forEach(resp => {
			Object.keys(resp).forEach(language => {
				if (!codeMap.has(language)) {
					codeMap.set(language, 0);
				}
				codeMap.set(language, codeMap.get(language) + resp[language]);
			});
		});

		this.setState({codeMap: codeMap});
	};

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
					<Skills codeMap={this.state.codeMap}/>
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
						<img className="school-logo" src={props.imageUrl} alt="Company Logo"/>
					}
				</div>
				<div className="col-sm-8">
					<h4 className="edu-title">{props.major}</h4>
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
					<AwardItem timeFrame="Oct 2017" event="Hack UMass III" location="Amherst, MA" award="Multiple Awards"
							   description={HACK_UMASS5_DESC} imageUrl="../static/img/hackumass-logo5.png"
							   awardUrl="https://devpost.com/software/pharmasuitable-shf3cx" />
					<AwardItem timeFrame="Oct 2015" event="Hack UMass III" location="Amherst, MA" award="3rd Place"
							   description={HACK_UMASS3_DESC} imageUrl="../static/img/hackumass-logo.png"
							   awardUrl="https://devpost.com/software/scopium" />
					<AwardItem timeFrame="April 2015" event="NJ SkillsUSA State Championships" location="Bridgewater, NJ"
							   award="2nd Place" description={SKILLS_USA_DESC} imageUrl="../static/img/skillsusa-logo.jpeg" />
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
						<img className="event-logo" src={props.imageUrl} alt="Event Logo"/>
					}
				</div>
				<div className="col-sm-8">
					{ props.awardUrl &&
					    <a href={props.awardUrl} target="_blank">
							<h4 className="award-title">{props.award} <i className="fas fa-link"></i></h4>
					    </a>
					}
					{ !props.awardUrl &&
					    <h4 className="award-title">{props.award}</h4>
					}
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	)
};


/**
 * Functional component that renders the skills accordion section within the resume
 * @constructor
 */
const Skills = ({codeMap}) => {
	console.log(codeMap);
	const orderedLangs: object[] = [...codeMap.entries()].sort((a, b) => a[1] > b[1] ? -1 : 1)
		                                                 .splice(0, 8)
		                                                 .map(([k, v]) => ({language: k, Kilobytes: v/1000}));

	return (
        <AccordionItem>
				<AccordionItemTitle>
					<h3><i className="fas fa-chart-bar"></i>    Skills</h3>
				</AccordionItemTitle>
				<AccordionItemBody>
					<h4>Code on Github</h4>
					<ResponsiveContainer height={300} width="100%">
						<BarChart width={600} height={300} data={orderedLangs} margin={{top: 20, right: 30, left: 20, bottom: 20}}>
						   <CartesianGrid strokeDasharray="3 3"/>
						   <XAxis dataKey="language" label={{value: 'Language', position: 'bottom'}} />
						   <YAxis label={{value: 'Amount (Kilobytes)', angle: -90, position: 'insideBottomLeft'}} />
						   <Tooltip/>
						   <Bar dataKey="Kilobytes" fill="#00d4d4" />
						</BarChart>
					</ResponsiveContainer>
				</AccordionItemBody>
		</AccordionItem>
	);
};
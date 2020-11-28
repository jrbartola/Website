import * as React from 'react';
import { Accordion } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import Strings from '../../constants/Strings';
import {
  ExperienceItem as ExperienceItemType,
  EducationItem as EducationItemType,
  AwardItem as AwardItemType,
} from '../../types';
import GithubAPI from '../../util/GithubAPI';
import { getWindowWidth } from '../../util/windowUtils';
import AwardItem from './AwardItem';
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';
import ResumeAccordionSection from './ResumeAccordionSection';
import SkillsSection from './SkillsSection';

const ResumeTab = () => {
  const [codeMap, setCodeMap] = React.useState(
    new Map<string, number>([
      ['Javascript', 1192159],
      ['CSS', 570597],
      ['HTML', 124604],
      ['Python', 118751],
      ['Swift', 89462],
      ['Typescript', 72043],
      ['Java', 56195],
      ['Scala', 17646],
    ])
  );

  const handleGitHubResponse = React.useCallback(
    (responses: Object[]): void => {
      const newCodeMap = responses.reduce<Map<string, number>>((acc, resp) => {
        return Object.keys(resp).reduce(
          (acc2, language) =>
            acc2.set(language, (acc2.get(language) || 0) + resp[language]),
          acc
        );
      }, new Map());

      setCodeMap(newCodeMap);
    },
    []
  );

  React.useEffect(() => {
    GithubAPI.fetchRepos()
      .then((resp) => {
        const repos = resp.filter((obj) => !obj.fork).map((obj) => obj.name);
        Promise.all(
          repos.map((repoName) => GithubAPI.fetchRepoLanguages({ repoName }))
        ).then(handleGitHubResponse);
      })
      .catch((resp) => {
        console.error('Something went wrong...', resp);
      });
  }, []);
  const width = getWindowWidth();

  const updatedText = width >= 692 ? Strings.tabs.RESUME.lastUpdated : '';
  return (
    <div id="resume">
      <div className="carousel-header flex">
        <h2>{Strings.tabs.RESUME.heading}</h2>
        <h3>
          {updatedText}&nbsp;&nbsp;
          <a className="download-btn" href="/resume" target="_blank">
            <i className="fas fa-download"></i>
          </a>
        </h3>
      </div>
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <ResumeAccordionSection
          heading={Strings.tabs.RESUME.workExperience.heading}
          iconClass="fa-briefcase"
        >
          {Strings.tabs.RESUME.workExperience.items.map(
            (experienceProps: ExperienceItemType, i) => (
              <ExperienceItem key={i} {...experienceProps} />
            )
          )}
        </ResumeAccordionSection>
        <ResumeAccordionSection
          heading={Strings.tabs.RESUME.education.heading}
          iconClass="fa-graduation-cap"
        >
          {Strings.tabs.RESUME.education.items.map(
            (educationItemProps: EducationItemType, i) => (
              <EducationItem key={i} {...educationItemProps} />
            )
          )}
        </ResumeAccordionSection>
        <ResumeAccordionSection
          heading={Strings.tabs.RESUME.awards.heading}
          iconClass="fa-medal"
        >
          {Strings.tabs.RESUME.awards.items.map(
            (awardItemProps: AwardItemType, i) => (
              <AwardItem key={i} {...awardItemProps} />
            )
          )}
        </ResumeAccordionSection>
        <ResumeAccordionSection
          heading={Strings.tabs.RESUME.skills.heading}
          iconClass="fa-chart-bar"
        >
          <SkillsSection codeMap={codeMap} />
        </ResumeAccordionSection>
      </Accordion>
    </div>
  );
};

ResumeTab.displayName = 'Resume';

export default ResumeTab;

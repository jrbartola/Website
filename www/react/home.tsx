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
        <p className="bio">
          I'm a Software Engineer, recently receiving my undergraduate degree in
          Computer Science and Mathematics from UMass Amherst in May 2019. I
          have roughly 6 years of programming experience under my belt coupled
          with a lifelong interest in computers and technology.
        </p>
        <p className="bio">
          My work experience consists of web and mobile software projects
          including scalable social networking platforms, automated texting
          services and mobile iOS applications.
        </p>
        <p className="bio">
          Last summer I was a software engineer intern at Google on the Site
          Reliability team. I'm currently working as a Departmental Assistant
          for the College of Information and Computer Sciences at UMass, and
          will be a Software Engineer at Hubspot come July.
        </p>
        <p className="bio">
          When I'm not programming I enjoy doing puzzles, biking, reading, and
          investing.
        </p>
      </div>
    );
  }
}

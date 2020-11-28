/**
 * Awards Copy
 */

const Strings = {
  infoPane: {
    name: 'JESSE BARTOLA',
    traits: 'software engineer, math lover, finance enthusiast',
    location: 'Cambridge, MA',
    copyright: '© Jesse Bartola, 2020',
    socialIcons: [
      {
        url: 'https://www.linkedin.com/in/jessebartola/',
        iconClass: 'fab fa-linkedin',
      },
      {
        url: 'https://github.com/jrbartola/',
        iconClass: 'fab fa-github',
      },
      {
        url: 'https://www.facebook.com/jbartola',
        iconClass: 'fab fa-facebook',
      },
    ],
  },
  tabs: {
    HOME: {
      heading: 'ABOUT ME',
      bio: [
        "I'm a Software Engineer, recently receiving my undergraduate degree in " +
          'Computer Science and Mathematics from UMass Amherst in May 2019. I ' +
          'have roughly 8 years of programming experience under my belt coupled ' +
          'with a lifelong interest in computers and technology.',
        'My work experience consists of web and mobile software projects ' +
          'including scalable social networking platforms, automated texting ' +
          'services and mobile iOS applications. I currently work at HubSpot as a Senior Software Engineer.',
        "When I'm not programming I enjoy biking, playing piano, reading, and investing.",
      ],
    },
    CONTACT: {
      heading: "LET'S CHAT",
    },
    RESUME: {
      heading: 'RESUME',
      lastUpdated: '(Updated 11/27/2020)',
      workExperience: {
        heading: 'Work Experience',
        items: [
          {
            timeFrame: 'June 2020 - Now',
            company: 'HubSpot',
            location: 'Cambridge, MA',
            jobTitle: 'Senior Software Engineer I',
            description:
              'Senior Software Engineer Integration Experience team. Was the DRI for creating a Marketing Event CRM Object, ' +
              'allowing customers to track and analyze events associated with Zoom, Eventbrite, GoToWebinar, and custom integrations. Responsible for ' +
              'cross-team collaboration in creating a front-end component framework to standardize the experience of settings pages ' +
              'for HubSpot-built integrations.',
            imageUrl: '../static/img/hubspot-logo.jpg',
          },
          {
            timeFrame: 'July 2019 - June 2020',
            company: 'HubSpot',
            location: 'Cambridge, MA',
            jobTitle: 'Software Engineer',
            description:
              'Front-end software engineer on the Integration Experience team. Responsible for creating and managing third-party app integrations within the HubSpot services platform. ' +
              'Addressed customer pain points by contributing to the implementation of integration sync errors solutions. ' +
              'Pioneered a front-end testing initiative that increased test coverage by over 100%.',
            imageUrl: '../static/img/hubspot-logo.jpg',
          },
          {
            timeFrame: 'May 2019 - July 2019',
            company: 'UMass Amherst',
            location: 'Amherst, MA',
            jobTitle: 'Departmental Assistant',
            description:
              'Departmental assistant within the College of Information and Computer Sciences. Assisted with the development of ' +
              'fairkit-learn, a python-based tool used to compute and visualize fairness and quality metrics of machine learning models. Used the Bokeh library ' +
              'for python to create an interactive visualization tool that provides information about bias in trained models. Created a pipeline to integrate ' +
              "metrics and fairness algorithms from IBM's AI Fairness 360 Toolkit into fairkit-learn.",
            imageUrl: '../static/img/umass-logo.png',
          },
          {
            timeFrame: 'Sep 2017 - March 2019',
            company: 'UMass Amherst',
            location: 'Amherst, MA',
            jobTitle: 'Scala Web Developer',
            description:
              "Full stack developer for the UMass College of Information and Computer Science's MS and " +
              'PhD Admissions website. The system is used annually by over 80 faculty members of the CICS department to review over 2000 applicants per year. ' +
              'Responsible for improving relational database design patterns by rewriting old PostgreSQL schemas, addressing plugin compatibility' +
              ' issues on the front end by migrating from Scala.js to Typescript + React, implementing a custom sorting algorithm to rank ' +
              'schools according to CS quality, and creating a cache to preserve user preferences between login sessions.',
            imageUrl: '../static/img/umass-logo.png',
          },
          {
            timeFrame: 'May 2018 - Aug 2018',
            company: 'Google',
            location: 'Cambridge, MA',
            jobTitle: 'Software Engineer Intern',
            description:
              'Software Engineer Intern on the Site Reliability Team. Responsible for creating a website ' +
              'encompassing the functionality of a command-line tool used by Google engineers to automate dependency resolution for their code release pipeline.' +
              ' Authored a project design document detailing the problem statement, system requirements, UI mock-ups, user stories, test cases, ' +
              'design trade-offs and future development of the new web application. On the back end, I implemented an indexing pipeline in Go ' +
              'that broadcasts database updates to the webserver to keep the most recent results ready in cache.',
            imageUrl: '../static/img/google-logo.png',
          },
          {
            timeFrame: 'May 2017 - Aug 2017',
            company: 'Charles River Analytics',
            location: 'Cambridge, MA',
            jobTitle: 'Software Engineer Intern',
            description:
              'Software Engineer Intern within the Decision Management division. Aided in full-stack development of a React.js ' +
              'application designed to detect system hardware failures on-board ships in the Navy. Improved fault detecting by ~15% by formulating Bayesian Network ' +
              ' models using the Figaro probabilistic programming package for Scala. I used the new classification results to create a d3.js ' +
              'visualization to inform ship operators where faults are likely to happen.',
            imageUrl: '../static/img/cra-logo.jpg',
          },
          {
            timeFrame: 'Sep 2016 - May 2018',
            company: 'UMass Amherst',
            location: 'Amherst, MA',
            jobTitle: 'Undergraduate Teaching Assistant',
            description:
              'Undergraduate Teaching Assistant for CS 220 (Functional Programming Using Scala). Worked as one of six ' +
              'undergraduates chosen to orchestrate class discussions sections and hold weekly office hours for a class of over 150 students. ' +
              'Introduced students to functional programming concepts such as immutability, higher-order functions, algebraic data types, recursive data structures ' +
              'and referential transparency.',
            imageUrl: '../static/img/umass-logo.png',
          },
          {
            timeFrame: 'May 2015 - Nov 2015',
            company: 'TxtAdvice',
            location: 'West Orange, NJ',
            jobTitle: 'Lead Platform Developer',
            description:
              'Led the development of an online SMS/MMS messaging service providing users with real-time fashion ' +
              'advice from professional stylists (featured on CNN!). I built a RESTful API using Flask + PostgreSQL, and implemented the messaging ' +
              'interface using React.js. A bit further down the line, I was able to write Postgres queries to analyse usage statistics to better ' +
              'inform stylists of the clothing preferences for a given user.',
            imageUrl: '../static/img/txtadvice-logo.png',
          },
        ],
      },
      education: {
        heading: 'Education',
        items: [
          {
            timeFrame: 'Sep 2015 - May 2019',
            school: 'UMass Amherst',
            location: 'Amherst, MA',
            major: 'Computer Science and Mathematics (BS)',
            description: 'umass amherst school',
            imageUrl: '../static/img/umass-logo.png',
            courses: [
              'Software Engineering',
              'Digital Forensics',
              'Operating Systems',
              'Artificial Intelligence',
              'Natural Language Processing',
              'Machine Learning',
              'Ordinary Differential Equations',
              'Intro to Abstract Algebra',
              'Mathematics of Finance',
              'Applied Linear Algebra',
              'Intro to Scientific Computing',
              'Combinatorics & Graph Theory',
            ],
            gpa: '3.94/4.0',
          },
        ],
      },
      awards: {
        heading: 'Awards',
        items: [
          {
            timeFrame: 'Oct 2017',
            event: 'Hack UMass V',
            location: 'Amherst, MA',
            award: 'Multiple Awards',
            description:
              'Worked in a team of 4 students to build Pharmasuitable, a pharmaceutical health monitoring ' +
              'web application that assists the elderly by maintaining a record of medication history. The website is hooked up to a "smart" ' +
              'pill box, which uses Arduino sensors to automatically keep track of which medications need to be taken throughout the week. This project ' +
              'won "Most Creative Health Hack", "Best Website/Web App", "Best Amazon Lex Hack", and the "Lutron Sponsored Challenge".',
            imageUrl: '../static/img/hackumass-logo5.png',
            awardUrl: 'https://devpost.com/software/pharmasuitable-shf3cx',
          },
          {
            timeFrame: 'Oct 2015',
            event: 'Hack UMass III',
            location: 'Amherst, MA',
            award: '3rd Place',
            description:
              'Worked in a team of 4 students to build Scopium, an iOS application utilizing Arduino sensors to ' +
              'monitor multiple sclerosis symptoms in patients. Integrated raw Arduino data from servo motors, heartbeat sensors, ' +
              'perspiration monitors and motion sensors to provide real-time symptom feedback to patients using the application. ' +
              'Our team won third place overall out of roughly 50 teams and over 500 contestants from all over the country.',
            imageUrl: '../static/img/hackumass-logo.png',
            awardUrl: 'https://devpost.com/software/scopium',
          },
          {
            timeFrame: 'April 2015',
            event: 'NJ SkillsUSA State Championships',
            location: 'Bridgewater, NJ',
            award: '2nd Place',
            description:
              'Competed in the 2015 SkillsUSA New Jersey state championships for Java programming. Each contestant was ' +
              'instructed to create a Java applet satisfying certain user stories and performance criteria. I achieved second place out ' +
              'of over 200 contestants from New Jersey.',
            imageUrl: '../static/img/skillsusa-logo.jpeg',
          },
        ],
      },
      skills: {
        heading: 'Skills',
      },
    },
    PORTFOLIO: {
      heading: 'MY WORK',
      cells: [
        {
          title: 'Crypto Backtester',
          tooltip:
            'An open-source cryptocurrency backtesting UI for Coinbase Pro',
          imageUrl: '../static/img/backtester.png',
          projectUrl: 'https://github.com/jrbartola/CryptoBacktester',
        },
        {
          title: 'Crypto-Signal',
          tooltip:
            'An open-source cryptocurrency notification & analysis system',
          imageUrl: '../static/img/cryptosignal.png',
          projectUrl: 'https://github.com/CryptoSignal/crypto-signal',
        },
        {
          title: 'Pharmasuitable',
          tooltip:
            'A pharmaceutical health monitoring dashboard for medication magement. Created at Hack UMass V',
          imageUrl: '../static/img/pharmasuitable.png',
          projectUrl: 'https://devpost.com/software/pharmasuitable-shf3cx',
        },
        {
          title: 'Medicus',
          tooltip:
            'A medical iOS application designed to use image recognition to diagnose various skill ailments. Created at Hack UMass IV',
          imageUrl: '../static/img/medicus-iphones.png',
          projectUrl: 'https://devpost.com/software/medicus',
        },
        {
          title: 'Scopium',
          tooltip:
            'A mobile health application that uses Arduino sensors to monitor multiple sclerosis symptoms in patients. Created at Hack UMass III',
          imageUrl: '../static/img/scopium-iphone.png',
          projectUrl: 'https://devpost.com/software/scopium',
        },
        {
          title: 'Wave Calendar',
          tooltip:
            "Don't have anything to do this weekend? Use Wave Calendar, a web application designed to help find parties in your area!",
          imageUrl: '../static/img/wavecalendar.jpg',
          projectUrl: 'https://github.com/jrbartola/WaveCalendar',
        },
        {
          title: 'Boggle Solver',
          tooltip:
            'Ever wondered what it would look like to find every possible word in a game of Boggle? Think no more!',
          imageUrl: '../static/img/boggle.jpg',
          projectUrl: 'https://github.com/jrbartola/BoggleSolver',
        },
        {
          title: 'Word Search Solver',
          tooltip:
            'I used to love word searches when I was younger. I decided to use some functional programming concepts to write a program that solves one!',
          imageUrl: '../static/img/wordsearch.png',
          projectUrl: 'https://github.com/jrbartola/Wordsearch-Solver',
        },
      ],
    },
  },
};

export default Strings;

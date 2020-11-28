import * as React from 'react';
import WebpImage from '../common/WebpImage';
import { EducationItem as EducationItemType } from '../../types';

interface CourseListProps {
  courses: string[];
}

const getSplitCourses = (courses: string[]) => {
  const halfWay = Math.ceil(courses.length / 2);

  return [courses.slice(0, halfWay), courses.slice(halfWay)];
};

const EducationItem = (props: EducationItemType) => {
  const [leftCourses, rightCourses] = getSplitCourses(props.courses);

  return (
    <div className="education-item">
      <div className="row">
        <div className="col-sm-4 edu-info">
          <h4 className="edu-timeframe">{props.timeFrame}</h4>
          <h4 className="edu-school">{props.school}</h4>
          <p className="edu-gpa">GPA: {props.gpa}</p>
          <p className="edu-location">
            <i className="fas fa-map-marker-alt"></i> {props.location}
          </p>
          {props.image && (
            <WebpImage
              className="school-logo"
              src={props.image.webp}
              fallback={props.image.fallback}
              alt="School Logo"
            />
          )}
        </div>
        <div className="col-sm-8">
          <h4 className="edu-title">{props.major}</h4>
          <div className="row">
            <div className="col-sm-6">
              <CourseList courses={leftCourses} />
            </div>
            <div className="col-sm-6">
              <CourseList courses={rightCourses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseList = ({ courses }: CourseListProps) => {
  return (
    <ul className="course-list">
      {courses.map((course) => (
        <li key={course}>{course}</li>
      ))}
    </ul>
  );
};

export default EducationItem;

import * as React from 'react';
import WebpImage from '../common/WebpImage';
import { ExperienceItem } from '../../types';

const ExperienceItem = (props: ExperienceItem) => {
  return (
    <div className="experience-item">
      <div className="row">
        <div className="col-sm-4 job-info">
          <h4 className="job-timeframe">{props.timeFrame}</h4>
          <h4 className="job-company">{props.company}</h4>
          <p className="job-location">
            <i className="fas fa-map-marker-alt"></i> {props.location}
          </p>
          {props.image && (
            <WebpImage
              className="company-logo"
              src={props.image.webp}
              fallback={props.image.fallback}
              alt={`${props.company} logo`}
              width={150}
              height={150}
            />
          )}
        </div>
        <div className="col-sm-8">
          <h4 className="job-title">{props.jobTitle}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;

import * as React from 'react';

import { AwardItem as AwardItemType } from '../types';

const AwardItem = (props: AwardItemType) => {
  return (
    <div className="award-item">
      <div className="row">
        <div className="col-sm-4 award-info">
          <h4 className="award-timeframe">{props.timeFrame}</h4>
          <h4 className="award-title">{props.event}</h4>

          <p className="award-location">
            <i className="fas fa-map-marker-alt"></i> {props.location}
          </p>

          {props.imageUrl && (
            <img className="event-logo" src={props.imageUrl} alt="Event Logo" />
          )}
        </div>
        <div className="col-sm-8">
          {props.awardUrl && (
            <a href={props.awardUrl} target="_blank">
              <h4 className="award-title">
                {props.award} <i className="fas fa-link"></i>
              </h4>
            </a>
          )}
          {!props.awardUrl && <h4 className="award-title">{props.award}</h4>}
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AwardItem;

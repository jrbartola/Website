import * as React from 'react';
import { PortfolioCell } from '../../types';

interface PortfolioRowProps {
  leftCell: PortfolioCell;
  rightCell?: PortfolioCell;
}

const PortfolioRow = ({ leftCell, rightCell }: PortfolioRowProps) => {
  return (
    <div className="row">
      <div className="col-md-6 portfolio-left">
        <div
          className="portfolio-cell-outer"
          style={{
            backgroundImage: `url("${leftCell.image.webp}"), url("${leftCell.image.fallback}")`,
          }}
        >
          <div className="portfolio-cell">
            <a href={leftCell.projectUrl} target="_blank" rel="noopener">
              <h3 className="portfolio-title">{leftCell.title}</h3>
              <p>{leftCell.tooltip}</p>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 portfolio-right">
        {rightCell !== undefined && (
          <div
            className="portfolio-cell-outer"
            style={{
              backgroundImage: `url("${rightCell.image.webp}"), url("${rightCell.image.fallback}")`,
            }}
          >
            <div className="portfolio-cell">
              <a href={rightCell.projectUrl} target="_blank" rel="noopener">
                <h3 className="portfolio-title">{rightCell.title}</h3>
                <p>{rightCell.tooltip}</p>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioRow;

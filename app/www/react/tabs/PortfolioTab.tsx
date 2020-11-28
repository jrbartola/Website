import * as React from 'react';

import Strings from '../constants/Strings';
import { PortfolioCell } from '../types';
import PortfolioRow from './PortfolioRow';

const makePortfolioCellPairs = (portfolioCells: PortfolioCell[]) => {
  let cellPairs = [];

  // Group each of the cells into pairs of two
  for (let i = 0; i < portfolioCells.length / 2; i++) {
    cellPairs.push(portfolioCells.slice(2 * i, 2 * (i + 1)));
  }

  return cellPairs;
};

const PORTFOLIO_CELL_PAIRS = makePortfolioCellPairs(
  Strings.tabs.PORTFOLIO.cells
);

const PortfolioTab = () => {
  return (
    <div id="portfolio">
      <div className="carousel-header">
        <h2>{Strings.tabs.PORTFOLIO.heading}</h2>
      </div>
      {PORTFOLIO_CELL_PAIRS.map(([leftCell, rightCell], i) => (
        <PortfolioRow key={i} leftCell={leftCell} rightCell={rightCell} />
      ))}
    </div>
  );
};

PortfolioTab.displayName = 'Portfolio';

export default PortfolioTab;

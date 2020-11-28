import * as React from 'react';

import HomeTab from '../tabs/HomeTab';
import ResumeTab from '../tabs/ResumeTab';
import PortfolioTab from '../tabs/PortfolioTab';
import ContactTab from '../tabs/ContactTab';
import { getWindowWidth } from '../util/windowUtils';
import CarouselTabs from '../constants/CarouselTabs';

interface CarouselProps {
  selectedTab: CarouselTabs;
}

const TabContentComponents = {
  [CarouselTabs.HOME]: HomeTab,
  [CarouselTabs.RESUME]: ResumeTab,
  [CarouselTabs.PORTFOLIO]: PortfolioTab,
  [CarouselTabs.CONTACT]: ContactTab,
};

/**
 * Defines the carousel container displaying the selected tab's data
 */
const Carousel = ({ selectedTab }: CarouselProps) => {
  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth());

  const updateWindowWidth = React.useCallback(() => {
    setWindowWidth(getWindowWidth());
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
  }, []);

  const TabContent = TabContentComponents[selectedTab];

  return (
    <div className="row carousel-container">
      <div id="carousel">
        {/* If the width is < 692px, then allow mobile user to scroll through the carousel */}
        {windowWidth >= 692 && <TabContent />}
        {windowWidth < 692 && (
          <div>
            {Object.entries(TabContentComponents).map(
              ([tabName, ContentComponent]) => (
                <ContentComponent key={tabName} />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;

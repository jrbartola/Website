import * as React from 'react';
import loadable from '@loadable/component';

import { getWindowWidth } from '../util/windowUtils';
import CarouselTabs from '../constants/CarouselTabs';

const HomeTab = loadable(
  () => import(/* webpackChunkName: "HomeTab" */ './tabs/HomeTab')
);
const ResumeTab = loadable(
  () => import(/* webpackChunkName: "ResumeTab" */ './tabs/ResumeTab')
);
const PortfolioTab = loadable(
  () => import(/* webpackChunkName: "PortfolioTab" */ './tabs/PortfolioTab')
);
const ContactTab = loadable(
  () => import(/* webpackChunkName: "ContactTab" */ './tabs/ContactTab')
);

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

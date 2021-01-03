import * as React from 'react';

import Navbar from './Navbar';
import InfoPane from './InfoPane';
import Carousel from './Carousel';
import CarouselTabs from '../constants/CarouselTabs';

const Container = () => {
  const [selectedTab, setSelectedTab] = React.useState<CarouselTabs>(
    CarouselTabs.HOME
  );

  return (
    <div id="container" className="container-fluid">
      <Navbar selectedTab={selectedTab} onTabClick={setSelectedTab} />
      <div className="row">
        <div className="col-md-4">
          <InfoPane />
        </div>
        <div className="col-md-8 content-carousel">
          <Carousel selectedTab={selectedTab} />
        </div>
      </div>
    </div>
  );
};

export default Container;

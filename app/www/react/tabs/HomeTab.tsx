import * as React from 'react';
import Strings from '../constants/Strings';

const HomeTab = () => {
  return (
    <div id="home">
      <div className="carousel-header">
        <h2>{Strings.tabs.HOME.heading}</h2>
      </div>
      {Strings.tabs.HOME.bio.map((paragraph, i) => (
        <p key={i} className="bio">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

HomeTab.displayName = 'Home';

export default HomeTab;

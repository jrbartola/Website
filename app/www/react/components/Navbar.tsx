import * as React from 'react';
import CarouselTabs from '../constants/CarouselTabs';

interface NavProps {
  selectedTab: CarouselTabs;
  onTabClick: (tab: CarouselTabs) => void;
}

interface NavItemProps {
  caption: string;
  iconClass: string;
  selected: boolean;
  onClick: () => void;
  tabIndex?: number;
}

const NavItemTabProps = {
  [CarouselTabs.HOME]: {
    iconClass: 'fa-home',
  },
  [CarouselTabs.RESUME]: {
    iconClass: 'fa-address-card',
  },
  [CarouselTabs.PORTFOLIO]: {
    iconClass: 'fa-book-open',
  },
  [CarouselTabs.CONTACT]: {
    iconClass: 'fa-envelope',
  },
};

const Navbar = ({ selectedTab, onTabClick }: NavProps) => {
  const coverOffsetClass = `tab-${selectedTab}`;

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className={`nav-item-cover ${coverOffsetClass}`}></div>

      <div className="collapse navbar-collapse">
        <div className="divider" />
        {Object.keys(NavItemTabProps).map((tabName, i) => (
          <React.Fragment key={tabName}>
            <NavItem
              tabIndex={0}
              selected={selectedTab === tabName}
              onClick={() => onTabClick(tabName as CarouselTabs)}
              caption={tabName}
              {...NavItemTabProps[tabName]}
            />
            <div className="divider" />
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

const NavItem = ({
  selected,
  onClick,
  iconClass,
  caption,
  tabIndex,
}: NavItemProps) => {
  const selectedClass = selected ? 'selected' : '';
  return (
    <div
      className={`nav-item flex-column ${selectedClass}`}
      role="button"
      aria-label={caption}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      <i className={`fas ${iconClass} nav-icon`}></i>
      <span className="nav-link">{caption}</span>
    </div>
  );
};

export default Navbar;

import * as React from 'react';

import { Navbar } from './navbar';
import { InfoPane } from './info-pane';
import { Carousel } from './carousel';

interface ContainerProps {}
interface ContainerState {
  selectedTab: number;
}

/**
 * Defines the container object for our React application
 */
export class Container extends React.Component<ContainerProps, ContainerState> {
  constructor(props) {
    super(props);

    this.onTabClick = this.onTabClick.bind(this);

    this.state = { selectedTab: 0 };
  }

  /**
   * Updates the navbar state when a given tab is clicked on
   * @param {number} tabNum: The number of the tab that was clicked on
   *
   */
  onTabClick(tabNum: number): void {
    return this.setState({ selectedTab: tabNum });
  }

  render() {
    return (
      <div id="container" className="container-fluid">
        <Navbar
          selectedTab={this.state.selectedTab}
          onTabClick={this.onTabClick}
        />
        <div className="row">
          <div className="col-md-4">
            <InfoPane />
          </div>
          <div className="col-md-8 content-carousel">
            <Carousel selectedTab={this.state.selectedTab} />
          </div>
        </div>
      </div>
    );
  }
}

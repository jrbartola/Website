import * as React from 'react';
import {Home} from "./home";
import {Resume} from "./resume";


interface CarouselProps { selectedTab: number }
interface CarouselState {}

/**
 * Defines the carousel container displaying the selected tab's data
 */
export class Carousel extends React.Component<CarouselProps, CarouselState> {
	constructor(props) {
		super(props);

		this.makeContent = this.makeContent.bind(this);
	}

	/**
	 * Creates the content within the carousel based on which nav tab is currently selected
	 */
	private makeContent(): JSX.Element {
        switch (this.props.selectedTab) {
			case 0:
				return <Home />;
			case 1:
				return <Resume />;
			case 2:
				// return <Portfolio />;
			case 3:
				// return <Contact />;
			default:
				// Shouldn't happen
				return <div></div>;
		}
	}


	render() {
		return (
			<div className="row">
				<div id="carousel">
					{ this.makeContent() }
				</div>
			</div>
		)
	}
}
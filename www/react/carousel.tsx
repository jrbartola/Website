import * as React from 'react';
import {Home} from "./home";
import {Resume} from "./resume";
import {Portfolio} from "./portfolio";
import {Contact} from "./contact";


interface CarouselProps { selectedTab: number }
interface CarouselState { windowWidth: number }

/**
 * Defines the carousel container displaying the selected tab's data
 */
export class Carousel extends React.Component<CarouselProps, CarouselState> {
	constructor(props) {
		super(props);

		this.makeContent = this.makeContent.bind(this);
		this.updateWindowWidth = this.updateWindowWidth.bind(this);

		const width = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;

		this.state = { windowWidth: width };
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateWindowWidth);
	}

	/**
	 * Updates the window width state variable when the window is resized
	 */
	updateWindowWidth() {
		const width = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;
		this.setState({windowWidth: width});
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
				return <Portfolio />;
			case 3:
				return <Contact />;
			default:
				// Shouldn't happen
				return <div></div>;
		}
	}


	render() {
        const width = this.state.windowWidth;

		return (
			<div className="row carousel-container">
				<div id="carousel">
					{/* If the width is < 692px, then allow mobile user to scroll through the carousel */}
					{ width >= 692 && this.makeContent() }
					{ width < 692 &&
					  <div>
						  <Home />
					    <Resume />
						  <Portfolio />
							<Contact />
					  </div>
					}
				</div>
			</div>
		)
	}
}
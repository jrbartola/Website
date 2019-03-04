import * as React from 'react';

import { Navbar } from './navbar';

interface ContainerProps {}
interface ContainerState {}

/**
 * Defines the container object for our React application
 */
export class Container extends React.Component<ContainerProps, ContainerState> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="container" className="container-fluid">
			    <Navbar />
			</div>
		)
	}
}
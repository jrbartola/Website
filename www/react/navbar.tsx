import * as React from 'react';

interface NavProps {}
interface NavState { selectedTab: number }

interface NavItemProps {caption: string, iconClass: string}

export class Navbar extends React.Component<NavProps, NavState> {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				{/*<a className="navbar-brand" href="#">Jesse</a>*/}

				<div className="collapse navbar-collapse">
					<div className="divider"></div>
                    <NavItem caption="HOME" iconClass="fa-home" />
					<div className="divider"></div>
					<NavItem caption="RESUME" iconClass="fa-address-card" />
					<div className="divider"></div>
					<NavItem caption="PORTFOLIO" iconClass="fa-book-open" />
					<div className="divider"></div>
					<NavItem caption="CONTACT" iconClass="fa-envelope" />
					<div className="divider"></div>
				</div>
			</nav>
		)
	}
}

/**
 * Functional component that renders a nav item with the given caption and icon class
 *
 * @param {NavItemProps} props
 * @constructor
 */
const NavItem = (props: NavItemProps) => {
    return <div className="nav-item flex-column">
		       <i className={`fas ${props.iconClass} nav-icon`}></i>
		       <span className="nav-link" href="#">{props.caption}</span>
		   </div>
};
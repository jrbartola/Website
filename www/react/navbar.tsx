import * as React from 'react';

interface NavProps { selectedTab: number, onTabClick: (tabNum: number) => void }
interface NavState { }

interface NavItemProps { caption: string, iconClass: string, selected: boolean, onClick: () => void }

export class Navbar extends React.Component<NavProps, NavState> {
	constructor(props) {
		super(props);

		this.state = {selectedTab: 0}

	}

	render() {
		const tabNo = this.props.selectedTab;
		const onTabClick = this.props.onTabClick;

		const coverOffsetClass = `tab-${tabNo}`;

		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				{/*<a className="navbar-brand" href="#">Jesse</a>*/}

				<div className={`nav-item-cover ${coverOffsetClass}`}>
				</div>

				<div className="collapse navbar-collapse">
					<div className="divider"></div>
                    <NavItem caption="HOME" iconClass="fa-home" selected={tabNo === 0}
					         onClick={() => onTabClick(0)}/>
					<div className="divider"></div>
					<NavItem caption="RESUME" iconClass="fa-address-card" selected={tabNo === 1}
					         onClick={() => onTabClick(1)}/>
					<div className="divider"></div>
					<NavItem caption="PORTFOLIO" iconClass="fa-book-open" selected={tabNo === 2}
					         onClick={() =>onTabClick(2)}/>
					<div className="divider"></div>
					<NavItem caption="CONTACT" iconClass="fa-envelope" selected={tabNo === 3}
					         onClick={() => onTabClick(3)}/>
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
	const selectedClass = props.selected ? "selected" : "";
    return <div className={`nav-item flex-column ${selectedClass}`} onClick={props.onClick}>
		       <i className={`fas ${props.iconClass} nav-icon`}></i>
		       <span className="nav-link">{props.caption}</span>
		   </div>
};
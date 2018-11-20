import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="bg-info valuation-report-nav" expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#overview">Overview</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#propertyPerformance">Property Performance</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#comparableSoldCards">Sold Comparables</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#comparableRentalCards">Rental Comparables</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#localPropertyInfo">Local Property Factors</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
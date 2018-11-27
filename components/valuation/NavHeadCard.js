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

class NavHeadCard extends React.Component {
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
                <Navbar className="valuation-report-nav primary-secondary-default-colours" expand="md" style={{backgroundColor:this.props.backgroundColor}}>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto mr-auto" navbar>
                            <NavItem>
                                <NavLink href="#overview">Overview  </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#property-performance">Property Performance  </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#comparable-sold-cards">Sold Comparables  </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#comparable-rental-cards">Rental Comparables  </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#local-property-info">Local Property Factors</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavHeadCard;
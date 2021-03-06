import { Link } from '../routes';
import { Nav, NavItem, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import _ from 'lodash';

class PropertyMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dropdownOpen: false,
            currentPage: this.props.url,
            urlTitles: {
                "property": "Profile",
                "broadband": "Broadband",
                "crime-data": "Crime",
                "sold-prices": "Prices",
                "epc": "Energy",
                "local-area": "Local Area",
                // "property-stats": "Property Stats",
                // "culture": "Culture"
            }
        };
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return(
            <div className="col-12" id="property-menu-container">
                <Nav pills  className="full-display-nav">
                    {
                        _.map(this.state.urlTitles, (title, url) => (
                            <NavItem key={url}>
                                <Link route={`/property/${this.props.postcode}/${this.props.number}/${url === "property" ? "" : url}`}>
                                    <a className={ ((this.props.url === `/${url}`) ? 'active' : null) + " nav-link"} >{title}</a>
                                </Link>
                            </NavItem>
                        ))
                    }
                </Nav>
                <ButtonDropdown className="dropdown-display-nav" isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
                    <DropdownToggle caret color="primary">
                    {this.state.urlTitles[this.state.currentPage.substring(1)]}
                    </DropdownToggle>
                    <DropdownMenu>
                        {
                            _.map(this.state.urlTitles, (title, url) => (
                                <DropdownItem key={url}>
                                    <Link route={`/property/${this.props.postcode}/${this.props.number}/${url === "property" ? "" : url}`}>
                                        <a className={ ((this.props.url === `/${url}`) ? 'active' : null) + " nav-link"} >{title}</a>
                                    </Link>
                                </DropdownItem>
                            ))
                        }
                    </DropdownMenu>
                </ButtonDropdown>
          </div>
        );
    }
}

export default PropertyMenu;

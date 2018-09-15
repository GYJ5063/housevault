import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table,
         Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import fetch from "isomorphic-fetch";
import PropertyMenu from "../components/PropertyMenu";
import _ from "lodash"
import moment from "moment";
import Layout from '../components/Layout';
import GoogleMapsWithMarkerClusterer from "../components/GoogleMapsWithMarkerClusterer";

class Crime extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          dropdownOpen: false,
          markers: this.props.markers,
          month: this.props.month,
          crimes: this.props.crimes,
          activeTab: null,
          visibleMarkers: this.props.markers,
          totalCrimeCount: this.props.totalCrimeCount,
          categoriesToDisplay: {
            "Anti social behaviour": "fas fa-spray-can",
            "Criminal damage arson": "fas fa-fire",
            "Other theft": "fas fa-motorcycle",
            "Public order": "fas fa-balance-scale",
            "Violent crime": "fas fa-ambulance"
          }
        };
    }
    componentDidMount(){
        this.toggleTab(this.props.firstCategory);
    }
    toggleDropdown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
        this.filterMarkersByCategory(tab);
      }
    toggleTabForAll() {
        this.setState({
            activeTab: "All"
        });
        const markers = 
            _.reduce(this.state.crimes, (acc, cur) => acc.concat(cur), [])
            .map(c => ({
                lat: parseFloat(c.location.latitude),
                lng: parseFloat(c.location.longitude)
            }));
            
        this.setState({
            visibleMarkers: markers
        });
    }
    filterMarkersByCategory(category) {
        const markers = this.state.crimes[category].map(c => ({
            lat: parseFloat(c.location.latitude),
            lng: parseFloat(c.location.longitude)
        }));

        this.setState({
            visibleMarkers: markers
        });
    }
    async selectMonth(month){
        const unProcessedcrimes = await Crime.getCrimes(this.props.lat, this.props.lng, moment(month,"MMMM YYYY").format("YYYY-MM"));
        const { markers, crimes } = Crime.processCrimes(unProcessedcrimes);
        this.setState({
            markers,
            month,
            crimes
        });
    }
    render() {

        return (
            <div className="container property-crime-container">
                <Layout>
                    <PropertyMenu url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.house_number}/>
                    <div className="container list-page-padding">
                    <div className="row">

                        <div className="col-12">
                            <h4>Crime in {this.props.property.full_address} for {this.state.month}</h4>
                            By month:
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggleDropdown()}>
                                <DropdownToggle caret>{this.state.month}</DropdownToggle>
                                <DropdownMenu
                                    modifiers={{
                                        setMaxHeight: {
                                          enabled: true,
                                          order: 890,
                                          fn: (data) => {
                                            return {
                                              ...data,
                                              styles: {
                                                ...data.styles,
                                                overflow: 'auto',
                                                maxHeight: 200,
                                              },
                                            };
                                          },
                                        },
                                      }}
                                >
                                    {
                                        this.props.dates.map((m, i) => (
                                            <DropdownItem onClick={() => this.selectMonth(m)} key={i}>{m}</DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </ButtonDropdown>
                            <Nav className="crime-cat-tab" tabs>
                                <NavItem>
                                    <NavLink
                                        className={this.state.activeTab === "All" ? 'active' : ''}
                                        onClick={() => { this.toggleTabForAll(); }}
                                    >
                                    <i className="fas fa-globe"></i>
                                    {`All (${this.state.totalCrimeCount})`}
                                    </NavLink>
                                </NavItem>
                                {
                                    _.map(this.state.categoriesToDisplay, (val, key) => (
                                        <NavItem key={key}>
                                            <NavLink
                                                className={this.state.activeTab === key ? 'active' : ''}
                                                onClick={() => { this.toggleTab(key); }}
                                            >
                                            <i className={val}></i>
                                            {`${key} (${this.state.crimes[key].length})`}
                                            </NavLink>
                                        </NavItem>
                                ))}
                            </Nav>
                            <GoogleMapsWithMarkerClusterer markers={this.state.visibleMarkers} />
                            <TabContent activeTab={this.state.activeTab}>
                            {
                                _.map(this.state.crimes, (val, key) => (
                                    <TabPane key={key} tabId={key}>
                                        <div className="property-crime-crimes-container">
                                            <Table className="property-crime-crimes-table">
                                                <thead>
                                                <tr>
                                                    <th>Crime Type</th>
                                                    <th>Location</th>
                                                </tr>
                                                </thead>
                                                <tbody >
                                                { val.map((crime, i) => (

                                                        <tr key={i}>
                                                            <td>{_.capitalize(crime.category.replace(/-/g, ' ')) }</td>
                                                            <td>{crime.location.street.name}</td>
                                                        </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </TabPane>
                            ))}
                            </TabContent>
                    </div>
                        </div>
                    </div>
                    </Layout>
                    </div>

        );

    }
}

Crime.getCrimes = async function getCrimes(lat, lng, date){
    const baseUrl = `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lng}`;
    const url = date ? baseUrl + `&date=${date}` : baseUrl;
    const crime = await fetch(url);
    const crimes = await crime.json();
    return crimes;
};

Crime.processCrimes = function processCrimes(crimes){
    console.log(crimes);
    // as the data set may be large 800+, this method only iterates the collection once
    const processedData = crimes.reduce((acc, crime) => {
        acc.markers.push({ 
            lat: parseFloat(crime.location.latitude), lng: parseFloat(crime.location.longitude)
        });
        const category = _.capitalize(crime.category.replace(/-/g, ' '));

        if (!acc.crimes[category]) {
            acc.crimes[category] = [];
        }
        acc.crimes[category].push(crime);

        if(!acc.firstCategory) {
            acc.firstCategory = category;
        }

        return acc;
    }, { markers: [], crimes: {}, firstCategory: null, totalCrimeCount: crimes.length });

    return processedData;
}

Crime.getInitialProps = async ({ req, query: { postcode, address } }) => {
    const res = await fetch(process.env.BACKEND_URL + "address/" + postcode + "/" + address);
    const json = await res.json();

    const property = json.data;
    const { lat, lng } = property;

    const unProcessedCrimes = await Crime.getCrimes(lat, lng);
    const { crimes, markers, firstCategory, totalCrimeCount } = Crime.processCrimes(unProcessedCrimes);

    const datesReq = await fetch("https://data.police.uk/api/crimes-street-dates");
    const datesWithCrimes = await datesReq.json();
    const dates = datesWithCrimes.map(d => moment(d.date, "YYYY-MM").format("MMMM YYYY"));

    const month = moment(_.first(unProcessedCrimes).month,"YYYY-MM").format("MMMM YYYY");

    return { 
        property, prices: property.prices.data, crimes, month,
        markers, lat, lng, dates, firstCategory, totalCrimeCount
    }
};

export default Crime;
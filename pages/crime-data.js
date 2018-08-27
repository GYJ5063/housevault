import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from 'reactstrap';
import fetch from "isomorphic-fetch";
import PropertySidebar from "../components/PropertySidebar";
import _ from "lodash";
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
          crimes: this.props.crimes
        };
    }

    toggleDropdown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }

    async getCrimes(lat, lng, date){
        const baseUrl = `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lng}`;
        const url = date ? baseUrl + `&date=${date}` : "";
        const crime = await fetch(url);
        const crimes = await crime.json();
        return crimes;
    }

    async selectMonth(m){
        const crimes = await this.getCrimes(this.props.lat, this.props.lng, moment(m,"MMMM YYYY").format("YYYY-MM"));

        const markers = crimes.map(c => {
            return { lat: parseFloat(c.location.latitude), lng: parseFloat(c.location.longitude) }
        });

        this.setState({
            markers: markers,
            month: m,
            crimes: crimes
        });
    }
    render() {

        return (
            <div className="container property-crime-container">
                <Layout>
                    <div className="row">
                        <PropertySidebar url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.house_number}/>

                        <div className="col">
                            <h4>Crime in {this.props.property.full_address} for {this.state.month}</h4>
                            <div className="property-crime-crimes-container">
                                <Table className="property-crime-crimes-table">
                                    <thead>
                                    <tr>
                                        <th>Crime Type</th>
                                        <th>Location</th>
                                    </tr>
                                    </thead>
                                    <tbody >
                                    { this.state.crimes.map((crime, i) => (

                                            <tr key={i}>
                                                <td>{_.capitalize(crime.category.replace(/-/g, ' ')) }</td>
                                                <td>{crime.location.street.name}</td>
                                            </tr>

                                    ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <GoogleMapsWithMarkerClusterer markers={this.state.markers} />
                        </div>
                    </div>
                </Layout>
            </div>
        );

    }
}

Crime.getInitialProps = async ({ req, query: { postcode, address } }) => {

    const res = await fetch(process.env.BACKEND_URL + "address/" + postcode + "/" + address);
    const json = await res.json();
    const property = json.data;
    const { lat, lng } = property;

    const crimeReq = await fetch(`https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lng}`);
    const crimes = await crimeReq.json();

    const datesReq = await fetch("https://data.police.uk/api/crimes-street-dates");
    const datesWithCrimes = await datesReq.json();
    const dates = datesWithCrimes.map(d => moment(d.date, "YYYY-MM").format("MMMM YYYY"));

    const markers = crimes.map(c => {
        return { lat: parseFloat(c.location.latitude), lng: parseFloat(c.location.longitude) }
    });
    const month = moment(_.first(crimes).month,"YYYY-MM").format("MMMM YYYY");
    return { property, prices: property.prices.data, crimes, month, markers, lat, lng, dates }
};

export default Crime;
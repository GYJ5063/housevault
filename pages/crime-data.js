import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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

    getMonthsForYear(year){
        // TODO
        return [...Array(6).keys()]
                .map(m => moment(`${year}-${++m}`,"YYYY-MM").format("MMMM YYYY"));
    }

    toggle() {
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
            <div className="container list-page-padding">
                <Layout>
                    <div className="row">
                        <PropertySidebar url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.house_number}/>

                        <div className="col">
                            <h4>Crime in {this.props.property.full_address} for {this.state.month}</h4>

                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Crime Type</th>
                                    <th>Location</th>
                                </tr>
                                </thead>
                                <tbody >
                                { this.state.crimes.map((crime, i) => (

                                        <tr key={i}>
                                            <td>{crime.location.street.name}</td>
                                            <td>{_.capitalize(crime.category.replace(/-/g, ' ')) }</td>
                                        </tr>

                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
                            <DropdownToggle caret>{this.state.month}</DropdownToggle>
                            <DropdownMenu>
                                {
                                    this.getMonthsForYear("2018").map((m, i) => (
                                        <DropdownItem onClick={() => this.selectMonth(m)} key={i}>{m}</DropdownItem>
                                ))}
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                    <GoogleMapsWithMarkerClusterer markers={this.state.markers} />
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
    const markers = crimes.map(c => {
        return { lat: parseFloat(c.location.latitude), lng: parseFloat(c.location.longitude), month: c.month }
    });
    const month = moment(_.first(crimes).month,"YYYY-MM").format("MMMM YYYY");
    return { property, prices: property.prices.data, crimes, month, markers, lat, lng}
};

export default Crime;
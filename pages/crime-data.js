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
          selectedDate: this.props.month,
          month: this.props.month
        };
    }

    getMonthsForYear(year){
        // TODO
        return [...Array(6).keys()]
                .map(m => `${year}-${++m}`);
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }

    
    async getMarkersByMonth(month){
        const crime = await fetch("https://data.police.uk/api/crimes-street/all-crime?lat="+this.props.lat+"&lng="+ this.props.lng + "&date=" + month );
        const crimeRes = await crime.json();
        const markers = crimeRes.map(c => {
            return { lat: parseFloat(c.location.latitude), lng: parseFloat(c.location.longitude) }
        });

        return markers;
    }
    
    async selectMonth(m){
        const markers = await this.getMarkersByMonth(m);
        this.setState({
            markers: markers,
            selectedDate: m,
            month: m
        });
    }
    render() {

        return (
            <div className="container list-page-padding">
                <Layout>
                    <div className="row">
                        <PropertySidebar url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.house_number}/>

                        <div className="col">
                            <h4>Crime in {this.props.property.full_address} for {moment(this.state.month,"YYYY-MM").format("MMMM YYYY")}</h4>

                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Crime Type</th>
                                    <th>Location</th>
                                </tr>
                                </thead>
                                <tbody >
                                { this.props.crimes.map((crime, i) => (

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
                            <DropdownToggle caret>{this.state.selectedDate}</DropdownToggle>
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
    const { lat, lng } = json.data;
    const crime = await fetch("https://data.police.uk/api/crimes-street/all-crime?lat="+json.data.lat+"&lng="+ json.data.lng);
    const crimeRes = await crime.json();
    const markers = crimeRes.map(c => {
        return { lat: parseFloat(c.location.latitude), lng: parseFloat(c.location.longitude), month: c.month }
    });
    return { property: json.data, prices: json.data.prices.data, crimes: crimeRes, month: _.first(crimeRes).month, markers, lat, lng}
};

export default Crime;
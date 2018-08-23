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
          // doing this for testing as only one month is being returned
          dates: ["2018-03", "2018-04", "2018-05"].concat(this.props.dates),
          selectedDate: "first"
        };
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }

    selectDate(d){
        const visibleMarkers = this.state.markers.map(m => {
            m.month == d ? m.isVisible = true : m.isVisible = false;
            return m;
        });
        console.log(visibleMarkers);
        this.setState({
            selectedDate: d,
            // Assuming all markers are loaded initally
            // filter wont work here
            // need to change the dates to objects with a visibility property instead of removing
            // otherwise can just send a request again and repopulate the markers like that
            dates: this.state.dates.filter(dt => dt != d),
            markers: visibleMarkers
        });
    }
    render() {

        return (
            <div className="container list-page-padding">
                <Layout>
                    <div className="row">
                        <PropertySidebar url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.house_number}/>

                        <div className="col">
                            <h4>Crime in {this.props.property.full_address} for {moment(this.props.month,"YYYY-MM").format("MMMM YYYY")}</h4>

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
                                    this.state.dates.map((m, i) => (
                                        <DropdownItem  onClick={() => this.selectDate(m)} key={i}>{m}</DropdownItem>
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
    const crime = await fetch("https://data.police.uk/api/crimes-street/all-crime?lat="+json.data.lat+"&lng="+ json.data.lng );
    const crimeRes = await crime.json();
    const markers = crimeRes.map(c => {
        return { lat: parseFloat(c.location.latitude), lng: parseFloat(c.location.longitude), id: c.persistent_id, month: c.month, isVisible: true }
    });
    const dates = _.uniqBy(crimeRes, "month").map(c => c.month);
    return { property: json.data, prices: json.data.prices.data, crimes: crimeRes, month: _.first(crimeRes).month, markers, dates }
};

export default Crime;
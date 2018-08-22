import React from "react";
import _ from "lodash";
import StreetView from "../components/StreetView";
import GoogleMaps from "../components/GoogleMaps";
import PropertySidebar from "../components/PropertySidebar";
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout'
class Property extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isMarkerShown: false}

    }

    delayedShowMarker()  {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick() {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }


    componentDidMount( ) {
        this.delayedShowMarker();
    }

    render( ) {
        const marker = {lng: _.toNumber(this.props.address.lng), lat: _.toNumber(this.props.address.lat) };
        return (
            <div className="container list-page-padding">
                <Layout>
                <div className="row">
                    <div className="col">
                        <h2>Property Profile for {this.props.address.full_address}</h2>
                        <p>{ this.props.address.full_address } is in the {this.props.address.postcode_details.data.parlimentary_constituency_name } Constituency</p>
                    </div>
                </div>
                <div className="row">
                    <PropertySidebar url={this.props.url.pathname} postcode={this.props.address.postcode} number={this.props.address.house_number} />
                    <div className="col">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-body">
                                        Estimated Valuation<br />
                                        <h3>{(typeof this.props.address.valuation !== "undefined") ? "£" + this.props.address.valuation.data.predicted_valuation : "None"}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-body">
                                        Last Sold Price<br/>
                                       <h3> {(!_.isNaN(_.meanBy(this.props.address.prices.data, "price"))) ? ("£" + _.round(_.meanBy(this.props.address.prices.data, "price"))) : 'Original Owner'}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-body">
                                        Floor Area<br />
                                        <h3>{(_.first(_.orderBy(this.props.address.epc.data, ['id'], ['desc']))) ? _.first(_.orderBy(this.props.address.epc.data, ['id'], ['desc'])).total_floor_area : 'None'}</h3>
                                    </div>
                                </div>
                            </div>
                            </div>



                        <div className="row " >
                            <div className="col">
                                <div className="streeview">
                                    <StreetView
                                        isMarkerShown={this.state.isMarkerShown}
                                        onMarkerClick={this.handleMarkerClick}
                                        markerPosition={marker}
                                        zoom={2}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4>Locality</h4>
                                <ul className="list-unstyled">
                                    <li>Ward: {this.props.address.postcode_details.data.ward_name}</li>
                                    <li>Town: {this.props.address.town}</li>
                                    <li>Constituency: {this.props.address.postcode_details.data.parlimentary_constituency_name}</li>
                                    <li>Region: {this.props.address.postcode_details.data.region_name}</li>
                                    <li>Local Authority: {this.props.address.postcode_details.data.local_authority_name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </Layout>
            </div>
        );
    }
}

Property.getInitialProps = async ({ req, query: { postcode, address } }) => {
    const res = await fetch(process.env.BACKEND_URL + "address/" + postcode + "/" + address);
    const json = await res.json();
    return { address: json.data }
};

export default Property;

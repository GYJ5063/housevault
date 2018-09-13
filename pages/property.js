import React from "react";
import _ from "lodash";
import StreetView from "../components/StreetView";
import GoogleMaps from "../components/GoogleMaps";
import PropertyMenu from "../components/PropertyMenu";
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout';
import moment from "moment";
import {Link} from '../routes';


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
                <Layout>
                    <PropertyMenu url={this.props.url.pathname} postcode={this.props.address.postcode} number={this.props.address.house_number} />
                    <div className="list-page-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>

                                    <i className="fas fa-map-marker home-marker"></i> Property Profile for {this.props.address.full_address}
                                    </h2>
                            </div>
                        </div>

                        <div className="card-deck">
                            <div className="card">
                                <div className="card-body">
                                        Last Sold Date<br />
                                        <h3> {(!_.isEmpty(this.props.address.prices.data)) ? moment(this.props.address.prices.data[0].sold_date,"DD-MM-YYYY").format("MMM YYYY") : 'Original Owner'}</h3>
                                        <Link route={'/property/'+this.props.address.postcode + '/'+ this.props.address.house_number+'/'+'sold-prices'}>
                                        <a className={ ((this.props.url === '/sold-prices') ? 'active' : null)}>Further Records</a>
                                        </Link>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    Property Size<br/>
                                    <h3>{(_.first(_.orderBy(this.props.address.epc.data, ['id'], ['desc']))) ? _.first(_.orderBy(this.props.address.epc.data, ['id'], ['desc'])).total_floor_area + ' sqm' : 'Awaiting'}</h3>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    Estimated Value<br />
                                    <h3>{(typeof this.props.address.valuation !== "undefined") ? "£" + this.props.address.valuation.data.predicted_valuation : "None"}</h3>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    Last Sold Price<br />
                                    <h3> {(!_.isEmpty(_.first(this.props.address.prices.data))) ? ("£" + _.first(this.props.address.prices.data).price) : 'Original Owner'}</h3>
                                    <Link route={'/property/'+this.props.address.postcode + '/'+ this.props.address.house_number+'/'+'sold-prices'}>
                                        <a className={ ((this.props.url === '/sold-prices') ? 'active' : null)}>Historic Data</a>
                                    </Link>
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
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
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
                    </div>
                    </div>
                </Layout>

        );
    }
}

Property.getInitialProps = async ({ req, query: { postcode, address } }) => {
    const res = await fetch(process.env.BACKEND_URL + "address/" + postcode + "/" + address);
    const json = await res.json();
    return { address: json.data }
};

export default Property;

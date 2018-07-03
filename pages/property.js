import React from "react";
import _ from "lodash";
import StreetView from "../components/StreetView";
import GoogleMaps from "../components/GoogleMaps";
import PropertySidebar from "../components/PropertySidebar";
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
            <div>
                <div className="row">
                    <div className="col-12">
                        <GoogleMaps
                            isMarkerShown={this.state.isMarkerShown}
                            onMarkerClick={this.handleMarkerClick}
                            markerPosition={marker}
                            zoom={11}
                        />
                    </div>
                    <div className="container">
                        <div className="row">


                        <PropertySidebar url={this.props.url.pathname} postcode={this.props.address.postcode} number={this.props.address.house_number}/>
                        <div className="col">
                            <div className="row">
                                { this.props.address.full_address } is in the {this.props.address.postcode_details.data.parlimentary_constituency_name } Constituency
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">Address</h5>
                                                {this.props.address.full_address}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">Locality Information</h5>
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
                                <div className="col">
                                    <StreetView
                                        isMarkerShown={this.state.isMarkerShown}
                                        onMarkerClick={this.handleMarkerClick}
                                        markerPosition={marker}
                                        zoom={11}
                                    />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
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

import React from "react";
import _ from "lodash";
import Link from 'next/link'
import fetch from "isomorphic-fetch";
import GoogleMaps from "../components/GoogleMaps";

class Street extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isMarkerShown: false}

    }

    delayedShowMarker() {
        setTimeout(() => {
            this.setState({isMarkerShown: true})
        }, 3000)
    }

    handleMarkerClick() {
        this.setState({isMarkerShown: false});
        this.delayedShowMarker()
    }


    componentDidMount() {
        this.delayedShowMarker()
    }

    pricesList(prices) {
        let price = null;

        if (!_.isEmpty(prices)) {
            price = prices.map(function (p) {
                return (
                    <div key={p.id}>
                        {p.sold_date} - &pound;{p.price}
                    </div>
                );
            });
        }

        return price;
    }

    addressList(addresses) {

        if (!_.isEmpty(addresses)) {

            addresses.data.map(function (address) {
                return (
                    <div key={address.id} className="row">
                        <div className="col-6">
                            <h6>{address.full_address}</h6>
                            {this.pricesList(address.prices.data)}
                        </div>
                        <div className="col text-right">
                            <h5>{(address.valuation && housePriceIndex.index) ? 'Estimated Value £' + _.round(_.multiply(_.divide(parseInt(address.valuation.data.predicted_valuation), 100), parseInt(housePriceIndex.index))).toLocaleString() :
                                <button className="btn btn-primary">Request Valuation</button>}</h5>
                        </div>
                        <div className="col text-right">
                            <h5>
                                <Link
                                    className="btn btn-success"
                                    to={`/address/${ address.postcode }/${ address.house_number }`}
                                >
                                    View Property
                                </Link>
                            </h5>
                        </div>
                    </div>


                )
            })
        }
    }

    render() {
        if (_.isEmpty(this.props.addresses)) {
            return null;
        }

        const housePriceIndex = _.orderBy(this.props.addresses.hpi, ["date"], ["desc"])[0][0];
        const {addresses} = this.props.addresses;
        let self = this;
        let marker = {lng: parseInt(this.props.addresses.lng), lat: parseInt(this.props.addresses.lat)};

        return (
            <div>
                <div className="row">
                    <div className="col">
                        <GoogleMaps
                            isMarkerShown={this.state.isMarkerShown}
                            onMarkerClick={this.handleMarkerClick}
                            markerPosition={marker}
                            zoom={11}
                        />
                    </div>
                </div>
                <div className="container">
                    {addresses.data.map((address) => (
                        <div key={address.id} className="row">
                            <div className="col-6">
                                <h6>{address.full_address}</h6>
                                {self.pricesList(address.prices.data)}
                            </div>
                            <div className="col text-right">
                                <h5>{(address.valuation && housePriceIndex.index) ? 'Estimated Value £' + _.round(_.multiply(_.divide(parseInt(address.valuation.data.predicted_valuation), 100), parseInt(housePriceIndex.index))).toLocaleString() :
                                    <button className="btn btn-primary">Request Valuation</button>}</h5>
                            </div>
                            <div className="col text-right">
                                <h5>
                                    <a
                                        className="btn btn-success"
                                        href={`/property/${ address.postcode }/${ address.house_number }`}
                                    >
                                        View Property
                                    </a>
                                </h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
Street.getInitialProps = async ({ req , query: { postcode } }) => {
    const res = await fetch("http://www.housevault.test/api/postcode/"+ postcode);
    const json = await res.json();
    return { addresses: json.data }
};
export default Street;

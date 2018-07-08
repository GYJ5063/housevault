import React from "react";
import _ from "lodash";
import Link from 'next/link'
import fetch from "isomorphic-fetch";
import moment from 'moment';
import GoogleMaps from "../components/GoogleMaps";
import LocalAreaList from "../components/LocalAreaList";

class Street extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isMarkerShown: false, localAreaLoading:false, localArea:[], propertyDataLoading:false, property:[]}

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
        this.delayedShowMarker();
        this.getLocalArea(this.props.postcode);
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

    getLocalArea(postcode) {
        this.setState({localAreaLoading:true});
        let self = this;

        fetch(process.env.BACKEND_URL + "postcode/"+ postcode + '/localarea')
            .then(function(response) {
               return response.json();
        }).then(function(localArea) {

            self.setState(prevState => ({
                localAreaLoading: false,
                localArea: [...prevState.localArea,localArea]
            }));
        });
    }

    getPropertyGraphs(postcode) {
        this.setState({propertyGraphsLoading:true});
        let self = this;

        fetch(process.env.BACKEND_URL + "postcode/"+ postcode + '/property')
            .then(function(response) {
                return response.json();
            }).then(function(propertyData) {

            self.setState(prevState => ({
                propertyGraphsLoading: false,
                propertyData: [...prevState.propertyData,propertyData]
            }));
        });
    }


    render() {
        if (_.isEmpty(this.props.addresses) && _.isEmpty(this.props.sold_prices)) {
            return null;
        }

        const housePriceIndex = _.orderBy(this.props.addresses.hpi, ["date"], ["desc"])[0][0];
        const {addresses} = this.props.addresses;

        let marker = {lng: _.toNumber(this.props.addresses.lng), lat: _.toNumber(this.props.addresses.lat)};
        let localArea = _.head(this.state.localArea);
        return (
            <div>
                <div className="container postcode-page">
                    <div className="row">
                    <div className="col-2">
                        <b>{this.props.postcode}</b>
                        <ul className="list-unstyled">
                            <li>Properties</li>
                            <li>Sold Prices</li>
                            <li>Local Area</li>
                            <li>Crime</li>
                            <li>Broadband</li>
                            <li>People</li>
                            <li>Culture</li>
                        </ul>
                        <ins className="adsbygoogle"
                             style={{display:'block'}}
                             data-ad-client="ca-pub-4216565043840609"
                             data-ad-slot="6643207276"
                             data-ad-format="auto"></ins>
                        <script>
                            (adsbygoogle = window.adsbygoogle || []).push({});
                        </script>
                    </div>
                    <div className="col">
                        <h1>About {this.props.postcode}</h1>
                        <p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci commodi, enim facilis fugiat fugit hic maiores modi nulla quibusdam, recusandae repellat similique sunt tempore temporibus totam veniam. Magnam, omnis.</span><span>Ad alias aliquid animi, distinctio ducimus explicabo facilis iste quidem sit. Accusantium ad, aspernatur doloremque eaque est excepturi fuga ipsum, molestiae neque nobis nulla optio pariatur, provident quas ratione voluptatibus!</span>
                        </p>

                        <GoogleMaps
                            isMarkerShown={this.state.isMarkerShown}
                            onMarkerClick={this.handleMarkerClick}
                            markerPosition={marker}
                            zoom={11}
                        />
                        <br />
                        <h2>Sold Prices</h2>
                        {this.props.sold_prices.map((price) => (
                            <div key={price.id}>
                                <div className="row">
                                    <div className="col">
                                        <h6>{moment(price.sold_date,"YYYY-MM-DD HH:mm:ss").format('Do MMMM YYYY')} - {price.poan} {price.street} <span className="float-right">&pound;{price.price}</span></h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="row">
                            <div className="col text-center">
                                <button className="btn btn-link ">Load More</button>
                            </div>
                        </div>

                        <h2>Local Area</h2>
                        {(!_.isEmpty(localArea)) ?
                        <div >
                            <h3>Closest Primary Schools to this address </h3>
                            <LocalAreaList list={localArea.primary_schools}/>
                        </div> : ''}
                        {(!_.isEmpty(localArea)) ?
                            <div>
                                <h3>Closest Secondary Schools to this address </h3>
                                <LocalAreaList list={localArea.secondary_schools}/>
                            </div>
                         : ''}

                        <h2>Properties</h2>
                        {addresses.data.map((address) => (

                            <div key={address.id}>
                                <div className="row">
                                        <div className="col">
                                            <div className="property-header">
                                            <h6>{address.full_address} <i className="fas fa-caret-right"></i></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <hr />
                                    <div className="col">
                                        <img src={ encodeURI("https://maps.googleapis.com/maps/api/streetview?size=100x100&location="+ address.house_number +"," +address.street +","+ address.postcode+ "&fov=60&pitch=5&key=AIzaSyAcODcVyIBZJhmueCEdpCU7MNlMISDGSkQ")}  className="property-image"/>
                                    </div>
                                    <div className="col">
                                    Last Sold Price<br />
                                         {(!_.isNaN(_.meanBy(address.prices.data,"price"))) ? ("£" + _.meanBy(address.prices.data,"price")) : 'No sales history for this property'}
                                    </div>
                                    <div className="col">
                                    EPC Rating<br />
                                        {(_.first(_.orderBy(address.epc.data,['id'],['desc']))) ? _.first(_.orderBy(address.epc.data,['id'],['desc'])).current_energy_rating : 'None'}
                                    </div>
                                    <div className="col text-right">
                                        <h5>{(address.valuation && housePriceIndex.index) ? 'Estimated Value £' + _.round(_.multiply(_.divide(parseInt(address.valuation.data.predicted_valuation), 100), parseInt(housePriceIndex.index))).toLocaleString() :
                                        <button className="btn btn-primary">Request Valuation</button>}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
Street.getInitialProps = async ({ req , query: { postcode } }) => {
    const res = await fetch(process.env.BACKEND_URL + "postcode/"+ postcode);
    const json = await res.json();
    return { addresses: json.postcode_details.data, sold_prices: json.sold_prices, postcode:postcode }
};
export default Street;

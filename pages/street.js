import React from "react";
import { Collapse, Card, CardBody } from "reactstrap"
import _ from "lodash";
import fetch from "isomorphic-fetch";
import moment from 'moment';
import GoogleMaps from "../components/GoogleMaps";
import CensusHousingType from "../components/census/CensusHousingType";
import CensusHousingTenure from "../components/census/CensusHousingTenure";
import CensusEthnicGroup from "../components/census/CensusEthnicGroup";
import LocalAreaList from "../components/LocalAreaList";
import CensusReligion from "../components/census/CensusReligion";
import CensusAge from "../components/census/CensusAge";
import CensusGender from "../components/census/CensusGender";
import CensusHealth from "../components/census/CensusHealth";
import CensusEducation from "../components/census/CensusEducation";
import {Link} from '../routes'
import Layout from '../components/Layout'
import Head from 'next/head'
import AdSense from "react-adsense";

class Street extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isMarkerShown: false,
            localAreaLoading: false,
            localArea: [],
            propertyDataLoading: false,
            census: [],
            collapsed: 0
        }
    }

    toggleAccordion(index) {
        this.setState({
            collapsed: this.state.collapsed === index ? null : index
        });
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
        this.setState({localAreaLoading: true});
        let self = this;

        fetch(process.env.BACKEND_URL + "postcode/" + _.replace(postcode, ' ', '') + '/localarea')
            .then(function (response) {
                return response.json();
            }).then(function (localArea) {
            self.setState(prevState => ({
                localAreaLoading: false,
                localArea: [...prevState.localArea, localArea]
            }));
        });
    }

    valuationButton(address) {
        if((address.valuation)) {
            return (
                <div>
                    <h5> {'Estimated Value £' + _.round(address.valuation.data.predicted_valuation).toLocaleString() }</h5>
                        <Link route={'/valuation/'+address.id} ><a>Refine</a></Link>
                </div>
            );
        } else {
            return (
                <div>
                    <Link route={'/valuation/'+address.id}  >
                        <a>
                            <button className="btn btn-primary">Request Valuation</button>
                        </a>
                </Link>
                </div>
            )
        }
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
                <Head>
                    <title>Detailed stats for the postcode {_.toUpper(this.props.postcode)} | House Vault</title>
                        <meta name="description" content={"Useful information about " +_.toUpper(this.props.postcode) + " including EPC, Sold Prices, Demographics etc..."} />
                </Head>
                <Layout>
                <div className="container postcode-page">
                    <amp-auto-ads type="adsense" data-ad-client="ca-pub-4216565043840609">
                    </amp-auto-ads>
                    <div className="row">

                        <div className="col">
                            <h1>{_.first(this.props.addresses.addresses.data).postcode} Area Report</h1>
                            <p>
                                <span>Below you will find key statistics including sold prices, property valuations, energy performance, crime and local services for the {_.first(this.props.addresses.addresses.data).street}, {_.first(this.props.addresses.addresses.data).town}, {_.first(this.props.addresses.addresses.data).postcode} area. If you want specific property information select the address under ‘Properties Section’. You can freely use our AVM to generate property valuations and our EnergyVault app to predict a properties efficiency and running costs. </span>
                            </p>

                            <GoogleMaps
                                isMarkerShown={this.state.isMarkerShown}
                                onMarkerClick={this.handleMarkerClick}
                                markerPosition={marker}
                                zoom={11}
                            />
                            <br/>
                            <h2>Demographic Information for {_.first(this.props.addresses.addresses.data).town}, {_.toUpper(this.props.postcode)}</h2>
                            <div className="row">
                                <div className="col">
                                    <CensusHousingType areacode={this.props.addresses.census_code}/>
                                </div>
                                <div className="col">
                                    <CensusHousingTenure areacode={this.props.addresses.census_code}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <CensusEthnicGroup areacode={this.props.addresses.census_code}/>
                                </div>
                                <div className="col">
                                    <CensusReligion areacode={this.props.addresses.census_code}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <CensusAge areacode={this.props.addresses.census_code}/>
                                </div>
                                <div className="col">
                                    <CensusEducation areacode={this.props.addresses.census_code}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <CensusGender areacode={this.props.addresses.census_code}/>
                                </div>
                                <div className="col">
                                    <CensusHealth areacode={this.props.addresses.census_code}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <AdSense.Google
                                        client='ca-pub-4216565043840609'
                                        slot='8158930894'
                                        style={{ display: 'block' }}
                                        format='auto'
                                        responsive='true'
                                    />
                                </div>
                            </div>
                            <h2>Sold Prices</h2>
                            {this.props.sold_prices.map((price) => (
                                <div key={price.id}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td scope="row"><b>{price.poan} {price.street}</b> - Sold
                                                            on <i>{moment(price.sold_date, "YYYY-MM-DD HH:mm:ss").format('Do MMMM YYYY')}</i>
                                                        </td>

                                                        <td className="text-right ">&pound;{price.price}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
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
                                <div>
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
                            {addresses.data.map((address, index) => (

                                <div key={address.id}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="property-header">
                                                <h6 onClick={() => this.toggleAccordion(index)}>{address.full_address}
                                                {
                                                    this.state.collapsed === index ? <i className="fas fa-caret-down"></i> : <i className="fas fa-caret-right"></i>
                                                }
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <Collapse className="property-address-listing" isOpen={this.state.collapsed === index}>
                                        <Card>
                                            <CardBody>
                                                <div className="row">
                                                    <hr/>
                                                    <div className="col">

                                                    </div>
                                                    <div className="col">
                                                        <strong>Last Sold Price</strong><br/>
                                                        {(!_.isNaN(_.meanBy(address.prices.data, "price"))) ? ("£" + _.round(_.meanBy(address.prices.data, "price"))) : 'No sales history for this property'}
                                                    </div>
                                                    <div className="col">
                                                        <strong>Property Size</strong><br/>
                                                        {(_.first(_.orderBy(address.epc.data, ['id'], ['desc']))) ? _.first(_.orderBy(address.epc.data, ['id'], ['desc'])).total_floor_area + ' sqm' : 'Coming Soon'}
                                                    </div>

                                                    <div className="col text-right">
                                                        <ul className="list-unstyled">
                                                            <li>
                                                            <Link route={'/property/'+address.postcode + '/'+ address.house_number }  >
                                                                <a>
                                                                    <button className="btn btn-success property-btn">View Property</button>
                                                                </a>
                                                            </Link>
                                                            </li>
                                                            <li>

                                                            {this.valuationButton(address)}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                </Layout>
            </div>
        );
    }
}

Street.getInitialProps = async ({req, query: {postcode}}) => {
    const res = await fetch(process.env.BACKEND_URL + "postcode/" + _.replace(postcode, ' ', ''));
    const json = await res.json();
    return {addresses: json.postcode_details.data, sold_prices: json.sold_prices, postcode: postcode}
};
export default Street;

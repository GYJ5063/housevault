import React from "react";
import fetch from "isomorphic-fetch";
import _ from "lodash";
import PropertySidebar from "../components/PropertySidebar";
import moment from "moment";
import GoogleMapsWithMarkers from "../components/GoogleMapsWithMarkers";
class SoldPrices extends React.Component {

    render() {

        return (
            <div className="container list-page-padding">
           
                <div className="row">
                    <PropertySidebar url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.house_number}/>
                    <div className="col">
                        <h4>Sold Prices for {this.props.property.full_address}</h4>
                        <p>This property has been sold { _.size(this.props.prices) } times.</p>

                        { this.props.prices.map( ( price ) => (
                            <div key={ price.id } >
                                <div className="row">
                                    <div className="col">
                                        {moment(price.sold_date,"DD-MM-YYYY").format("MMMM YYYY")}
                                    </div>
                                    <div className="col">
                                        &pound;{price.price}
                                    </div>
                                </div>


                            </div>
                        ) ) }
                    </div>
                </div>

            </div>
        );

    }
}
SoldPrices.getInitialProps = async ({ req, query: { postcode, address } }) => {
    const res = await fetch("http://www.housevault.test/api/address/" + postcode + "/" + address);
    const json = await res.json();
    return {property: json.data, prices: json.data.prices.data}
};

export default SoldPrices;
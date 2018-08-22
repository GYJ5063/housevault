import React from "react";
import fetch from "isomorphic-fetch";
import PropertySidebar from "../components/PropertySidebar";
import _ from "lodash"
import moment from "moment";
import Layout from '../components/Layout'

class Crime extends React.Component {

    constructor(props) {
        super(props);
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
    return { property: json.data, prices: json.data.prices.data, crimes: crimeRes, month: _.first(crimeRes).month }
};

export default Crime;
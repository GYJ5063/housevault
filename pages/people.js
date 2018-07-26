import React from "react";
import fetch from "isomorphic-fetch";
import _ from "lodash";
import PropertySidebar from "../components/PropertySidebar";
import Layout from '../components/Layout'
class People extends React.Component {

    render() {

        return (
            <div className="container list-page-padding">
                <Layout>
                <div className="row">
                    <PropertySidebar url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.house_number}/>
                    <div className="col">
                        <h4>Demographics for {this.props.property.full_address}</h4>
                        <h5>Age Groups</h5>

                        <table className="table">
                        { this.props.ageData.map((el,i) => (
                        <tbody key={i}>
                            {
                                Object.entries(el).map(([key, value], j) => (
                                    <tr>
                                        <td>{key}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        ))}
                        </table>
                    </div>
                </div>
                </Layout>
            </div>
        );

    }
}
People.getInitialProps = async ({ req, query: { postcode, address } }) => {
    const res = await fetch(process.env.BACKEND_URL + "address/" + postcode + "/" + address);
    const res_age = await fetch(process.env.BACKEND_URL + "address_people/" + postcode);
    const json_age = await res_age.json();
    const json = await res.json();
    return { property: json.data, prices: json.data.prices.data, ageData: json_age }
};

export default People;
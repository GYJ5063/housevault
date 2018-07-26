import React from "react";
import fetch from "isomorphic-fetch";
import PropertySidebar from "../components/PropertySidebar";
import Layout from '../components/Layout'


class Broadband extends React.Component {
    render() {

        return (
            <div className="container list-page-padding">
                <Layout>
                <div className="row">
                    <PropertySidebar url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.house_number}/>
                    <div className="col">
                        <h4>Broadband in {this.props.property.full_address}</h4>
                        <h5>Broadband</h5>

                        <table className="table">
                            { this.props.broadbandData.map((el,i) => (
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

Broadband.getInitialProps = async ({ req, query: { postcode, address } }) => {
    const res = await fetch(process.env.BACKEND_URL + "address/" + postcode + "/" + address);
    const res_broadband = await fetch(process.env.BACKEND_URL + "address_broadband/" + postcode);
    const json_broadband = await res_broadband.json();
    const json = await res.json();
    return { property: json.data, prices: json.data.prices.data, broadbandData: json_broadband }
};

export default Broadband;
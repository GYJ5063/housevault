import React from "react";
import fetch from "isomorphic-fetch";
import PropertySidebar from "../components/PropertySidebar";
import Layout from '../components/Layout'

class Crime extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.getLastTwoMonths()
        };

        this.callCrimeAPI = this.callCrimeAPI.bind(this);
        this.getLastTwoMonths = this.getLastTwoMonths.bind(this);
    }

    getLastTwoMonths() {
        var x = new Date();
        let last2months = x.getMonth()-1;
        let month = (last2months < 10) ? '0'+last2months.toString() : last2months;
        let currMonth = x.getMonth()+1;
        let year = (last2months > currMonth) ? x.getFullYear()-1 : x.getFullYear();
        let date = year+'-'+month;
        return date;
    }

    callCrimeAPI(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="container list-page-padding">
                <Layout>
                <div className="row">
                    <PropertySidebar url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.house_number}/>

                    <div className="col">
                        <h4>Crime in {this.props.property.full_address}</h4>
                        <h5>Crime Data</h5>

                        { this.props.months.map((el,i) => (
                            <select key={i} value={this.state.value} onChange={this.callCrimeAPI}>
                                {
                                    Object.entries(el).map(([key, value], j) => (
                                        <option value={ value }>{ key }</option>
                                    ))
                                }
                            </select>
                        ))}

                        <table className="table">
                            <thead>
                            <tr>
                                <th>Crime Type</th>
                                <th>Location</th>
                            </tr>
                            </thead>
                            { this.props.crimeData.map((el,i) => (
                                <tbody key={i}>
                                {
                                    Object.entries(el).map(([key, v], j) => (
                                        <tr>
                                            <td>{key}</td>
                                            <td>
                                                <ul>
                                                {
                                                    Object.entries(v).map(([k2, v2], j2) => (
                                                        <li>{ v2 }</li>
                                                    ))
                                                }
                                                </ul>
                                            </td>
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

Crime.getInitialProps = async ({ req, query: { postcode, address } }) => {
    var x = new Date();
    let last2months = x.getMonth()-1;
    let month = (last2months < 10) ? '0'+last2months.toString() : last2months;
    let currMonth = x.getMonth()+1;
    let year = (last2months > currMonth) ? x.getFullYear()-1 : x.getFullYear();
    let date = year+'-'+month;

    const res = await fetch(process.env.BACKEND_URL + "address/" + postcode + "/" + address);
    const res_crime = await fetch(process.env.BACKEND_URL + "address_crime/" + postcode + "/" + address + "/" + date);
    const res_month = await fetch(process.env.BACKEND_URL + "address_month/");
    const json_month = await res_month.json();
    const json_crime = await res_crime.json();
    const json = await res.json();
    return { property: json.data, prices: json.data.prices.data, crimeData: json_crime, months: json_month }
};

export default Crime;
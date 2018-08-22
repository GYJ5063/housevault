import fetch from "isomorphic-fetch";
import React, {Component} from 'react';
import {Router} from '../routes';
import Head from 'next/head';
import AgentTableRow from '../components/AgentTableRow';
import LocalArea from "./local-area";

class OnlineEstateAgentReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', items: ''};
    }
    tabRow() {
        if (this.props.items instanceof Array) {
            return this.props.items.map(function (object, i) {
                return <AgentTableRow obj={object} key={i} />;
            });
        }
    }
    sortBy(field) {
        return '';
    }
    render() {
        return (
                <div className="container">
                    <h1>Online Estate Agent Reviews</h1>
                    <h3>Compare Online Estate Agents</h3>
                    <p>
                        Online real estate agents are a modern innovation, offering all the services a traditional real estate agent does, only via the internet. This way, you get to enjoy lower costs on services than you would with a High Street real estate agent and much more convenience, as you can access the service anywhere via your mobile device or computer. The aim of online real estate agencies is to provide those seeking to transact with property more control over how they can rent or sell, as well as help them save money in the process.
                    </p>
                    <table className="table table-hover">
                        <thead>
                            <tr>                
                                <th className="text-center" onClick={() => this.sortBy('Name')}>Estate Agent <span className="glyphicon glyphicon-sort"></span></th>
                                <th className="text-center" onClick={() => this.sortBy('Cost')}>Basic Package Price <span className="glyphicon glyphicon-sort"></span></th>
                                <th className="text-center" onClick={() => this.sortBy('SalePriceAchieved')}>Sale Price Achieved <span className="glyphicon glyphicon-sort"></span></th>
                                <th className="text-center" onClick={() => this.sortBy('UserRating')}>TrustPilot User Rating <span className="glyphicon glyphicon-sort"></span></th>                
                                <th className="text-center">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.tabRow()}
                        </tbody>
                    </table>
                </div>
                );
    }
}

OnlineEstateAgentReviews.getInitialProps = async ({ req, query: { postcode, address } }) => {
    const res = await fetch(process.env.BACKEND_URL + "agents/items");
    const data = await res.json();
    return { items: data }
};
export default OnlineEstateAgentReviews;

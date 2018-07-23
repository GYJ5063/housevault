import fetch from "isomorphic-fetch";
import React, {Component} from 'react';
import {Router} from '../routes';
import Head from 'next/head';
import CompanyTableRow from '../components/CompanyTableRow';

class PropertyBuyingCompanyReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', items: ''};
    }
    async componentDidMount() {
        const res = await fetch(process.env.BACKEND_URL + "company-reviews/items");
        const data = await res.json();
        this.setState({ items:data });
    }
    tabRow() {
        if (this.state.items instanceof Array) {
            return this.state.items.map(function (object, i) {
                return <CompanyTableRow obj={object} key={i} />;
            });
        }
    }
    sortBy(field) {
        return '';
    }
    render() {
        return (
                <div className="container">
                    <h1>Property Buying Company Reviews</h1>
                    <table className="table table-hover">
                        <thead>
                            <tr>                
                                <th className="text-center" onClick={() => this.sortBy('Company')}>Estate Agent <span className="glyphicon glyphicon-sort"></span></th>                                
                                <th className="text-center" onClick={() => this.sortBy('Company')}>Our Verdict <span className="glyphicon glyphicon-sort"></span></th>
                                <th className="text-center" onClick={() => this.sortBy('User_Rating')}>User Rating <span className="glyphicon glyphicon-sort"></span></th>
                                <th className="text-center">Website</th>
                                <th className="text-center" onClick={() => this.sortBy('Real_Cash_Buyers')}>Real Cash Buyer <span className="glyphicon glyphicon-sort"></span></th>
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

export default PropertyBuyingCompanyReviews;

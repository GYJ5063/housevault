import React, {Component} from 'react';
import ValuationRequestsTable from '../components/ValuationRequestsTable'
import { Container, Row, Column } from 'reactstrap'
import '../styles/private-homepage.scss'
import gql from "graphql-tag";
import {Query} from "react-apollo";


const GET_LEADS = gql`
    {   query report($company_id: ID!){
        leads(company_id: $company_id) {
            first_name,
            last_name,
            email,
            phone_number,
            sales_valuation,
            rental_valuation,
            report_id,
            createdAt,
            updatedAt
        }
        }
    }
`;

const testRequests = [
    {
    first_name: "first",
    last_name: "last",
    email: "firs@last.com",
    phone_number: "12345",
    sales_valuation: 317000,
    rental_valuation: 1025,
    report_id: "12560ec0-f22d-11e8-ad5f-7dd96ea91359",
    createdAt: "1543313603000",
    updatedAt: "1543313603000"
    },
    {
        first_name: "first",
        last_name: "last",
        email: "firs@last.com",
        phone_number: "12345",
        sales_valuation: 317000,
        rental_valuation: 1025,
        report_id: "12560ec0-f22d-11e8-ad5f-7dd96ea91359",
        createdAt: "1543313603000",
        updatedAt: "1543313603000"
    },
    {
        first_name: "first",
        last_name: "last",
        email: "firs@last.com",
        phone_number: "12345",
        sales_valuation: 317000,
        rental_valuation: 1025,
        report_id: "12560ec0-f22d-11e8-ad5f-7dd96ea91359",
        createdAt: "1543313603000",
        updatedAt: "1543313603000"
    },

]


class PrivateHomepage extends Component {

    constructor(props) {
        super(props)
        {/* this.state = {
             leads: [{ "first_name": "first", "last_name": "last", "email": "firs@last.com", "phone_number": "12345", "sales_valuation": 317000, "rental_valuation": 1025, "report_id": "12560ec0-f22d-11e8-ad5f-7dd96ea91359", "createdAt": "1543313603000", "updatedAt": "1543313603000" },{ "first_name": "first", "last_name": "last", "email": "firs@last.com", "phone_number": "12345", "sales_valuation": 317000, "rental_valuation": 680, "report_id": "90746f40-f22d-11e8-ad5f-7dd96ea91359", "createdAt": "1543313814000", "updatedAt": "1543313814000" }],
        }; */}
    }
    render() {
        return (
            <Query query={GET_LEADS} variables={{ company_id: this.props.company_id }}>
                {({ loading, error, leads }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    return (
                        <div className='homepage-container'>
                            <h3>Welcome! This is the private hompage.</h3>
                            <div className='requests-table'>
                                <ValuationRequestsTable leads={this.state.leads}/>
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

console.log(this.leads);
export default PrivateHomepage;

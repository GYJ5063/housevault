import React, { Component } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import LeadsTable from '../components/LeadsTable';
import '../styles/private-homepage.scss';

const GET_LEADS = gql`
    query leads{
        leads {
            first_name
            last_name
            phone_number
            email
            sales_valuation
            rental_valuation
            createdAt
            report_id
        }
    }
`;



class Dashboard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='homepage-container'>
                <h3>Welcome! This is the private hompage.</h3>
                <div className='requests-table'>
                    <Query query={GET_LEADS}>
                        {({ loading, error, data }) => {
                            if (loading) return "Loading...";
                            if (error) return `Error! ${error.message}`;

                            return (
                                data.leads
                                ? <LeadsTable leads={ data.leads } />
                                : null
                            );
                        }}
                    </Query>
                </div>
            </div>
        );
    }
}


export default Dashboard;

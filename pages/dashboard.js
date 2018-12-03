import React, { Component } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HeaderAgentDash from '../components/HeaderAgentDash';

import LeadsTable from '../components/LeadsTable';
import '../styles/private-homepage.scss';

import Head from "next/head";

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
            <main role="main">
                <Head>
                    <title>House Vault Agent Dashboard</title>
                    <meta name="description" content="Dashboard for estate agents." />
                    <HeaderAgentDash />
                </Head>
            <div className='homepage-container'>

                <h3>Dashboard</h3>
                <div className='requests-table'>
                    <Query query={GET_LEADS}>
                        {({ loading, error, data }) => {
                            if (loading) return "Loading...";

                            return <LeadsTable data={ data } error={error}/>;
                        }}
                    </Query>
                </div>
            </div>
            </main>
        );
    }
}


export default Dashboard;

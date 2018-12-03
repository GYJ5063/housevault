import React, { Component } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HeaderAgentDash from '../components/agent-dashboard/HeaderAgentDash';

import LeadsTable from '../components/agent-dashboard/LeadsTable';
import '../styles/agent-dashboard.scss';

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
                <h2>Agent Dashboard</h2>
            <div className='card-deck'>
                <div className='col-md-3 card stats-cards'>
                    <h4>Leads this month</h4>
                    <h2>35</h2>
                </div>
                <div className='col-md-3 card stats-cards'>
                    <h4>Leads last month</h4>
                    <h2>31</h2>
                </div>
                <div className='col-md-3 card stats-cards'>
                    <h4>Hot Leads</h4>
                    <h2>3</h2>
                </div>
                <div className='col-md-3 card stats-cards'>
                    <h4>Conversion rate</h4>
                    <h2>23%</h2>
                </div>
            </div>

                <div className='col-md-12 lead-table'>
                <div className='requests-table'>
                    <h3>Leads Summary</h3>
                    <Query query={GET_LEADS}>
                        {({ loading, error, data }) => {
                            if (loading) return "Loading...";

                            return <LeadsTable data={ data } error={error}/>;
                        }}
                    </Query>
                </div>
            </div>
            </div>
            </main>
        );
    }
}


export default Dashboard;

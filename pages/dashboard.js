import React, { Component } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HeaderAgentDash from '../components/HeaderAgentDash';

import LeadsTable from '../components/LeadsTable';
import '../styles/private-homepage.scss';


import { Router } from '../routes';
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
                            if(error) {
                                if (error.message === 'GraphQL error: Must be logged in.') {
                                    Router.pushRoute('/login');
                                    return null;
                                }
                                else if(error.message === 'GraphQL error: Requires view leads permission.') {
                                    return null;
                                }
                                else {
                                    return `Error! ${error.message}`;
                                };
                            }


                            return (
                                data.leads
                                ? <LeadsTable leads={ data.leads } />
                                : null
                            );
                        }}
                    </Query>
                </div>
            </div>
            </main>
        );
    }
}


export default Dashboard;

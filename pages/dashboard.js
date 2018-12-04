import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HeaderAgentDash from '../components/agent-dashboard/HeaderAgentDash';
// import LeadsTable from '../components/agent-dashboard/LeadsTable';
// import BootstrapTable from 'react-bootstrap-table-next';
import LeadsTable from '../components/agent-dashboard/LeadsTable'
import '../styles/agent-dashboard.scss';
import Head from "next/head";

const GET_LEADS = gql`
    query leads{
        leads {
            id
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
            <main role="main" className="agent-dashboard-page">
                <Head>
                    <title>House Vault Agent Dashboard</title>
                    <meta name="description" content="Dashboard for estate agents." />
                    <HeaderAgentDash />
                </Head>
                <Query query={GET_LEADS}>
                    {
                        ({ loading, error, data }) => {
                        if (loading) return "Loading...";
                        const propertyValueSum = data.leads.reduce((acc, lead) => acc + lead.sales_valuation, 0);
                        const averageValue = propertyValueSum / data.leads.length;
                        const propertyRentalSum = data.leads.reduce((acc, lead) => acc + lead.rental_valuation, 0);
                        const averageRental = propertyRentalSum / data.leads.length;
                        console.log(averageValue);
                        return (
                            <div className='homepage-container'>
                                <h2>Agent Dashboard</h2>
                                <div className='card-deck'>
                                    <div className='col-md-3 card stats-cards'>
                                        <h4>Leads this month</h4>
                                        <h2>{data.leads.length}</h2>
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
                                <div className='card-deck'>
                                    <div className='col-md-6 card stats-cards'>
                                        <h4>Average Property Value</h4>
                                        <h2>£{averageValue.toLocaleString()}</h2>
                                    </div>
                                    <div className='col-md-6 card stats-cards'>
                                        <h4>Average Rental Value</h4>
                                        <h2>£{averageRental.toFixed(0)}pm</h2>
                                    </div>
                                </div>
                                <div className='col-md-12 lead-table'>
                                    <div className='requests-table'>
                                        <h3>Leads Summary</h3>
                                            <LeadsTable data={ data.leads } />
                                    </div>
                                </div>
                            </div>
                                );
                        }
                    }
                </Query>
            </main>
        );
    }
}


export default Dashboard;

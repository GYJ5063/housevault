import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HeaderAgentDash from '../components/agent-dashboard/HeaderAgentDash';
// import LeadsTable from '../components/agent-dashboard/LeadsTable';
// import BootstrapTable from 'react-bootstrap-table-next';

import LeadsTable from '../components/agent-dashboard/LeadsTable'
import CompaniesTable from '../components/agent-dashboard/CompaniesTable';
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
            valuation_address {
                id
                postcode
                town
                dependent_locality
                double_dependent_locality
                thoroughfare
                dependent_thoroughfare
                building_number
                building_name
                sub_building_name
                po_box
                department_name
                organisation_name
                postcode_type
                su_organisation_indicator
                delivery_point_suffix
                lat
                lng
                udprn
            }
            createdAt
            report_id
        }
    }
`;

const GET_COMPANIES = gql`
    query companies {
        companies {
            id,
            logo,
            website_url,
            valuation_url,
            primary_colour,
            secondary_colour,
            name,
            telephone,
            meta_description
            createdAt
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
                <Query query={GET_LEADS} ssr={false}>
                    {
                        ({ loading, error, data }) => {
                        if (loading) return "Loading...";
                        const propertyValueSum = data.leads.reduce((acc, lead) => acc + lead.sales_valuation, 0);
                        const averageValue = propertyValueSum / data.leads.length;
                        const propertyRentalSum = data.leads.reduce((acc, lead) => acc + lead.rental_valuation, 0);
                        const averageRental = propertyRentalSum / data.leads.length;
                        return (
                            <div className='homepage-container'>
                                <h2>Agent Dashboard</h2>
                                <div className='card-deck col-md-12'>
                                    <div className='col-md-3 card stats-cards'>
                                        <h4>Leads this month <i style={{color:'green'}} className="fas fa-arrow-up val-logo-awesome"></i></h4>
                                        <h2>{data.leads.length}</h2>
                                    </div>
                                    <div className='col-md-3 card stats-cards'>
                                        <h4>Leads last month <i style={{color:'red'}} className="fas fa-arrow-down val-logo-awesome"></i></h4>
                                        <h2>31</h2>
                                    </div>
                                    <div className='col-md-3 card stats-cards'>
                                        <h4>Hot Leads</h4>
                                        <h2>3 <i style={{color:'red'}} className="fas fa-fire val-logo-awesome"></i></h2>
                                    </div>
                                    <div className='col-md-3 card stats-cards'>
                                        <h4>Conversion rate</h4>
                                        <h2>23% <i style={{color:'green'}} className="fas fa-chart-pie val-logo-awesome"></i></h2>
                                    </div>
                                </div>
                                <div className='card-deck col-md-12'>
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
                                <Query query={GET_COMPANIES} ssr={false}>
                                    {
                                        ({ loading, error, data }) => {
                                            if (loading) return "Loading...";
                                            return <CompaniesTable data={ data } error={error}/>;
                                        }
                                    }

                                </Query>
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

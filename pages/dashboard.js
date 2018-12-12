import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HeaderAgentDash from '../components/agent-dashboard/HeaderAgentDash';
import Profile from '../components/agent-dashboard/Profile';
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
                        if(error) return `Error! ${error.message}`;

                        const propertyValueSum = data.leads.reduce((acc, lead) => acc + lead.sales_valuation, 0);
                        const averageValue = propertyValueSum / data.leads.length;
                        const propertyRentalSum = data.leads.reduce((acc, lead) => acc + lead.rental_valuation, 0);
                        const averageRental = propertyRentalSum / data.leads.length;
                        // const isEmpty = data.leads.length === 0
                        const isEmpty = true
                        return (
                            <div className='homepage-container'>
                                <Profile />
                                <div className='dashboard-title'>
                                    <h2>Dashboard</h2>
                                    <p>Here is a summary of your account</p>
                                </div>
                                { isEmpty &&
                                    <div className='empty-board'>
                                        <div className='empty-img'>
                                            <img src='https://s3.eu-west-2.amazonaws.com/housevault-images/template/undraw_revenue_3osh.svg' />
                                        </div>
                                        <h2>Welcome to Housevault Dashboard</h2>
                                        <p>You currently have no data, let get started!</p>
                                        <div className='button'><a href=''>Setup your account</a></div>
                                    </div>
                                }
                                { !isEmpty &&
                                    <Fragment>
                                        <div className='card-deck col-md-12'>
                                            <div className='col-md-3 card stats-cards'>
                                                <div className='card-title'>
                                                    <h4>Leads</h4>
                                                    <p>Leads where appointment requested</p>
                                                </div>
                                                <div className='lead-info'>
                                                    <div className='lead-item'>
                                                        <h4>This month</h4>
                                                        <div className='lead-number'>
                                                            <h2 className='lead-number__green'>{data.leads.length}</h2>
                                                            <i style={{color:'#63a51a'}} className="fas fa-arrow-up val-logo-awesome"></i>
                                                        </div>
                                                    </div>
                                                    <div className='lead-item'>
                                                        <h4>Last month</h4>
                                                        <h2>31</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-3 card stats-cards'>
                                                <div className='card-title'>
                                                    <h4>HotLeads</h4>
                                                    <p>Leads where appointment requested</p>
                                                </div>
                                                <div className='lead-info'>
                                                    <div className='lead-item'>
                                                        <h2>31</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-3 card stats-cards'>
                                                <div className='card-title'>
                                                    <h4>Conversions</h4>
                                                    <p>Converting from a lead to a sale</p>
                                                </div>
                                                <div className='lead-info'>
                                                    <div className='lead-item'>
                                                        <h2>3</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-3 card stats-cards'>
                                                <div className='card-title'>
                                                    <h4>Conversion Rate</h4>
                                                    <p>Converting from a lead to a sale</p>
                                                </div>
                                                <div className='lead-info'>
                                                    <div className='lead-item'>
                                                        <h2>3</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-deck col-md-12'>
                                            <div className='col-md-6 card stats-cards'>
                                                <h4>Average Property Value</h4>
                                                <h2>£{averageValue.toFixed()}</h2>
                                            </div>
                                            <div className='col-md-6 card stats-cards'>
                                                <h4>Average Rental Value</h4>
                                                <h2>£{averageRental.toFixed(0)}pm</h2>
                                            </div>
                                        </div>
                                        <div className='col-md-12 lead-table'>
                                            <div className='requests-table'>
                                                <h3>Leads Summary</h3>
                                                <LeadsTable data={ data } error={error}/>
                                            </div>
                                        </div>
                                    </Fragment>
                                }
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

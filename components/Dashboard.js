import React, {Component} from 'react';
import ValuationRequestsTable from './ValuationRequestsTable'
import withData from '../lib/apollo';
import { Container, Row, Column } from 'reactstrap'
import '../styles/private-homepage.scss'
import { Query } from "react-apollo";
import gql from 'graphql-tag';

const GET_LEADS = gql `
    {
  leads(id: 1) {
    first_name,
    last_name,
    phone_number,
    sales_valuation,
    rental_valuation
  }
  }
 `;



class Dashboard extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Query query={GET_LEADS}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";

                    if (error) return `Error! ${error.message}`;
                    console.log(data);
                    return (
                        <div className='homepage-container'>
                            <h3>Welcome! This is the private homepage.</h3>
                            <div className='requests-table'>
                                <ValuationRequestsTable requests={data.leads}/>
                            </div>
                        </div>)
                }}
            </Query>
        );
    }
}



export default Dashboard;

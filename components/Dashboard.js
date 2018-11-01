import React, {Component} from 'react';
import ValuationRequestsTable from './ValuationRequestsTable'
import { Column} from 'reactstrap'
import Sidebar from './Sidebar'
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
    rental_valuation,
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
            <div className="row">
                <Sidebar />
                <div className="col">
                    <Query query={GET_LEADS}>
                        {({ loading, error, data }) => {
                            if (loading) return "Loading...";

                            if (error) return `Error! ${error.message}`;

                            return (
                                <div className='homepage-container'>
                                    <h3>Welcome! Username</h3>
                                    You have had {data.leads.length } leads in this period
                                    <div className='requests-table'>
                                        <ValuationRequestsTable requests={data.leads}/>
                                    </div>
                                </div>)
                        }}
                    </Query>
                </div>
            </div>
        );
    }
}



export default Dashboard;

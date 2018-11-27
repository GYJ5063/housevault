import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ValuationReport from "../components/valuation/ValuationReport";

const GET_REPORT = gql` 
    query report($id: ID!) {
        report(id: $id) {
            selling_results {
                query_info
            }
        }
    }
`;

class Report extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Query query={GET_REPORT} variables={{ id: this.props.id }}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    console.log(data)
                    return (
                        <ValuationReport valuation={data.report} address={this.state.address} company={data.companyByValuationURL}/>
                    );
                }}
            </Query>
        )
    };

};

Report.getInitialProps = async ({ req, query: { id } }) => {
return { id }
}

export default Report;
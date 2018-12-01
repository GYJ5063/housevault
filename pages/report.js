import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ValuationReport from "../components/valuation/ValuationReport";
import "../styles/valuation.scss";

const GET_REPORT = gql`
    query report($id: ID!) {
        report(id: $id) {
            company {
                logo
                name
                telephone
                primary_colour
                secondary_colour
                meta_description
            }
            address {
                building_name
                building_number
                thoroughfare
                town
                postcode
            }
            selling_results {
                predict_results
                sales_history_analyze
                query_info
                local_property_type_statistic
                national_avg_price_10y
                comparable_properties
                regional_price_10y
                regional_housetype_price_10y
                predict_price_10y
            }
            rental_results {
                rental_predict_price
                rental_comparable_properties
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
                        <ValuationReport valuation={data.report} address={data.report.address} company={data.report.company}/>
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
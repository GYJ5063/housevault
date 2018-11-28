import React from "react";
import ValuationForm from '../components/forms/ValuationForm'
import "../styles/valuation.scss";
import ValuationReport from "../components/valuation/ValuationReport";
import _ from "lodash";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from "react-apollo";

const GET_COMPANY_DETAILS = gql`
      {
          companyByValuationURL(valuation_url: "https://valuation.bettermove.co.uk") {
            id,
            logo,
            website_url,
            primary_colour,
            name,
            telephone,
            meta_description
     
          }
    }
`;
class QuickValuation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            report: {},
            address: {},
            company: {},
            valuation: {}

        };
    }

    renderCompanyLogo(company) {

        if(company.website_url != null && company.logo != null ) {
            return (
                <a href={company.website_url} ><img src={company.logo} /></a>
            )
        }
    }

    render() {

     return (
         <React.Fragment>
            <div className="row ">
                <Query query={GET_COMPANY_DETAILS}>
                    {({ loading, error, data }) => {
                     if (loading) return "Loading...";
                     if (error) return `Error! ${error.message}`;
                     return (
                        <div className="col-4">
                            <div className="card valuation-card">
                                <div className="card-body">
                                    {this.renderCompanyLogo(data.companyByValuationURL)}
                                    <h1>Free Instant Online Valuation</h1>
                                    <p>We offer instant online valuations, simply enter your post code below for an indication of what your property is worth.</p>
                                    <ValuationForm company={data.companyByValuationURL} address={this.state.address}/>
                                </div>
                            </div>
                        </div>
                    )}}
                 </Query>
                </div>
         </React.Fragment>
     );
    }
}




export default  compose(
    graphql(GET_COMPANY_DETAILS)
)(QuickValuation);

import React from "react";
import "../styles/valuation.scss";
import ValuationStepOne from "../components/valuation/ValuationStepOne";
import ValuationStepTwo from "../components/valuation/ValuationStepTwo";
import _ from "lodash";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import axios from "axios";
import {Router} from "../routes";

const GET_COMPANY_DETAILS = gql`
      query company {
          company {
            id,
            logo,
            website_url,
            primary_colour,
            secondary_colour,
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
            valuation:{},
            first_name:'',
            last_name:'',
            email:'',
            phone_number:'',
            errors: [],
            step:1,
            hideLoadingSpinner:false

        };
        this.submitStepOne = this.submitStepOne.bind(this);
        this.submitStepTwo = this.submitStepTwo.bind(this);
        this.updateValues = this.updateValues.bind(this);

    }
    updateValues(report, address, company) {
        this.setState({report, address, company});
    }

    renderCompanyLogo(company) {

        if(company.website_url != null && company.logo != null ) {
            return (
                <a href={company.website_url} ><img id='company-logo' src={company.logo}/></a>
            )
        }
    }

    submitStepOne (inputs) {
        this.setState(
            {
                "step":2,
                bedrooms: inputs.bedrooms,
                address:inputs.address,
                reception_rooms: inputs.reception_rooms
            });

    }

    submitStepTwo (inputs) {
        let self = this;

        const { address } = this.state;

        this.setState(
            {
                hideLoadingSpinner: false,
                first_name: inputs.first_name,
                last_name: inputs.last_name,
                email: inputs.email,
                phone_number: inputs.phone_number
            });

        let formData = {
            postcode: address.postcode,
            building_number: address.building_number,
            building_name: address.building_name,
            num_bedrooms: parseInt(this.state.bedrooms),
            num_receptionrooms: parseInt(this.state.reception_rooms),
            number_habitable_rooms: (parseInt(this.state.reception_rooms) + parseInt(this.state.bedrooms)),
            property_type: inputs.property_type,
            wall_type:inputs.wall_type,
            total_floor_area: inputs.total_floor_area,
            built_from: inputs.built_from,
            report: 1
        };



        let config = {
            headers: {
                "Authorization": process.env.PRICEPREDICTION_TOKEN
            }
        };

        axios.post(process.env.PRICEPREDICTION_URL, formData, config)
            .then(function (response) {
                self.props
                    .saveReportMutator({ variables: { report: response.data, company_id: self.props.data.company.id } })
                    .then(res => {
                        if(!res.data.saveReport) {
                            console.error(res.errors[0].message);
                            // need to display a something went wrong message
                        }

                        const reportId = res.data.saveReport;

                        self.props.createLeadMutator({
                            variables: {
                                first_name: self.state.first_name,
                                last_name: self.state.last_name,
                                email: self.state.email,
                                phone_number:self.state.phone_number,
                                rental_valuation: response.data.rental_results.rental_predict_price,
                                sales_valuation: response.data.selling_results.predict_results.predict_price,
                                company_id: self.props.data.company.id,
                                report_id: reportId,
                                address_id: response.data.selling_results.query_info.address_id
                            }
                        }).then(res => {
                            if(!res.data.createLead) {
                                console.error(res.errors[0].message);
                                // need to display a something went wrong message
                            }
                            Router.pushRoute(`/report/${reportId}`);
                        });
                    });
            })
            .catch(function (error) {
                self.setState({ hideLoadingSpinner: true});
            });

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
                                        {this.renderCompanyLogo(data.company)}
                                        <h1>Free Instant Online Valuation</h1>
                                        <p>We offer instant online valuations, simply enter your post code below for an indication of what your property is worth.</p>
                                        { (this.state.step === 1) ? <ValuationStepOne submit={this.submitStepOne} /> : ''}
                                        { (this.state.step === 2) ? <ValuationStepTwo submit={this.submitStepTwo} /> : ""}

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


const createLeadMutator = gql`
    mutation createLead($first_name: String!, $last_name: String!, $email: String!, $phone_number: String!, 
            $sales_valuation: Float!, $rental_valuation: Float!, $company_id: Int!, $report_id: ID!, $address_id: Int!) {
             createLead(
                first_name: $first_name, 
                last_name: $last_name, 
                email: $email,
                phone_number:$phone_number, 
                sales_valuation:$sales_valuation, 
                rental_valuation:$rental_valuation, 
                company_id:$company_id
                report_id: $report_id
                address_id: $address_id
              ) {
                id
              }
          }
`;

const saveReportMutator = gql`
    mutation saveReport($report: JSON!, $company_id: Int!) {
        saveReport(report: $report, company_id: $company_id)
    }
`;

export default compose(
    graphql(createLeadMutator, { name: 'createLeadMutator' }),
    graphql(saveReportMutator, { name: 'saveReportMutator' }),
    graphql(GET_COMPANY_DETAILS)
)(QuickValuation);

import React from "react";
import ValuationForm from '../components/forms/ValuationForm'
import "../styles/valuation.scss";
import ValuationReport from "../components/valuation/ValuationReport";
import _ from "lodash";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';


class QuickValuation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            report: {},
            valuation: {},
        };
        this.showReport = this.showReport.bind(this);
        this.setValuationFormData = this.setValuationFormData.bind(this);
    }
    showReport(report) {
        this.setState({report:report});
    }

    setValuationFormData(valuation) {
        this.setState({valuation:valuation});
    }

    render() {

     return (
         <React.Fragment>
                <div className="row  ">
                    {(_.isEmpty(this.state.report)) ?
                        <div className="col-4">
                            <div className="card valuation-card">
                                <div className="card-body">
                                    <ValuationForm report={this.showReport}/>
                                </div>

                            </div>
                        </div>
                        :
                        <div className="container">
                        <div className="valuation">
                            <div className="col-12">
                                <div className="card ">
                                    <div className="card-body">
                                        <h1>Your valuation is on its way</h1>
                                        <ValuationReport valuation={this.state.report.selling_results}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    }
                </div>
         </React.Fragment>
     );
    }
}


export default QuickValuation;

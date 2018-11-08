import React from "react";
import ValuationForm from '../components/forms/ValuationForm'
import "../styles/valuation.scss";
import ValuationReport from "../components/valuation/ValuationReport";
import _ from "lodash";
class QuickValuation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            report: {},
        };
        this.showReport = this.showReport.bind(this);
    }
    showReport(report) {
        this.setState({report:report});
    }

    render() {

     return (
         <div className="rooftop-image">
                <div className="row  ">
                    {(_.isEmpty(this.state.report)) ?
                        <div className="col-4">
                            <div className="card valuation-card">
                                <div className="card-body">
                                    {/*<img src="/static/housevault-logo.svg" alt="Logo" width="200"/>*/}
                                    <ValuationForm report={this.showReport}/>
                                </div>

                            </div>
                        </div>
                        :
                        <div className="valuation">
                            <div className="col-12">
                                <div className="card valuation-card">
                                    <div className="card-body">
                                        <h1>Your valuation is on its way</h1>
                                        <ValuationReport valuation={this.state.report}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }


        </div>
         </div>
     );
    }
}
export default QuickValuation;
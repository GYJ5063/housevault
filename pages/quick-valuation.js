import React from "react";
import ValuationForm from '../components/forms/ValuationForm'

class QuickValuation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
     return (
        <div className="row justify-content-center">
            <div className="col-6">
                <h1>Get a valuation </h1>
                <ValuationForm />
            </div>

        </div>
     );
    }
}
export default QuickValuation;
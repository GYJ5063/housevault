import React from "react";
import ValuationForm from '../components/forms/ValuationForm'
import "../styles/valuation.scss";

class QuickValuation extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
     return (
         <div className="rooftop-image">
             <div className="valuation">
                <div className="row  ">
                <div className="col-4">
                    <div className="card valuation-card">
                        <div className="card-body">
                            {/*<img src="/static/housevault-logo.svg" alt="Logo" width="200"/>*/}

                            <ValuationForm />
                        </div>

                    </div>
                </div>
            </div>

        </div>
         </div>
     );
    }
}
export default QuickValuation;
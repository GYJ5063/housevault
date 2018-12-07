import React, {Component} from 'react';
import {Router} from '../../routes';
class FourReasonsComponent extends Component {
    render() {
        return (
            <div className="four-feature-section">
                <div className="row four-feature-section-inner">
                    <div className="col-md-6">
                        <div className="four-feature-gif"><i className="icons fas fa-laptop-code"></i></div>
                        <div className="four-feature-tag">
                            <h3>Market Leading Accuracy</h3>
                            <p>Using hundreds of data sets our machine learning AVM has been trained on over 25m records to produce results you can rely on.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="four-feature-gif"><i className="icons fas fa-pound-sign"></i></div>
                        <div className="four-feature-tag">
                            <h3 >Transparent Pricing</h3>
                            <p>We pride ourselves on providing market leading software at affordable pricing. Our pricing starts at just £100 for 250 reports per month.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="four-feature-gif"><i className="icons fas fa-stopwatch"></i></div>
                        <div className="four-feature-tag">
                            <h3>Instant Reports</h3>
                            <p>Interactive reports are generated in under 3 seconds. Stored on your private dashboard you can retrieve, print and share reports however you want.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="four-feature-gif"><i className="icons far fa-user"></i></div>
                        <div className="four-feature-tag">
                            <h3>Full Branding Control</h3>
                            <p>Simply generate reports for private use or customize all aspects of the report with your branding. We put you in control of how reports look and feel.</p>
                        </div>
                    </div>
                </div>
            </div>
                );
    }
}
export default FourReasonsComponent;

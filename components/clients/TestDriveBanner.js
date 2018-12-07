import React, {Component} from 'react';
import {Router} from '../../routes';
class TestDriveBanner extends Component {
    render() {
        return (
            <div className="test-drive section">
                <div className="container">
                    <div className="row">
                        <h4 className="test-drive-heading">Take HouseVault for a test flight today!</h4>
                        <div className="col-md-6">
                            <div className="btn offer-btn">Sign up to a free trial</div>
                        </div>
                        <div className="col-md-6">
                            <div className="btn offer-btn">Book a demonstration</div>
                        </div>
                        <div className="col">
                            <h3>Please feel free to get in touch with HouseVault, <br />Our team will happily run through all the benefits of using our services</h3>
                        </div>
                    </div>
                </div>
            </div>
                );
    }
}
export default TestDriveBanner;

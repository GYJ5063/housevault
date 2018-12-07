import React, {Component} from 'react';
import {Router} from '../../routes';
class Footer extends Component {
    render() {
        return (
                <footer className="footer">
                    <div className="container">
                        <div className="row col-md-12">
                                <div className="col-md-4 footer-links padding-left-0">
                                    <h4>Sectors Served</h4>
                                    <ul>
                                        <li><a href="/lenders">Banking & Finance</a></li>
                                        <li><a href="/property-developers">Housebuilders & Developers</a></li>
                                        <li><a href="/estate-agents">Estate Agency</a></li>
                                        <li><a href="/property-investors">Private & Institutional Investors</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 footer-links">
                                    <h4>Company</h4>
                                    <ul>
                                        <li><a href="/about-us">About us</a></li>
                                        <li><a href="/`">Registration</a></li>
                                        <li><a href="/login">Login</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 footer-links">
                                    <h4>Contact us</h4>
                                    <ul>
                                        <li><a href="#">Email: info@housevault.co.uk</a></li>
                                        <li><a href="#">Phone: 0800 052 2992</a></li>
                                    </ul>
                                </div>
                            {/*<div className="col-md-1">*/}
                            {/*</div>*/}
                            {/*<div className="col-md-5 subscribe-section">*/}
                                {/*<h4>Get updates from housevault</h4>*/}
                                {/*<input type="text" name="name" id="name" placeholder="Name:" className="subscribefield"/>*/}
                                {/*<input type="email" name="email" id="email" placeholder="Email:" className="subscribefield"/>*/}
                                {/*<input type="submit" value="Submit" className="subscribe-submit" id="subscribeajaxSubmit"/>*/}
                            {/*</div>*/}
                        </div>
                        <div className="row col-md-12">
                            <p className="copyright">© Housevault Ltd. All rights reserved</p>
                        </div>
                    </div>
                    <div className="col-md-12 blank-footer">
                    </div>
                </footer>
                );
    }
}
export default Footer;

import Head from 'next/head'
import Layout from '../Layout'
import Header from "../Header";
import '../../styles/product-page.scss';
import {Component} from "react";
import Footer from "./FooterProduct";
import TestDriveBanner from "./TestDriveBanner";

class PropertyInvestors extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main role="main">
                <Head>
                    <title>Private & Institutional Investor Products | House Vault</title>
                    <meta name="description"
                          content="Private & Institutional Investor Products to asses properties in the UK market. Valuation. Prediction. Viability."/>
                    <Header/>
                </Head>
                <Layout>
                    <div className="container">
                        <div className="row">
                            <div className="main-heading">
                                <h1>Private & Institutional Investors</h1>
                                <h4>If your business sells, manages or owns investment property our
                                    accurate property investment analysis is an essential tool to add to
                                    your armoury.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="hero-section">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="hero-product-image-investors"></div>
                            </div>
                            <div className="col-md-6">
                                <div className="hero-product-inner">
                                    <h4>Research, Asses & Predict</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul>
                                                <li>Predict Potential Cash Flow and Price Growth</li>
                                                <li>Calculate Yield, ROI and Historic Trends</li>
                                                <li>View Real Sold & Rental Comparables</li>
                                                <li>Asses Best and Worst Performing Property Types</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul>
                                                <li>Find The Hidden Gems Before Anyone Else</li>
                                                <li>Avoid Buying Overvalued Properties</li>
                                                <li>Use to Support Lending Applications</li>
                                                <li>Print Friendly & Branded to Your Needs</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="demo-btn">Create Free Report</div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="sample-btn">Start 7 Day Trial</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our-product">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 product-inner">
                                    <h4 className="product-heading">Utilise & Promote</h4>
                                    <p>Utilise the detailed reports to promote stock to new investors or as a tool to sign up new vendors to your company.</p>
                                    <p>Free up valuable time with the ability to instantly create detailed professional investment reports with just a postcode and house number in less than a minute.</p>
                                    <p>Display up to date organised data such as potential cash flow, anticipated yield, ROI, historic capital growth and predicted price growth.</p>
                                    <p>Promote to new investors, sign up new vendors and offer your clients real add-on value with reports  branded in your companies name and corporate style.</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="illustration-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>


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
                                        <p>We pride ourselves on providing market leading software at affordable pricing. Our pricing starts at just £49 per month for private users.</p>
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

                    <div className="more-than-a-val">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="valuation-reports-illustration-1"></div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="more-than-heading">Information On Demand</h4>
                                    <p>Compile interactive reports on existing properties and then easily email to your customer base.
                                        The power of having such a wealth of property information instantly on hand for you and a client takes away any guess work.</p>
                                    <p>Reports generated are print friendly and can be printed off in minutes and given to prospective clients as part of a marketing pack to be taken away.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="the-knowledge">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 knowledge-inner">
                                    <h4 className="knowledge-heading" style={{paddingTop:'3rem'}}>Knowledge Is Power</h4>
                                    <p>Not just a software and marketing company but a team made up of property professionals
                                        with years of experience in the industry.</p>
                                    <p>HouseVault provides our users with a wealth of knowledge to help them fully utilise
                                        the latest property data. Apply the data to predict house growth price, identify risks
                                        and area statistics with total confidence.</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="illustration-3-developers"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TestDriveBanner/>
                    <Footer/>
                </Layout>
            </main>
        );
    }
}

export default PropertyInvestors;
import Head from 'next/head'
import Layout from '../Layout'
import Header from "../Header";
import '../../styles/product-page.scss';
import {Component} from "react";
import Footer from "./FooterProduct";
import FourReasonsComponent from "./FourReasonsComponent";
import TestDriveBanner from "./TestDriveBanner";

class PropertyDevelopers extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main role="main">
                <Head>
                    <title>Property Developers Product Page | House Vault</title>
                    <meta name="description"
                          content="Valuation and lead generation products for property developers."/>
                    <Header/>
                </Head>
                <Layout>
                    <div className="main-heading">
                        <div className="container">
                            <div className="row">
                                <div className="heading">
                                    <h1>Builders & Property Developers</h1>
                                    <h4>Peer into the future and assess the viability of potential plots before making financial commitments with the use of our modelling application.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="hero-product-image-developers"></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="hero-product-inner">
                                        <h4>Research, Calculate & Profit</h4>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul>
                                                    <li>Predict Potential Plot Viability</li>
                                                    <li>Analyse Potential Returns</li>
                                                    <li>Try Different Build Types For Maximum Profit</li>
                                                    <li>Tap Into Unrivalled Property Data</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul>
                                                    <li>Find Gaps In The Market</li>
                                                    <li>Foresight Into Profit Maximisation</li>
                                                    <li>Produce Professionally Branded Reports</li>
                                                    <li>Gain Competitive Advantage</li>
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
                    </div>
                    <div className="our-product">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 product-inner">
                                    <h4 className="product-heading">Insightful Data</h4>
                                    <p>Accurately use the latest property stats to analyse trends allowing you to make informed property development decisions.</p>
                                    <p>Enter proposed housing plans to calculate potential sales and rental returns on a new development.</p>
                                    <p>Try different types of build to find the best returns, giving you a clearer indication on making the right investment.</p>
                                    <p>Make the most of our expansive area data to find gaps in the market and tap into new opportunities.</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="illustration-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FourReasonsComponent/>
                    <div className="knowledge-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 knowledge-inner">
                                    <p>"HouseVault provides our users with a wealth of knowledge to help them fully utilise
                                        the latest property data. Apply the data to predict house growth price, identify risks
                                        and area statistics with total confidence."</p>
                                </div>
                                <div className="col-md-3">
                                    <div className="demo-btn">Start Your Free Trial</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-than-a-val">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="developer-reports-illustration-1"></div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="more-than-heading">Foresight At Your Finger Tips</h4>
                                    <p>The power of having such a wealth of property information instantly on hand for you to analysis and predict takes away any of the guesswork.</p>
                                    <p>Reports generated allow you foresight into property predicted value and local area data, giving you the most accurate information to develop property successfully.</p>
                                    <p>Utilise unrivalled report information that is constantly up to date and accurate to within 3%.</p>
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

export default PropertyDevelopers;
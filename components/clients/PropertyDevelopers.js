import Head from 'next/head'
import Layout from '../Layout'
import Header from "../Header";
import '../../styles/product-page.scss';
import {Component} from "react";
import Footer from "./FooterProduct";

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

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="hero-product-image-developers"></div>
                                </div>
                                <div className="col-md-6 hero-product-inner">
                                    <h4>Research, Calculate & Profit</h4>
                                    <ul>
                                        <li>Predict Potential Plot Viability</li>
                                        <li>Analyse Potential Returns</li>
                                        <li>Try Different Build Types For Maximum Profit</li>
                                        <li>Find Gaps In The Market</li>
                                        <li>Tap Into Unrivalled Property Data</li>
                                        <li>Fantastic Foresight Into Profit Maximisation</li>
                                        <li>Produce Professionally Branded Reports</li>
                                        <li>Gain Competitive Advantage</li>
                                        <li>Accuracy To Within 3%</li>
                                    </ul>
                                </div>
                            </div>

                    </div>
                    <div className="our-product">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 product-inner">
                                    <h4 className="product-heading">Utilise & Promote</h4>
                                    <p>Accurately use the latest property stats to analyse trends allowing you to make informed property development decisions.</p>
                                    <p>Enter proposed housing plans to calculate potential sales and rental returns on a new development.</p>
                                    <p>Try different types of build to find the best returns, giving you a clearer indication on making the right investment.</p>
                                    <p>Make the most of our expansive area data to find gaps in the market and tap into new opportunities..</p>
                                    <div className="demo-btn">Start Your Free Trial</div><div className="sample-btn">Sample Report</div>
                                </div>
                                <div className="col-md-6">
                                    <div className="illustration-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*<div className="three-feature-section">*/}
                        {/*<div className="row three-feature-section-inner">*/}

                                {/*<div className="col-md-4">*/}
                                    {/*<div className="row three-feature-gif gif-one"/>*/}
                                    {/*<div className="row three-feature-tag">*/}
                                        {/*<h3>Branded to your agency</h3>*/}
                                        {/*<p>With your agency's logos and colours</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                                {/*<div className="col-md-4">*/}
                                    {/*<div className="row three-feature-gif gif-two"/>*/}
                                    {/*<div className="row three-feature-tag">*/}
                                        {/*<h3 >Beat The Competition</h3>*/}
                                        {/*<p>Offer real value to your customer creating a great first impression</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                                {/*<div className="col-md-4">*/}
                                    {/*<div className="row three-feature-gif gif-three" />*/}
                                    {/*<div className="row three-feature-tag">*/}
                                        {/*<h3>Suitable for all agencies</h3>*/}
                                        {/*<p>Whether you just have one office or a number of branches, HouseVault*/}
                                            {/*can support your agency</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}

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
                    <div className="the-knowledge">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 knowledge-inner">
                                    <h4 className="knowledge-heading">Knowledge Is Power</h4>
                                    <p>Not just a software and marketing company but a team made up of property professionals
                                        with years of experience in the industry.</p>
                                    <p>HouseVault provides our users with a wealth of knowledge to help them fully utilise
                                        the latest property data. Apply the data to predict house growth price, identify risks
                                        and area statistics with total confidence.</p>
                                    <div className="demo-btn">Start Your Free Trial</div><div className="sample-btn">Book a Demo</div>
                                </div>
                                <div className="col-md-6">
                                    <div className="illustration-3-developers"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="test-drive">*/}
                        {/*<div className="container">*/}
                            {/*<div className="row">*/}
                                {/*<h4 className="test-drive-heading">Take HouseVault for a test flight today!</h4>*/}
                                {/*<div className="col-md-6">*/}
                                    {/*<div className="btn offer-btn">Sign up to a free trial</div>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-6">*/}
                                    {/*<div className="btn offer-btn">Book a demonstration</div>*/}
                                {/*</div>*/}
                                {/*<h3>Please feel free to get in touch with HouseVault, our team will happily run through all the benefits of using our services</h3>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <Footer/>
                </Layout>
            </main>
        );
    }
}

export default PropertyDevelopers;
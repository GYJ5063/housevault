import Head from 'next/head'
import Layout from '../Layout'
import Header from "../Header";
import '../../styles/product-page.scss';
import {Component} from "react";
import Footer from "./FooterProduct";

class EstateAgents extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main role="main">
                <Head>
                    <title>Estate & Letting Agents Product Page | House Vault</title>
                    <meta name="description"
                          content="Valuation and lead generation products for the Estate Agency market."/>
                    <Header/>
                </Head>
                <Layout>
                    <div className="section">
                    <div className="main-heading">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="heading">
                                        <h1>Sales & Letting Agents</h1>
                                        <h4>Engage with more customers, generate higher quality leads and increase signups with HouseVault.</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="hero-section">
                        <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="hero-product-image"></div>
                                    </div>
                                    <div className="col-6 ">
                                        <div className="hero-product-inner">
                                            <h4>Engage, Generate & Signup</h4>
                                            <div className="row">
                                                <div className="col">
                                                    <ul>
                                                        <li>Increase Website Traffic</li>
                                                        <li>Generate Leads</li>
                                                        <li>Increase Customer Engagement</li>
                                                        <li>Produce Professionally Branded Reports</li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    <ul>
                                                        <li>Promote Agency Brand</li>
                                                        <li>Gain Competitive Advantage</li>
                                                        <li>House Valuation Accuracy To Within 3%</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="demo-btn">Start Your Free Trial</div>
                                            <div className="sample-btn">Sample Report</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our-product section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 product-inner">
                                    <h4 className="product-heading">Intelligent & Accurate</h4>
                                    <p>Without doubt the most intelligent, comprehensive and accurate valuation tool available.
                                        The industry leading HouseVault tool enables visitors to your website to get a free detailed
                                        instant online valuation report on their property.</p>
                                    <p>A fully interactive report allows potential customers to easily look at current values,
                                        value ranges and value change as well as drilling into property performance,
                                        historic sales data and comparable sold properties.</p>
                                    <p>Reports are professionally styled with your agency branding and emailed to both you and the
                                        customer, strengthening your brand image compared to competitors.</p>
                                    <p>Seamlessly capture contact details, then engage and convert into a listing, safe in the
                                        knowledge that you're armed with unrivalled property information compiled from over 100
                                        data sets, giving you and the customer house valuation accuracy to within 3%.</p>
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
                    <div className="more-than-a-val section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="valuation-reports-illustration-1 "></div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="more-than-heading">Much More Than An Instant Valuation</h4>
                                    <p>Many of our agents have had great success using the HouseVault tool in-house
                                        with existing customers and walk ins. The power of having such a wealth of property
                                        information instantly on hand to interactively run through with the customer,
                                        displayed in your branding, has added real customer value.</p>
                                    <p>Reports generated are print friendly and can be printed off in minutes and
                                        given to prospective clients as part of a marketing pack to be taken away, hugely
                                        increasing the chances of prospects returning and listing their property with your agency.</p>
                                    <p>Don't just take our word for it. Generate our report for free below to see how
                                        much value you can offer your clients today.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="the-knowledge section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 knowledge-inner">
                                    <h4 className="knowledge-heading">Knowledge Is Power</h4>
                                    <p>Not just a software and marketing company but a team
                                        made up of property professionals with years of experience in the industry.</p>
                                    <p>HouseVault provides our users with a wealth of knowledge to help them
                                        fully utilise the HouseVault valuation tool.</p>
                                    <p>Grow audiences, improve marketing strategies, convert more quality
                                        leads and raise brand exposure with exclusive access to our extensive KnowledgeVault.</p>
                                    <p>Access tutorials, articles, videos, top tips and examine a real
                                        life case study walking you through how to utilise Facebook Ads
                                        effectively to generate leads via HouseVault. You'll be conquering the internet in no time!</p>
                                </div>
                                <div className="col-md-6 knowledge-image">
                                    <div className="illustration-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <Footer/>
                </Layout>
            </main>
        );
    }
}

export default EstateAgents;
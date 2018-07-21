import React, {Component} from 'react';
import {Router} from '../routes';
import Head from 'next/head'
import SearchVault from '../components/SearchVault';

class Index extends Component {
    render() {
        return (
            <main role="main">
                <Head>
                    <title>Search the house vault for the latest property information | House Vault</title>
                    <meta name="description" content="View Local information about an address including epc, population, house prices, crime and much more." />
                </Head>
                <div className="banner">
                    <img src="/static/banner-bg.jpg" alt="Banner"/>
                    <h1 className="note">What’s important to you? Your perfect home is only a search away…</h1>
                </div>
                <div className="searchBox">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                              <SearchVault />
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
                <div className="research-area">
                    <div className="container">
                        <div className="col-md-12 top-box">
                            <div className="col-md-12"><p className="hd">Research in detail any area in the UK, using
                                our
                                powerful
                                database.</p></div>
                            <div className="col-md-12 area-link row">
                                <div className="col-lg-2"></div>
                                <div className="col-md-12 col-lg-8">
                                    <div className="col-md-3 box property">
                                        <div className="inner">
                                            <span className="icon-bar"></span>
                                            <span className="name">Property <br/>Valuation Report</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 box interactive">
                                        <div className="inner">
                                            <span className="icon-bar"></span>
                                            <span className="name">Interactive <br/>Statistics</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 box location">
                                        <div className="inner">
                                            <span className="icon-bar"></span>
                                            <span className="name">Location <br/>Information</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 box energy">
                                        <div className="inner">
                                            <span className="icon-bar"></span>
                                            <span className="name">Energy <br/>Efficiency</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="what-is-hv">
                    <div className="container">
                        <div className="col-md-12 bottom-box illustration-1 row">
                            <div className="col-md-6">
                                <h4 className="sec-heading">WHAT IS THE HOUSEVAULT?</h4>
                                <h3>HouseVault, as the name suggests, is the largest known database of property and
                                    local
                                    information.</h3>
                                <p>Accessing the HouseVault, which uses our leading Machine Learning & Artificial
                                    Intelligence
                                    technology, gives you free unrestricted access to interactive tools, in-depth
                                    reports,
                                    statistic
                                    and data on every home and location within the UK.</p>
                                <p>We believe transparent, accurate and free access will help owners, buyers, tenants,
                                    investors
                                    and
                                    professionals make better informed decisions when researching a home or area. </p>
                                <p>Just enter an address above for free access to our unbiased tools, reports & stats or
                                    learn
                                    more
                                    about our service and the technology behind it below.</p>
                                <a href="#" title="Learn More" className="learn-more">Learn more</a>
                            </div>
                            <div className="col-md-6">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our-technology">
                    <div className="container">
                        <div className="col-md-12 row">
                            <div className="col-md-6">
                                <div className="illustration-2"></div>
                            </div>
                            <div className="col-md-6 out-tech-inner">
                                <h4 className="tech-heading">OUR TECHNOLOGY</h4>
                                <h5>Our experienced team of PhD researchers, data scientists, statisticians, economists
                                    and
                                    software
                                    developers dedicate their time to building the most accurate, unbiased & efficient
                                    tools
                                    on
                                    homes and locations throughout the UK.</h5>
                                <p>At the core of our technology sits our Machine Learning & Artificial Intelligence
                                    algorithms
                                    built in-house by our team of PhD researchers and graduates. Thanks in a great part
                                    to
                                    the
                                    UK
                                    government’s decision to open up millions of data sets and relationships with
                                    private
                                    property
                                    companies, we have been able to use our skill set to build industry leading models
                                    to
                                    help
                                    UK
                                    property professionals and residents make informed decisions at little to no
                                    cost.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="the-future">
                    <div className="container">
                        <div className="col-md-12 row">
                            <div className="col-md-6">
                                <h4 className="sec-heading">THE FUTURE IS HERE!</h4>
                                <div className="col-md-12 row">
                                    <div className="col-md-6">
                                        <span className="icon-predict"></span>
                                        <div className="name">PREDICT</div>
                                        <p className="info">Our Property Valuation Algorithm can accurately predict a
                                            property
                                            valuation on any UK home. With up to 95% accuracy and covering 25 million
                                            homes
                                            in
                                            the
                                            UK.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="icon-interactive"></span>
                                        <div className="name">INTERACTIVE</div>
                                        <p className="info">Interactive maps showing detailed information on local
                                            areas,
                                            properties
                                            and people.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="icon-calculate"></span>
                                        <div className="name">CALCULATE</div>
                                        <p className="info">Find out the likely energy cost based on a properties
                                            characteristics
                                            and predict energy costs if certain measures are carried out. Take control
                                            of
                                            your
                                            future finances.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="icon-research"></span>
                                        <div className="name">RESEARCH</div>
                                        <p className="info">Find property specific information such as age, size, type
                                            and
                                            compare
                                            to the local area</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="illustration-3"></div>
                                <div className="col-ld-8 col-sm-12 give-it">
                                    <p>Sounds great? Give it a go…</p>
                                    <SearchVault />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="your-neighbours">
                    <div className="your-neighbours-right">
                        <div className="container">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <h4 className="sec-heading">GET TO KNOW YOUR NEIGHBOURS</h4>
                                    <p>With Housevault you can search for the following information</p>
                                    <ul>
                                        <li>Current house prices</li>
                                        <li>Sold house prices</li>
                                        <li>Types of property in an area</li>
                                        <li>EPC energy ratings</li>
                                        <li>Local schools and hospitals</li>
                                        <li>Detailed Demographics</li>
                                        <li>Culture</li>
                                        <li>Broadband quality</li>
                                        <li>Crime statistics</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Index;

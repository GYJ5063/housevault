import Head from 'next/head'
import Layout from '../components/Layout'

export default () =>
    <main role="main">
        <Head>
            <title>Accurate property valuations for any sale and rental properties | House Vault</title>
            <meta name="description" content="View Local information about an address including epc, population, house prices, crime and much more." />
        </Head>
        <Layout>
            <div className="banner">
                <img src="/static/banner-bg.jpg" alt="Banner"/>
                <h1 className="note">The most comprehensive & accurate sales and rental valuation data</h1>
            </div>
            <div className="searchBox">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <a href="/quick-valuation">Get a valuation</a>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
            <div className="research-area">
                <div className="container">
                    <div className="col-md-12 top-box">
                        <div className="col-md-12"><p className="hd">Offer your prospective clients a free personalised report instantly with your branding.</p></div>
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
                            <h3>HouseVault, as the name suggests, is the largest known database of property and valuation data</h3>
                            <p>Accessing the HouseVault, which uses our leading Machine Learning & Artificial
                                Intelligence
                                technology, gives you free unrestricted access to interactive tools, in-depth
                                reports,
                                statistic
                                and data on every home and location within the UK.</p>
                            <p>Use our API or whitelabel site to offer clinets the most comprehensive and accurate reports available on the market. Generate leads from potential sellers and buyers alike whilst making a great first impression.</p>
                            <p>Don't just take our word for it. Generate our report for free below to see how much value you can offer your clients today.</p>
                            <a href="#" title="Learn More" className="learn-more">Free Report</a>
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
                            <h5>Our experienced team of PhD researchers, data scientists and software
                                developers dedicate their time and knowledge to building the most accurate, unbiased & efficient
                                tools for the property and energy sectors.</h5>
                            <p>At the core of our technology sits our Machine Learning & Artificial Intelligence
                                algorithms
                                built in-house by our team. Thanks in a great part to the UK's open data policy and our relationships
                                to collate data from within the private and public sector. We have been able to use our expertise to build industry leading tools
                                to help property and energy companies offer superior products and services.</p>
                            <p>Learn more about our technology.</p>
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
                                        properties sale and rental valuation instantly. With up to 95% accuracy and covering over 25m addresses.</p>
                                </div>
                                <div className="col-md-6">
                                    <span className="icon-interactive"></span>
                                    <div className="name">INTERACTIVE</div>
                                    <p className="info">Our interactive data allows you or your clients visual data presentations making it easy to digest the large amount of data we hold.</p>
                                </div>
                                <div className="col-md-6">
                                    <span className="icon-calculate"></span>
                                    <div className="name">CALCULATE</div>
                                    <p className="info">Predict sales valuation, rental valuation, yield, comparable properties, energy pricing, future price prediction, historic data and much more.</p>
                                </div>
                                <div className="col-md-6">
                                    <span className="icon-research"></span>
                                    <div className="name">RESEARCH</div>
                                    <p className="info">Compare property characteristics and area stats such as crime and schooling. Use our data internally or offer to your customers in your own products & services</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="illustration-3"></div>
                            {/*<div className="col-ld-8 col-sm-12 give-it">*/}
                                {/*/!*<p>Sounds great? Give it a go…</p>*!/*/}
                                {/*/!*<SearchVault />*!/*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="your-neighbours">
                <div className="your-neighbours-right">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="col-md-6">
                                <h4 className="sec-heading">WHAT DATA CAN YOU ACCESS</h4>
                                <p>With Housevault you can search for the following information</p>
                                <ul>
                                    <li>Current house values</li>
                                    <li>Historic sold price data</li>
                                    <li>Rental Valuation & Yield</li>
                                    <li>Types of property in an area</li>
                                    <li>Energy Efficiency and Pricing</li>
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
        </Layout>
    </main>

import React from "react";
import fetch from "isomorphic-fetch";
import PropertyMenu from "../components/PropertyMenu";
import Layout from '../components/Layout'


class Broadband extends React.Component {
    render() {

        return (

                <Layout>
                    <PropertyMenu url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.house_number}/>
                    <div className="container list-page-padding">
                <div className="row">

                    <div className="col">
                        <h4>Broadband Speed Check for {this.props.property.full_address}</h4>
                        <p>We collect broadband speed data from all the major UK providers including distance from exchange, fiber availability and service levels. Below are the current broadband speed stats for {this.props.property.full_address}. We have also found several companies who can offer broadband to homes located on this street if you're looking to switch.</p>

                        <table className="table">
                            { this.props.broadbandData.map((el,i) => (
                                <tbody key={i}>
                                    {
                                        Object.entries(el).map(([key, value], j) => (
                                            <tr>
                                                <td>{key}</td>
                                                <td>{value}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            ))}
                        </table>
                        <h5>Broadband Deals Available for {this.props.property.full_address}</h5>
                        <p>Compare the latest boradband deals from providers below. Also check our tips of choosing the right broadband package further down the page.</p>
                        <p><a href="https://www.awin1.com/cread.php?s=1014966&v=2973&q=316550&r=440043">
                            <img src="https://www.awin1.com/cshow.php?s=1014966&v=2973&q=316550&r=440043" width="100%" border="0" />
                        </a></p>
                        <h5>Average Download Speed</h5>
                        <p>The average download speed is a much better indicator of what you're likely to experience compared with the Maximum Download Speed because it takes into account factors such as number of users sharing a line, distance from the exchange and local infrastructure.</p>
                        <h5>Average Upload Speed</h5>
                        <p>If you're working from home, an avid gamer or enjoy share music and movies with your friends, then Average Upload Speed is an important factor. Anything below 4Mbps is going to slow you down and be frustrating so remember to ensure the broadband company you choose offers fast uploads.</p>
                        <h5>What does Superfast Broadband Available mean?</h5>
                        <p>Superfast broadband means there is fibre cables delivering broadband on this street. This means you are likely to receive download speeds over 24Mbps which is required if you want to stream services such as Netflix. Remember it is no guarantee of the speed you'll receive which is why you should compare 'Average Download Speeds' too.</p>
                        <h5>Tips for choosing the right broadband provider</h5>
                        <p>It's important not just to compare price or max download speed when choosing a broadband package. Make sure you also check things like:</p>
                            <ul>
                                <li>Contract Term - How many months are you tied into the deal</li>
                                <li>Throttle Speed - Does the provider reduce your max speed after hitting a certain download limit</li>
                                <li>Support - Does the company offer good customer support online and via UK call centers</li>
                                <li>Reviews - What do existing customers say on websites such as Google Reviews</li>
                            </ul>

                    </div>
                </div>
                    </div>
                </Layout>

        );

    }
}

Broadband.getInitialProps = async ({ req, query: { postcode, address } }) => {
    const res = await fetch(process.env.BACKEND_URL + "address/" + postcode + "/" + address);
    const res_broadband = await fetch(process.env.BACKEND_URL + "address_broadband/" + postcode);
    const json_broadband = await res_broadband.json();
    const json = await res.json();
    return { property: json.data, prices: json.data.prices.data, broadbandData: json_broadband }
};

export default Broadband;
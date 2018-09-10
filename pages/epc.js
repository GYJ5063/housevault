import React from "react";
import fetch from "isomorphic-fetch";
import _ from "lodash";
import EpcEnergyEfficiencyGraph from "../components/EpcEnergyEfficiencyGraph";
import EpcEnvironmentalImpactGraph from "../components/EpcEnvironmentalImpactGraph";
import PropertyMenu from "../components/PropertyMenu";
import Layout from '../components/Layout'
class Epc extends React.Component {
    render( ) {

        if(_.isEmpty(this.props.epc)) {
            return (
                <div className="container list-page-padding">
                    <div className="row">
                        <PropertyMenu url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.house_number}/>
                        <div className="col">
                            <div className="text-center">
                                No EPC data for this address, this might be because this property hasn't been sold since the EPC was
                                brought in.
                            </div>
                        </div>
                    </div>

                </div>
            )
        } else {
        return (

            <Layout>
                <PropertyMenu url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.house_number} />
                <div className="container list-page-padding">
            <div className="row">

            <div className="col">


            <h1>EPC details for {this.props.property.full_address}</h1>
            <p>An Energy Performance Certificate shows the energy efficiency of a domestic property in the UK. It is useful for understanding how efficient
                a home is including how much your energy bills are likely to be. Once you understand where you're wasting energy you can make changes to save money and help the environment. </p>
                <p>The energy efficiency assessment for <u>{this.props.property.full_address}</u> took place on {this.props.epc.inspection_date}. The inspection resulted in a rating of <u>{this.props.epc.current_energy_rating}</u> compared to the average UK rating of <u>D</u>.</p>
                <p>The estimated annual energy bill is <strong>&pound;{this.props.epc.hot_water_cost_current + this.props.epc.heating_cost_current + this.props.epc.lighting_cost_current}</strong> compared to a UK average of <strong>&pound;1350</strong>. The EPC report has highlighted several improvements measures the homeowner could undertake to increase the rating to {this.props.epc.potential_energy_rating} and reduce the annual energy bill by £{(this.props.epc.hot_water_cost_current + this.props.epc.heating_cost_current + this.props.epc.lighting_cost_current)-(this.props.epc.hot_water_cost_potential + this.props.epc.heating_cost_potential + this.props.epc.lighting_cost_potential)}.</p>
            <div className="row">
                <div className="col">
                   <EpcEnergyEfficiencyGraph epc={this.props.epc}/>
                </div>

                <div className="col">
                    <EpcEnvironmentalImpactGraph epc={this.props.epc} />
                </div>
            </div>
                <br/>
            <div className="row">
                <div className="col">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Property Assessment Results
                        </div>
                        <div className="panel-body">
                            <ul className="list-unstyled">

                                <li>Floor area: {this.props.epc.total_floor_area} sqm</li>
                                <li>Current Energy Rating: {this.props.epc.current_energy_rating}</li>
                                <li>Potential Rating: {this.props.epc.potential_energy_rating}</li>
                                <li>Current Carbon Footprint: {this.props.epc.co2_emmissions_current}</li>
                                <li>Potential Carbon Footprint: {this.props.epc.co2_emissions_potential}</li>
                                <li>Annual Saving {_.round(this.props.epc.co2_emmissions_current - this.props.epc.co2_emissions_potential,2)}</li>
                                <li>Equal to
                                    planting {_.round(this.props.epc.co2_emmissions_current - this.props.epc.co2_emissions_potential) * 5} trees
                                    per year
                                </li>
                                <li>Inspection Date: {this.props.epc.inspection_date} </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Running Costs & Potential Savings
                        </div>
                        <div className="panel-body">
                            <ul className="list-unstyled">
                                <li>Annual Fuel
                                    Bill: &pound;{this.props.epc.hot_water_cost_current + this.props.epc.heating_cost_current + this.props.epc.lighting_cost_current}</li>
                                <li>UK Average: &pound; 1350</li>
                                <li>Difference: &pound; {1350 -(this.props.epc.hot_water_cost_current + this.props.epc.heating_cost_current + this.props.epc.lighting_cost_current)}</li>
                                <li>Potential Bill: &pound; {(this.props.epc.hot_water_cost_potential + this.props.epc.heating_cost_potential + this.props.epc.lighting_cost_potential)}</li>
                                <li>Potential Saving: &pound;{(this.props.epc.hot_water_cost_current + this.props.epc.heating_cost_current + this.props.epc.lighting_cost_current)-(this.props.epc.hot_water_cost_potential + this.props.epc.heating_cost_potential + this.props.epc.lighting_cost_potential)}</li>
                                <li>Saving: {_.round((this.props.epc.hot_water_cost_potential + this.props.epc.heating_cost_potential + this.props.epc.lighting_cost_potential)/(this.props.epc.hot_water_cost_current + this.props.epc.heating_cost_current + this.props.epc.lighting_cost_current)*100)} %</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
                </div>
            </Layout>

        );
        }
    }
}

Epc.getInitialProps = async ({ req, query: { postcode, address } }) => {
    const res = await fetch(process.env.BACKEND_URL + "address/" + postcode + "/" + address);
    const json = await res.json();
    return { property: json.data, epc: _.first(_.orderBy(json.data.epc.data,['id'],['desc'])) }
};

export default Epc;

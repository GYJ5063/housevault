import React, {Component} from "react";
import FormValidator from "../components/FormValidator";
import axios from "axios/index";
import _ from 'lodash';
import { Table } from 'reactstrap';
import Layout from '../components/Layout'

class Valuation extends Component {

    constructor(props) {
        super(props);
        this.validator = new FormValidator([
            {
                field: 'postcode',
                method: 'isPostalCode',
                args: ['GB'],
                validWhen: true,
                message: 'Postcode not valid.'
            },
            {
                field: 'building_number',
                method: (field, data) => {
                    if(data.building_name || parseInt(data.building_number)) {
                        return true;
                    }
                    return false;
                },
                validWhen: true,
                message: 'Building number is required if building name is blank.'
            },
            {
                field: 'built_from',
                method: 'isEmpty',
                validWhen: false,
                message: 'Built from is required.'
            },
            {
                field: 'property_type',
                method: 'isEmpty',
                validWhen: false,
                message: 'Property type is required.'
            },
            {
                field: 'wall_type',
                method: 'isEmpty',
                validWhen: false,
                message: 'Wall type is required.'
            },
            {
                field: 'number_habitable_rooms',
                method: 'isEmpty',
                validWhen: false,
                message: 'Number of habitable rooms is required.'
            },
            {
                field: 'total_floor_area',
                method: _.inRange,
                args: [10, 600],
                validWhen: true,
                message: 'Area must be a valid number between 10 and 600.'
            },
            {
                field: 'report',
                method: 'isEmpty',
                validWhen: false,
                message: 'Select if a report is needed.'
            }
        ]);

        this.state = {
            postcode: '',
            building_number: '',
            building_name: '',
            built_from: '',
            property_type: '',
            wall_type: '',
            number_habitable_rooms:'',
            total_floor_area: '',
            report: '',
            validation: this.validator.valid(),
            hideLoadingSpinner: true,
            valuation: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.submitted = false;
    }

    handleChange (e) {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleSubmit (e, message) {
        e.preventDefault();

        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;

        let formData = {
            postcode: this.state.postcode,
            building_number: this.state.building_number,
            building_name: this.state.building_name,
            built_from: this.state.built_from,
            property_type: this.state.property_type,
            wall_type: this.state.wall_type,
            number_habitable_rooms: this.state.number_habitable_rooms,
            total_floor_area: this.state.total_floor_area,
            report: this.state.report
        }

        if (validation.isValid) {
            if(formData.building_name && !formData.building_number){
                formData.building_number = 0;
            }

            this.setState({hideLoadingSpinner: false});
            let self = this;
            let config = {
                headers: {
                    "Authorization": process.env.PRICEPREDICTION_TOKEN
                }
            };

            axios.post(process.env.PRICEPREDICTION_URL, formData, config)
                .then(function (response) {
                    self.setState({ hideLoadingSpinner: true, valuation: response.data });
                    console.log(this.state.valuation);
                })
                .catch(function (error) {
                    self.setState({ hideLoadingSpinner: true});
                    console.log(error);
                });
        }
    }

    render() {
        let validation = this.submitted ?
            this.validator.validate(this.state) :
            this.state.validation;

        if(!this.state.hideLoadingSpinner) {
            return (
                <div className="container list-page-padding">
                    <div className="row">
                        <div className="col text-center">
                            <i className="fa fa-spinner fa-spin fa-4x"></i>
                        </div>
                    </div>
                </div>
            )
        }
        if(!_.isEmpty(this.state.valuation)) {

            return (
                <div className="container list-page-padding text-center">
                    <Layout>
                    <div className="row">
                        <div className="col">
                            <h1>We have successfully valued your property</h1>
                            <p>Your valuation is</p>
                            <h3>{this.state.valuation.predict_results.predict_price}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Comparable Properties</h2>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Address</th>
                                        <th>Current Valuation</th>
                                        <th>Distance to valuated property</th>
                                        <th>House Type</th>
                                        <th>Postcode</th>
                                        <th>Rooms</th>
                                        <th>Size</th>
                                        <th>Sold Date</th>
                                        <th>Sold Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                _.map(this.state.valuation.comparable_properties, (cp, i) => (
                                    
                                    <tr key={i}>
                                        <td>{cp.address_1}</td>
                                        <td>{cp.current_valuation}</td>
                                        <td>{cp.distance_to_query_property}</td>
                                        <td>{cp.house_type}</td>
                                        <td>{cp.postcode}</td>
                                        <td>{cp.rooms}</td>
                                        <td>{cp.size}</td>
                                        <td>{cp.sold_date}</td>
                                        <td>{cp.sold_price}</td>
                                    </tr>
                                ))
                            }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        </div>
                    </div>
                    </Layout>
                </div>
            )

        }
        return (
            <div className="container list-page-padding">
                <Layout>
                <h1>Request Valuation</h1>
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.handleSubmit}>
                            <div className="alert alert-danger d-none">
                                <strong>Whoops!</strong> There were some problems with your input.
                                <br/>
                                <ul id="errMsg">
                                </ul>
                            </div>

                            <div className="row">
                                <span className="col-sm-2">&nbsp;</span>
                                <span id="err_postcode" className="col-sm-8 errText">{validation.postcode.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="postcode">Postcode</label></span>
                                <input type="text" name="postcode" id="postcode" value={this.state.postcode} className="field col-sm-8" placeholder="Postcode" onChange={this.handleChange} /><br/>
                            </div>

                            <div className="row">
                                <span className="col-sm-2">&nbsp;</span>
                                <span id="err_building_number" className="col-sm-8 errText">{validation.building_number.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="building_number">Building Number</label></span>
                                <input type="text" name="building_number" id="building_number" value={this.state.building_number} className="field col-sm-8" placeholder="Building number" onChange={this.handleChange} /><br/>
                            </div>

                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="building_name">Building Name</label></span>
                                <input type="text" name="building_name" id="building_name" value={this.state.building_name} className="field col-sm-8" placeholder="Building Name" onChange={this.handleChange} /><br/>
                                <p style={{ fontSize: 14, marginLeft: 200 }}>Can be left blank if building number is present</p>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_built_from" className="col-sm-8 errText">{validation.built_from.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="built_from">Built From</label></span>
                                <select name="built_from" className="field col-sm-8" id="built_from" onChange={this.handleChange}>
                                    <option value="">Choose Built From</option>
                                    <option value="Enclosed End-Terrace">Enclosed End Terrace</option>
                                    <option value="Enclosed Mid-Terrace">Enclosed Mid Terrace</option>
                                    <option value="End-Terrace">End Terrace</option>
                                    <option value="Mid-Terrace">Mid Terrace</option>
                                    <option value="Semi-Detached">Semi Detached</option>
                                    <option value="Detached">Detached</option>
                                </select>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_property_type" className="col-sm-8 errText">{validation.property_type.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="property_type">Property Type</label></span>
                                <select name="property_type" className="field col-sm-8" id="property_type" onChange={this.handleChange}>
                                    <option value="">Choose Property Type</option>
                                    <option value="Flat">Flat</option>
                                    <option value="Maisonette">Maisonette</option>
                                    <option value="Bungalow">Bungalow</option>
                                    <option value="House">House</option>
                                </select>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_wall_type" className="col-sm-8 errText">{validation.wall_type.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="wall_type">Wall type</label></span>
                                <select name="wall_type" className="field col-sm-8" id="wall_type" onChange={this.handleChange}>
                                    <option value="">Choose Wall Type</option>
                                    <option value="system">System</option>
                                    <option value="brick">Brick</option>
                                    <option value="cavity wall">Cavity Wall</option>
                                    <option value="timber">Timber</option>
                                    <option value="stone">Stone</option>
                                    <option value="cob">Cob</option>
                                    <option value="unknown">Unknown</option>
                                </select>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_number_habitable_rooms" className="col-sm-8 errText">{validation.number_habitable_rooms.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="number_habitable_rooms">Number Habitable Rooms</label></span>
                                <select name="number_habitable_rooms" className="field col-sm-8" id="number_habitable_rooms" onChange={this.handleChange}>
                                    <option value="">Choose number of habitale rooms</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_total_floor_area" className="col-sm-8 errText">{validation.total_floor_area.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="total_floor_area">Approximate Size (Between 10 - 600 sqm)</label></span>
                                <input type="text" name="total_floor_area" id="total_floor_area" value={this.state.total_floor_area} className="field col-sm-8" placeholder="Total Floor Area" onChange={this.handleChange} /><br/>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_total_report" className="col-sm-8 errText">{validation.report.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="report">Report needed</label></span>
                                <select name="report" className="field col-sm-8" id="report" onChange={this.handleChange}>
                                    <option value="">Choose if report is required</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>


                            <button onClick={this.handleSubmit} className="btn btn-primary pull-right">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                </Layout>
            </div>
        );

    }
}




export default Valuation;
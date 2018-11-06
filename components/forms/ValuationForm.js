import React from "react";
import FormValidator from "../../components/FormValidator";
import { ButtonGroup, Button } from 'reactstrap'

import _ from "lodash";
import axios from "axios";

class ValuationForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.valuationSubmit = this.valuationSubmit.bind(this);
        this.validator = new FormValidator([
            {
                field: 'building_number',
                method: 'isEmpty',
                validWhen: false,
                message: 'Building Number is required.'
            },
            {
                field: 'address_list',
                method: 'isEmpty',
                validWhen: false,
                message: 'Address is required.'
            },
            {
                field: 'postcode',
                method: 'isEmpty',
                validWhen: false,
                message: 'Post Code is required.'
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
                field: 'bedrooms',
                method: 'isEmpty',
                validWhen: false,
                message: 'Number of bedrooms is required.'
            },
            {
                field: 'reception_rooms',
                method: 'isEmpty',
                validWhen: false,
                message: 'Number of reception_rooms is required.'
            },
            {
                field: 'total_floor_area',
                method: _.inRange,
                args: [10, 600],
                validWhen: true,
                message: 'Area must be a valid number between 10 and 600.'
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
            total_floor_area: 100,
            validation: this.validator.valid(),
            valuation:{},
            address_picker_hidden:true,
            bedrooms:0,
            reception_rooms:0,
            step:1

        }

    }

    handleChange (e) {
        // console.log(e.target.name,e.target.value);
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    valuationSubmit(e, message) {
        e.preventDefault();

        if(this.state.step === 1) {
            this.setState({"step":2});
        }
        if(this.state.step === 2) {
            this.setState({"step":3});
        }
        const validation = this.validator.validate(this.state);
        this.submitted = true;

        let formData = {
            postcode: this.state.postcode,
            building_number: this.state.building_number,
            building_name: this.state.building_name,
            built_from: this.state.built_from,
            property_type: this.state.property_type,
            wall_type: this.state.wall_type,
            number_habitable_rooms: this.state.reception_rooms + this.state.bedrooms ,
            total_floor_area: this.state.total_floor_area,
            report: 1
        };

        if (validation.isValid) {

            this.setState({hideLoadingSpinner: false});
            let self = this;
            let config = {
                headers: {
                    "Authorization": process.env.PRICEPREDICTION_TOKEN
                }
            };

            axios.post(process.env.PRICEPREDICTION_URL, formData, config)
                .then(function (response) {
                    console.log(response.data);
                    self.setState({ hideLoadingSpinner: true, valuation: response.data });
                })
                .catch(function (error) {
                    self.setState({ hideLoadingSpinner: true});
                });
        }

    }
    setPropertyType(type) {
        this.setState({property_type:type});
    }

    findAddress() {
        this.setState({address_picker_hidden:false});
    }
    render() {
        let validation = this.submitted ?
            this.validator.validate(this.state) :
            this.state.validation;

        return (
            <form onSubmit={this.valuationSubmit}>
                <div className="alert alert-danger d-none">
                    <strong>Whoops!</strong> There were some problems with your input.
                    <br/>
                    <ul id="errMsg">
                    </ul>
                </div>
                {(this.state.step === 1) ?
                    <div>
                        <h1>Free Instant Online Valuation</h1>
                        <p>We offer instant online valuations, simply enter your post code below for an indication of what your property is worth.</p>
                        <div className="form-group">
                            <span id="postcode" className="errText">{validation.postcode.message}</span>
                            <label htmlFor="postcode">Postcode</label>
                            <input type="text" name="postcode" id="postcode" value={this.state.postcode} className="form-control" placeholder="Post Code" onChange={this.handleChange} />
                        </div>
                        <Button color="danger" block onClick={() => {this.findAddress()}}> Find Address</Button>

                        <div className={(this.state.address_picker_hidden) ? "d-none" : "" } >
                            <div className="form-group">
                                <br />
                                <select name="address_list" className="form-control" id="address_list" onChange={this.handleChange}>
                                    <option value="">Choose Address</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <span id="err_bedrooms" className=" errText">{validation.bedrooms.message}</span>
                            <label htmlFor="bedrooms">Number Bedrooms</label>
                            <select name="bedrooms" className="form-control" id="bedrooms" onChange={this.handleChange}>
                                <option value="">Choose number of bedrooms</option>
                                <option value="0">Studio</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6+</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <span id="err_reception_rooms" className=" errText">{validation.reception_rooms.message}</span>
                            <label htmlFor="reception_rooms">Number Reception Rooms</label>
                            <select name="reception_rooms" className="form-control" id="reception_rooms" onChange={this.handleChange}>
                                <option value="">Choose number of reception rooms</option>
                                <option value="1">1</option>
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
                    </div> : ''}

                {(this.state.step === 2) ?
                <div>
                    <h1>Free Instant Online Valuation</h1>
                    <p>We offer instant online valuations, simply enter your post code below for an indication of what your property is worth.</p>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            Choose a property type
                        </div>
                    </div>

                    <ButtonGroup>
                        <Button color="primary" active={(this.state.property_type === "Flat")}  onClick={() => {this.setPropertyType('Flat')}} >Flat</Button>
                        <Button color="primary" active={(this.state.property_type === "Maisonette")} onClick={() => {this.setPropertyType('Maisonette')}} >Maisonette</Button>
                        <Button color="primary" active={(this.state.property_type === "Bungalow")} onClick={() => {this.setPropertyType('Bungalow')}} >Bungalow</Button>
                        <Button color="primary" active={(this.state.property_type === "House")} onClick={() => {this.setPropertyType('House')}}>House</Button>
                    </ButtonGroup>
                </div>

                <div className="form-group">
                    <span id="err_built_from" className="errText">{validation.built_from.message}</span>
                    <label htmlFor="built_from">Built From</label>
                    <select name="built_from" className="form-control" id="built_from" onChange={this.handleChange}>
                        <option value="">Choose Built From</option>
                        <option value="Enclosed End-Terrace">Enclosed End Terrace</option>
                        <option value="Enclosed Mid-Terrace">Enclosed Mid Terrace</option>
                        <option value="End-Terrace">End Terrace</option>
                        <option value="Mid-Terrace">Mid Terrace</option>
                        <option value="Semi-Detached">Semi Detached</option>
                        <option value="Detached">Detached</option>
                    </select>
                </div>

                <div className="form-group">
                    <span id="err_total_floor_area" className="errText">{validation.total_floor_area.message}</span>
                    <label htmlFor="total_floor_area">Approximate Size (Between 10 - 600 sqm)</label>
                    <input type="text" name="total_floor_area" id="total_floor_area" value={this.state.total_floor_area} className="form-control" placeholder="Total Floor Area" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <span id="err_wall_type" className="errText">{validation.wall_type.message}</span>
                    <label htmlFor="wall_type">Construction type</label>
                    <select name="wall_type" className="form-control" id="wall_type" onChange={this.handleChange}>
                        <option value="">Choose Construction Type</option>
                        <option value="brick">Brick</option>
                        <option value="cavity wall">Cavity Wall</option>
                        <option value="timber">Timber</option>
                        <option value="stone">Stone</option>
                        <option value="cob">Cob</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>




                </div>
                : ''}
                {(this.state.step === 3) ?
                    <h1>Your valuation is on its way</h1>
                    :''}

                <div className="row">
                    <div className="col-sm">
                        <button onClick={this.handleSubmit} className="btn btn-primary pull-right">
                            {(this.state.step ===2) ? 'Submit' : 'Next'}
                        </button>
                    </div>

                </div>

            </form>
        );
    }
}
export default ValuationForm;
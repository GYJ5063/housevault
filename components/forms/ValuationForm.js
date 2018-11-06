import React from "react";
import FormValidator from "../../components/FormValidator";
import { ButtonGroup, Button } from 'reactstrap'

import _ from "lodash";

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
            total_floor_area: 0,
            validation: this.validator.valid(),
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
        console.log(this.state, );
        const validation = this.validator.validate(this.state);
        // this.setState({ validation });
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
            report: 1
        }

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
                <div className="form-group">
                    <span id="building_number" className="errText">{validation.building_number.message}</span>
                    <label htmlFor="building_number">Building Number</label>
                    <input type="text" name="building_number" id="building_number" value={this.state.building_number} className="form-control" placeholder="Building Number" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <span id="postcode" className="errText">{validation.postcode.message}</span>
                    <label htmlFor="postcode">Postcode</label>
                    <input type="text" name="postcode" id="postcode" value={this.state.postcode} className="form-control" placeholder="Post Code" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <span id="err_total_floor_area" className="errText">{validation.total_floor_area.message}</span>
                    <label htmlFor="total_floor_area">Approximate Size (Between 10 - 600 sqm)</label>
                    <input type="text" name="total_floor_area" id="total_floor_area" value={this.state.total_floor_area} className="form-control" placeholder="Total Floor Area" onChange={this.handleChange} />
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
                    <span id="err_property_type" className=" errText">{validation.property_type.message}</span>
                    <label htmlFor="property_type">Property Type</label>
                    <select name="property_type" className="form-control" id="property_type" onChange={this.handleChange}>
                        <option value="">Choose Property Type</option>
                        <option value="Flat">Flat</option>
                        <option value="Maisonette">Maisonette</option>
                        <option value="Bungalow">Bungalow</option>
                        <option value="House">House</option>
                    </select>
                    {/*<ButtonGroup>*/}
                        {/*<Button>Flat</Button>*/}
                        {/*<Button>Maisonette</Button>*/}
                        {/*<Button>Bungalow</Button>*/}
                        {/*<Button>House</Button>*/}
                    {/*</ButtonGroup>*/}
                </div>

                <div className="form-group">
                    <span id="err_wall_type" className="errText">{validation.wall_type.message}</span>
                    <label htmlFor="wall_type">Wall type</label>
                    <select name="wall_type" className="form-control" id="wall_type" onChange={this.handleChange}>
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


                <div className="form-group">
                    <span id="err_number_habitable_rooms" className=" errText">{validation.number_habitable_rooms.message}</span>
                    <label htmlFor="number_habitable_rooms">Number Habitable Rooms</label>
                    <select name="number_habitable_rooms" className="form-control" id="number_habitable_rooms" onChange={this.handleChange}>
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

                <div className="form-group">
                    <span id="err_total_floor_area" className="errText">{validation.total_floor_area.message}</span>
                    <label htmlFor="total_floor_area">Approximate Size (Between 10 - 600 sqm)</label>
                    <input type="text" name="total_floor_area" id="total_floor_area" value={this.state.total_floor_area} className="form-control" placeholder="Total Floor Area" onChange={this.handleChange} />
                </div>




                <div className="row">
                    <div className="col-sm">
                        <button onClick={this.handleSubmit} className="btn btn-primary pull-right">
                            Submit
                        </button>
                    </div>

                </div>

            </form>
        );
    }
}
export default ValuationForm;
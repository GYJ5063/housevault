import React from "react";
import { ButtonGroup, Button } from 'reactstrap'
import FormValidator from "../FormValidator";
import _ from "lodash";

class ValuationStepTwo extends React.Component {

    constructor (props) {
        super(props);


        this.validator = new FormValidator([
            {
                field: 'built_from',
                method: 'isEmpty',
                message: 'Built from is required.'
            },
            {
                field: 'property_type',
                method: 'isEmpty',
                message: 'Property type is required.'
            },
            {
                field: 'wall_type',
                method: 'isEmpty',
                message: 'Wall type is required.'
            },

            {
                field: 'total_floor_area',
                method: _.inRange,
                args: [10, 600],
                message: 'Area must be a valid number between 10 and 600.'
            },
            {
                field: 'first_name',
                method: 'isEmpty',
                message: 'First Name is required.'
            },
            {
                field: 'last_name',
                method: 'isEmpty',
                message: 'Last Name is required.'
            },
            {
                field: 'phone_number',
                method: 'isEmpty',
                message: 'Phone Number is required.'
            },
            {
                field: 'email',
                method: 'isEmpty',
                message: 'Email Address is required.'
            }
        ]);


        this.state = {
            property_type: '',
            wall_type: 'brick',
            total_floor_area: 100,
            built_from: 'Semi-Detached',
            first_name:'',
            last_name:'',
            email: '',
            phone_number: '',
            validation: this.validator.valid(),
            submitted: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {

        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    setPropertyType(type) {
        this.setState({property_type:type});
    }

    handleSubmit(e, message) {
        e.preventDefault();
        this.setState({ "submitted":true });

        if (this.state.validation.isValid) {
            this.props.submit(this.state);
        }
    }

    render() {

        let validation = this.state.submitted ?
            this.validator.validate(this.state) :
            this.state.validation;

        return (
            <form onSubmit={this.handleSubmit}>
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
                        <br />
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
                        <br/>
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

                    <div className="form-group">
                        <span id="err_first_name" className="errText">{validation.first_name.message}</span>
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" id="first_name" value={this.state.first_name} className="form-control" placeholder="First Name" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <span id="err_last_name" className="errText">{validation.last_name.message}</span>
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" id="last_name" value={this.state.last_name} className="form-control" placeholder="Last Name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <span id="err_email" className="errText">{validation.email.message}</span>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" value={this.state.email} className="form-control" placeholder="Email" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <span id="err_phone_number" className="errText">{validation.phone_number.message}</span>
                        <label htmlFor="phone_number">Phone Number</label>
                        <input type="text" name="phone_number" id="phone_number" value={this.state.phone_number} className="form-control" placeholder="Phone Number" onChange={this.handleChange} />
                    </div>

                <button className="btn btn-primary pull-right">
                    Next
                </button>
            </form>
        )
    }

}
export default ValuationStepTwo;
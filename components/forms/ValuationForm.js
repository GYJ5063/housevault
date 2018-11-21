import React from "react";
import { ButtonGroup, Button } from 'reactstrap'
import _ from "lodash";
import axios from "axios";

import {compose, graphql, Query} from 'react-apollo';
import gql from 'graphql-tag';

import FormValidator from "../../components/FormValidator";
import AddressSearch from '../../components/AddressSearch';


class ValuationForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.valuationSubmit = this.valuationSubmit.bind(this);
        this.selectAddress = this.selectAddress.bind(this);
        this.validator = new FormValidator([
            {
                field: 'address',
                method: 'isEmpty',
                validWhen: false,
                message: 'Postcode and address required.'
            },
            {
                field: 'bedrooms',
                method: 'isEmpty',
                validWhen: false,
                message: 'Number of bedrooms is required.'
            },
            {
                field: 'reception_rooms',
                method: (value, args) => {
                    return parseInt(value) + parseInt(args.bedrooms) > 1;
                },
                validWhen: true,
                message: 'Total rooms must be greater than 1.'
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
                field: 'total_floor_area',
                method: _.inRange,
                args: [10, 600],
                validWhen: true,
                message: 'Area must be a valid number between 10 and 600.'
            },
            {
                field: 'first_name',
                method: 'isEmpty',
                validWhen: false,
                message: 'First Name is required.'
            },
            {
                field: 'last_name',
                method: 'isEmpty',
                validWhen: false,
                message: 'Last Name is required.'
            },
            {
                field: 'phone_number',
                method: 'isEmpty',
                validWhen: false,
                message: 'Phone Number is required.'
            },
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'Email Address is required.'
            }
        ]);

        this.state = {
            postcode: 'SN6 6BW',
            address: {postcode: 'SN6 6BW',building_number:'62', building_name: ''},
            building_number: '',
            building_name: '',
            built_from: '',
            property_type: '',
            wall_type: '',
            total_floor_area: 100,
            validation: this.validator.valid(),
            valuation:{},
            address_picker_hidden: true,
            bedrooms: '',
            reception_rooms: '',
            first_name:'',
            last_name:'',
            email: '',
            phone_number: '',
            step:1,
            addressList: []
        }

    }

    handleChange (e) {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    valuationSubmit(e, message) {
        e.preventDefault();

        const prevStepIsValid = 
            !!this.state.address &&
            (parseInt(this.state.bedrooms) + parseInt(this.state.reception_rooms)) > 1;

        if(this.state.step === 1 && prevStepIsValid) {
            this.setState({"step":2});

        }

        const validation = this.validator.validate(this.state);
        this.setState({ validation });

        if(!prevStepIsValid) {
            return;
        }

        this.submitted = true;
        
        const { address } = this.state;

        let formData = {
            postcode: address.postcode,
            building_number: address.building_number,
            building_name: address.building_name,
            built_from: this.state.built_from,
            property_type: this.state.property_type,
            wall_type: this.state.wall_type,
            num_bedrooms: parseInt(this.state.bedrooms),
            num_receptionrooms: parseInt(this.state.reception_rooms),
            number_habitable_rooms: (parseInt(this.state.reception_rooms) + parseInt(this.state.bedrooms)),
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
                    console.log({
                        first_name: self.state.first_name,
                        last_name: self.state.last_name,
                        email: self.state.email,
                        phone_number:self.state.phone_number,
                        rental_valuation:response.data.rental_results.reantal_predict_results,
                        sales_valuation:response.data.selling_results.predict_results.predict_price,
                        company_id:self.props.company.id
                    });
                    console.log(self.props);
                    self.props.createLead({
                        variables: {
                            first_name: self.state.first_name,
                            last_name: self.state.last_name,
                            email: self.state.email,
                            phone_number:self.state.phone_number,
                            rental_valuation:response.data.rental_results.reantal_predict_results,
                            sales_valuation:response.data.selling_results.predict_results.predict_price,
                            company_id:self.props.company.id
                        }
                    });

                    self.props.report(response.data);
                    self.setState({ hideLoadingSpinner: true, valuation: response.data, step:3 });
                })
                .catch(function (error) {
                    console.error(error);
                    self.setState({ hideLoadingSpinner: true});
                });
        }

    }
    setPropertyType(type) {
        this.setState({property_type:type});
    }

    selectAddress(address) {
        this.setState({ address });
    }

    renderValuationError() {
        return (
            <div className="alert alert-danger d-none">
                <strong>Whoops!</strong> There were some problems with your input.
                <br/>
                <ul id="errMsg">
                </ul>
            </div>
        );
    }
    render() {
        let validation = this.submitted ?
            this.validator.validate(this.state) :
            this.state.validation;
        return (
            <form onSubmit={this.valuationSubmit}>
                {this.renderValuationError()}

                {(this.state.step === 1) ?
                    <div >
                        <span id="address" className=" errText">{validation.address.message}</span>
                        <br />
                        <AddressSearch onSelectAddress={this.selectAddress}/>

                        <div className="form-group">
                            <span id="bedrooms" className=" errText">{validation.bedrooms.message}</span>
                            <br />
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
                            <br />
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

                    </div>
                    : ''}

                {(this.state.step === 2) ?
                <div>
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

                </div>
                : ''}


                {(this.state.step !== 3) ?
                <div className="row">
                    <div className="col-sm">

                        <button onClick={this.valuationSubmit} className="btn btn-primary pull-right">
                            {(this.state.step === 2) ? 'Submit' : 'Next'}
                        </button>
                    </div>

                </div>
                    : '' }

            </form>
        );
    }
}

const createLeadMutator = gql`
    mutation createLead($first_name: String!, $last_name: String!, $email: String!, $phone_number: String!, 
            $sales_valuation: Float!, $rental_valuation: Float!, $company_id: Int!) {
             createLead(
                first_name: $first_name, 
                last_name: $last_name, 
                email: $email,
                phone_number:$phone_number, 
                sales_valuation:$sales_valuation, 
                rental_valuation:$rental_valuation, 
                company_id:$company_id
              ) {
                id
              }
          }
`;

export default compose(
    graphql(createLeadMutator, { name: 'createLead'}),
    //graphql()
)(ValuationForm);
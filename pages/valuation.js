import React, {Component} from "react";
import FormValidator from "../components/FormValidator";
import axios from "axios/index";

class Valuation extends Component {

    constructor(props) {
        super(props);
        this.validator = new FormValidator([
            {
                field: 'first_name',
                method: 'isEmpty',
                validWhen: false,
                message: 'Name is required.'
            },
            {
                field: 'last_name',
                method: 'isEmpty',
                validWhen: false,
                message: 'Last Name is required.'
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'That is not a valid email.'
            },
            {
                field: 'property_type',
                method: 'isEmpty',
                validWhen: false,
                message: 'Property Type is required.'
            },
            {
                field: 'property_style',
                method: 'isEmpty',
                validWhen: false,
                message: 'Property Style is required.'
            },
            {
                field: 'wall_type',
                method: 'isEmpty',
                validWhen: false,
                message: 'Building Construction is required.'
            },
            {
                field: 'number_of_bedrooms',
                method: 'isEmpty',
                validWhen: false,
                message: 'Number of Bedrooms is required.'
            },
            {
                field: 'number_of_reception_rooms',
                method: 'isEmpty',
                validWhen: false,
                message: 'Number of Reception is required.'
            },
            {
                field: 'number_of_bathrooms',
                method: 'isEmpty',
                validWhen: false,
                message: 'Number of Bathrooms is required.'
            },
            {
                field: 'property_age',
                method: 'isEmpty',
                validWhen: false,
                message: 'Property Age is required.'
            },
            {
                field: 'property_size',
                method: 'isEmpty',
                validWhen: false,
                message: 'Approximate size is required.'
            }
        ]);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            property_type: '',
            property_style: '',
            wall_type: '',
            number_of_bedrooms:'',
            number_of_reception_rooms:'',
            number_of_bathrooms: '',
            property_age: '',
            property_size:'',
            validation: this.validator.valid(),
            hideLoadingSpinner: true
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            property_type: this.state.property_type,
            property_style: this.state.property_style,
            wall_type: this.state.wall_type,
            number_of_bedrooms:this.state.number_of_bedrooms,
            number_of_reception_rooms:this.state.number_of_reception_rooms,
            number_of_bathrooms: this.state.number_of_bathrooms,
            address_id:24868781,
            property_size: this.state.property_size,
            property_age: this.state.property_age
        }

        if (validation.isValid) {
            this.setState({hideLoadingSpinner: false});

            axios.post(process.env.BACKEND_URL +'valuation', formData)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    render() {
        let validation = this.submitted ?
            this.validator.validate(this.state) :
            this.state.validation

        if(!this.state.hideLoadingSpinner) {
            return (
                <div className="container">
                    <div className="loading" >
                        <i className="fa fa-spinner fa-spin fa-10x"></i>
                    </div>
                </div>
            )
        }
        return (
            <div className="container list-page-padding">
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
                                <span id="err_name" className="col-sm-8 errText">{validation.first_name.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="first_name">First Name</label></span>
                                <input type="text" name="first_name" id="first_name" value={this.state.first_name} className="field col-sm-8" placeholder="First Name" onChange={this.handleChange} /><br/>
                            </div>

                            <div className="row">
                                <span className="col-sm-2">&nbsp;</span>
                                <span id="err_name" className="col-sm-8 errText">{validation.last_name.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="last_name">Last Name</label></span>
                                <input type="text" name="last_name" id="last_name" value={this.state.last_name} className="field col-sm-8" placeholder="Last Name" onChange={this.handleChange} /><br/>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_email" className="col-sm-8 errText">{validation.email.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="email">Email</label></span>
                                <input type="text" name="email" id="email" value={this.state.email} className="field col-sm-8" placeholder="Email Address" onChange={this.handleChange} /><br/>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_email" className="col-sm-8 errText">{validation.property_type.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="property_type">Property Type</label></span>
                                <select name="property_type" className="field col-sm-8" id="property_type" onChange={this.handleChange}>
                                    <option value="">Choose Property Type</option>
                                    <option value="Flat">Flat</option>
                                    <option value="House">House</option>
                                    <option value="Maisonette">Maisonette</option>
                                </select>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_email" className="col-sm-8 errText">{validation.property_style.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="property_style">Property Style</label></span>
                                <select name="property_style" className="field col-sm-8" id="property_style" onChange={this.handleChange}>
                                    <option value="">Choose Property Style</option>
                                    <option value="Detatched">Detatched</option>
                                    <option value="Semi Detached">Semi Detached</option>
                                    <option value="End Terrace">End Terrace</option>
                                    <option value="Mid Terrace">Mid Terrace</option>
                                    <option value="Enclosed End-Terrace">Enclosed End-Terrace</option>
                                    <option value="Enclosed Mid-Terrace">Enclosed Mid-Terrace</option>
                                </select>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_email" className="col-sm-8 errText">{validation.wall_type.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="wall_type">Building Construction</label></span>
                                <select name="wall_type" className="field col-sm-8" id="wall_type" onChange={this.handleChange}>
                                    <option value="">Choose Building Construction</option>
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
                                <span id="err_email" className="col-sm-8 errText">{validation.property_age.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="property_age">Building Construction</label></span>
                                <select name="property_age" className="field col-sm-8" id="property_age" onChange={this.handleChange}>
                                    <option value="">Age of Property</option>
                                    <option value="old">Old</option>
                                    <option value="new">New</option>
                                </select>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_email" className="col-sm-8 errText">{validation.number_of_bedrooms.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="number_of_bedrooms">Number of Bedrooms</label></span>
                                <select name="number_of_bedrooms" className="field col-sm-8" id="number_of_bedrooms" onChange={this.handleChange}>
                                    <option value="">Number of Bedrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="6">7</option>
                                    <option value="6">8</option>
                                    <option value="6">9</option>
                                </select>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_email" className="col-sm-8 errText">{validation.number_of_reception_rooms.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="number_of_reception_rooms">Number of Reception Rooms</label></span>
                                <select name="number_of_reception_rooms" className="field col-sm-8" id="number_of_reception_rooms" onChange={this.handleChange}>
                                    <option value="">Number of Bedrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="6">7</option>
                                    <option value="6">8</option>
                                    <option value="6">9</option>
                                </select>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_email" className="col-sm-8 errText">{validation.number_of_bathrooms.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="number_of_bathrooms">Number of Bathrooms</label></span>
                                <select name="number_of_bathrooms" className="field col-sm-8" id="number_of_bathrooms" onChange={this.handleChange}>
                                    <option value="">Number of Bedrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="6">7</option>
                                    <option value="6">8</option>
                                    <option value="6">9</option>
                                </select>
                            </div>

                            <div className="row">
                                <div className="col-sm-2">&nbsp;</div>
                                <span id="err_email" className="col-sm-8 errText">{validation.property_size.message}</span>
                            </div>
                            <div className="row margin-bottom-1">
                                <span className="col-sm-2"><label htmlFor="property_size">Approximate Size</label></span>
                                <input type="text" name="property_size" id="property_size" value={this.state.property_size} className="field col-sm-8" placeholder="Approximate Size" onChange={this.handleChange} /><br/>
                            </div>


                            <button onClick={this.handleSubmit} className="btn btn-primary pull-right">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );

    }
}
export default Valuation;
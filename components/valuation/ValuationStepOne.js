import React from "react";
import AddressSearch from "../AddressSearch";
import FormValidator from "../FormValidator";

class ValuationStepOne extends React.Component {

    constructor (props) {
        super(props);

        this.validator = new FormValidator([
            {
                field: 'bedrooms',
                method: 'isEmpty',
                message: 'Bedrooms are required.'
            },
            {
                field: 'reception_rooms',
                method: 'isEmpty',
                message: 'Reception Rooms are required.'
            },
        ]);

        this.state = {
            address: {postcode: 'SN6 6BW',building_number:'62', building_name: ''},
            bedrooms: "",
            reception_rooms: "",
            validation: this.validator.valid(),
            submitted: false,

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectAddress = this.selectAddress.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    selectAddress(address) {
        this.setState({ address });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ "submitted":true });
        if (this.state.validation.isValid) {
            this.props.submit(this.state);
        }
    }

    handleChange (e) {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    render() {
        let validation = this.state.submitted ?
            this.validator.validate(this.state) :
            this.state.validation;

        return (
            <form onSubmit={this.handleSubmit}>
                {/*<span id="address" className=" errText">{validation.address.message}</span>*/}
                <br />
                <AddressSearch onSelectAddress={this.selectAddress}/>
                <div className="form-group">
                    <span id="bedrooms" className=" errText">{validation.bedrooms.message}</span>
                    <br />
                    <label htmlFor="bedrooms">Number Bedrooms</label>
                    <select name="bedrooms" className="form-control" id="bedrooms" onChange={this.handleChange} value={this.state.bedrooms}>
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
                    <select name="reception_rooms" className="form-control" id="reception_rooms" onChange={this.handleChange} value={this.state.reception_rooms} >
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
                <button className="btn btn-primary pull-right">
                    Next
                </button>
            </form>
        )
    }

}
export default ValuationStepOne;
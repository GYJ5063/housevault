import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';

import { ApolloConsumer, Query } from 'react-apollo';
import gql from 'graphql-tag';
import AddressSearchDropdown from './AddressSearchDropdown';

class AddressSearch extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            postcode: '',
            postcodeEntered: false
        };
    }

    submitPostcode() {
        if (this.state.postcode) {
            this.setState({ postcodeEntered: true });
        }
    }
    handleChange (e) {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    render() {
        return (
            <React.Fragment>
                <div className="form-group">
                    <label htmlFor="postcode">Postcode</label>
                    <input type="text" name="postcode" id="postcode" value={this.state.postcode} className="form-control" placeholder="Post Code" onChange={this.handleChange} />
                </div>
                <Button color="danger" block onClick={() => {this.submitPostcode()}}> Find Address</Button>
                    {
                        this.state.postcodeEntered ? <AddressSearchDropdown postcode={this.state.postcode} onSelectAddress={this.props.onSelectAddress}/> : null
                    }
            </React.Fragment>
        );
    }
}

export default AddressSearch;
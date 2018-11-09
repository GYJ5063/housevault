import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';

import { ApolloConsumer, Query } from 'react-apollo';
import gql from 'graphql-tag';

class AddressSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postcode: null
        };
    }

    findAddress() {
    }
    handleChange() {

    }
    render() {
        return (
            <ApolloConsumer>
                { client => (
                    <React.Fragment>
                    <div className="form-group">
                        <label htmlFor="postcode">Postcode</label>
                        <input type="text" name="postcode" id="postcode" value={this.props.postcode} className="form-control" placeholder="Post Code" onChange={this.handleChange} />
                    </div>
                    <Button color="danger" block onClick={() => {this.findAddress()}}> Find Address</Button>
                    <AddressSearch/>
                    <div>
                        <div className="form-group">
                            <br />
                            <select name="address_id" className="form-control" id="address_id" onChange={this.handleChange}>
                                <option value="">Choose Address</option>
                                {/* {
                                    _.map(this.state.addressList, address => (
                                        <option key={address.id} value={address.id}>
                                            {address.building_number} {address.thoroughfare}
                                        </option>
                                    ))
                                } */}
                            </select>
                        </div>
                    </div>
                    </React.Fragment>
                )}
            </ApolloConsumer>
        );
    }
}

export default AddressSearch;

const QUERY = gql`
        query addresses($postcode: String!) {
            addresses(postcode: $postcode) {
                id
                building_number
                building_name
                thoroughfare
            }
        }
`;

    // client.query({
    //     query,
    //     variables: { postcode: this.state.postcode }
    // })
    // .then(res => {
    //     this.setState({
    //         address_picker_hidden: false,
    //         addressList: res.data.addresses
    //     });
    // })
    // .catch(err => console.error(err));
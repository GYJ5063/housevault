import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import withData from '../lib/apollo';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                first_name: ''
            }
        }
    }

    componentDidMount() {
        //console.log(this.props);
    }

    render() {
        return (
        <div>{this.state.user.first_name || 'blah'}</div>
        );
    }
};

const query = gql`
    query profile {
        profile {
            id
            first_name
            last_name
            company_id
            email
        }
    }
`;

export default graphql(query, {

})(Profile);
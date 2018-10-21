import React, { Component } from 'react';
import _ from 'lodash';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Router } from '../routes'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            hideLoadingSpinner: true
        }
    }

    userIsAuthenticated() {
        const { error } = this.props.data;
        return !(error && error.graphQLErrors[0].message === 'Not Authenticated');
    }

    isDataLoading() {
        const { profile, error } = this.props.data;
        if(error) {
            return false;
        }
        if(!profile && !error) {
            return true;
        }

        return false;
    }

    renderLoadingSpinner() {
        return (
            <div className="container list-page-padding">
                <div className="row">
                    <div className="col text-center">
                        <i className="fa fa-spinner fa-spin fa-4x"></i>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        // this is needed because the first of 2 times render is called
        // it hasn't got the response from the api
        if(this.isDataLoading()) {
            return this.renderLoadingSpinner();
        }

        if(this.userIsAuthenticated()) {
            const { profile } = this.props.data;

            return (
                <div>
                    <div>Name: {profile.first_name} {profile.last_name}</div>
                    <div>Email: {profile.email}</div>
                    <div>Company: {profile.company.name}</div>
                </div>
            );
        }
        else {
            Router.push('/login');

            // push is async so display spinner until there is a result
            return this.renderLoadingSpinner();
        }
    }
};

const query = gql`
    query profile {
        profile {
            id
            first_name
            last_name
            company {
                id
                name
            }
            email
        }
    }
`;

export default graphql(query)(Profile);
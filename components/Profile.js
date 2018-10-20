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

    // componentDidUpdate(prevProps){
    //     if(!this.isDataLoading() && this.props.data.profile) {
    //         const { profile } = this.props.data;
    //         this.setState({ profile });
    //     }
    // }

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

    renderProfileOrRedirect() {
        if(this.userIsAuthenticated()) {
            const { profile } = this.props.data;
            return (
                <div>
                    <div>{profile.id}</div>
                    <div>{profile.first_name}</div>
                    <div>{profile.last_name}</div>
                    <div>{profile.email}</div>
                    <div>{profile.company_id}</div>
                </div>
            );
        }
        else {
            Router.push('/login');
        }
    }
    render() {
        // this is needed because the first of 2 times render is called
        // it hasn't got the response from the api
        if(this.isDataLoading()) {
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

        return (this.renderProfileOrRedirect());
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

export default graphql(query)(Profile);
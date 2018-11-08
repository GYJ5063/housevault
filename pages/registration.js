import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, Alert  } from 'reactstrap';


import FormValidator from '../components/FormValidator';
import Layout from '../components/Layout'

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { Router } from '../routes'

import "../styles/signin.scss"; //import page-specific styles from registration.scsss

class Registration extends Component {
    constructor(props) {
        super(props);

        // Set rules for input fields
        this.validator = new FormValidator([
            {
                field: 'firstName',
                method: 'isEmpty',
                validWhen: false,
                message: 'First name is required'
            },
            {
                field: 'lastName',
                method: 'isEmpty',
                validWhen: false,
                message: 'Last name is required'
            },
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'An email is required'
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'The email you entered in invalid'
            },
            {
                field: 'companyName',
                method: 'isEmpty',
                validWhen: false,
                message: 'A company name is required'
            },
            {
                field: 'companyPostcode',
                method: 'isEmpty',
                validWhen: false,
                message: 'A company postcode is required'
            },
            {
                field: 'companyTown',
                method: 'isEmpty',
                validWhen: false,
                message: 'A company town is required'
            },
            {
                field: 'companyBuildingNumber',
                method: 'isEmpty',
                validWhen: false,
                message: 'A company building number is required'
            },
            {
                field: 'companyTelephone',
                method: 'isEmpty',
                validWhen: false,
                message: 'A company telephone number is required'
            }
        ]);

        this.state = {
            newUser: null,
            error: null,
            email: '',
            firstName: '',
            lastName: '',
            companyName: '',
            companyPostcode: '',
            companyTown: '',
            companyBuildingNumber: '',
            companyTelephone: '',
            validation: this.validator.valid(),
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.submitted = false;
    }
    resetInputFields() {
        this.setState({
            email: '',
            firstName: '',
            lastName: '',
            companyName: '',
            companyPostcode: '',
            companyTown: '',
            companyBuildingNumber: '',
            companyTelephone: '',
        });
    }
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      // Only update the state for the input field that was changed
      this.setState({
        [name]: value
      });

    }

    handleSubmit(event) {
      event.preventDefault();

      // Run the inputs through the validator, and set the result to state.validation
      const validation = this.validator.validate(this.state);
      this.setState({ validation });

      this.submitted = true;

      if (validation.isValid) {
        this.props.mutate({
            variables: {
                email: this.state.email,
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                company_name: this.state.companyName,
                company_postcode: this.state.companyPostcode,
                company_town: this.state.companyTown,
                company_building_number: this.state.companyBuildingNumber,
                company_telephone: this.state.companyTelephone
            }
        })
        .then(res => {
            this.setState({ newUser: res.data.createUser, error: null });
            this.resetInputFields();
        })
        .catch(err => {
            this.setState({ error: err.graphQLErrors[0].message });
            console.error(err.graphQLErrors[0]);
        });

      }
    }
    renderRegistrationResult(){
        if(this.state.newUser) {
            const usr = this.state.newUser;
            const { company } = this.state.newUser;
            return (
                <div>
                  <Alert color="success">
                    <h4 className="alert-heading">New User successfully created</h4>
                    <h3>User:</h3>
                    <p>Id: {usr.id}</p>
                    <p>Name: {usr.first_name}{usr.last_name}</p>
                    <p>Email: {usr.email}</p>
                  </Alert>
                </div>
              );
        }
        if(this.state.error) {
            return (
                <div>
                <Alert color="danger">
                    <h4 className="alert-heading">An error occurred</h4>
                    <p>See console for details.</p>
                </Alert>
              </div>
            );
        }
        return null;
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
        const { loading } = this.props.data;

        if(loading) {
            return this.renderLoadingSpinner();
        } else {
            const { profile } = this.props.data;

            if(profile) {
                return (
                    <div>
                        <Layout>
                          <div className="registration-container">
                              { this.renderRegistrationResult() }
                              <h3>Create an account</h3>
                              <Form>
                                  User:
                                <FormGroup>
                                    <Input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} id="firstName" placeholder="first name"/>
                                    <p className='input-error-text'>{this.state.validation.firstName.message}</p>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} id="lastName" placeholder="last name"/>
                                    <p className='input-error-text'>{this.state.validation.lastName.message}</p>
                                </FormGroup>
                                <FormGroup>
                                  <Input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} id="email" placeholder="email"/>
                                  <p className='input-error-text'>{this.state.validation.email.message}</p>
                                </FormGroup>
                                Company:
                                <FormGroup>
                                  <Input type="text" name="companyName" value={this.state.companyName} onChange={this.handleInputChange} id="companyName" placeholder="company name" />
                                  <p className='input-error-text'>{this.state.validation.companyName.message}</p>
                                </FormGroup>
                                <FormGroup>
                                  <Input type="text" name="companyPostcode" value={this.state.companyPostcode} onChange={this.handleInputChange} id="companyPostcode" placeholder="company postcode" />
                                  <p className='input-error-text'>{this.state.validation.companyPostcode.message}</p>
                                </FormGroup>
                                <FormGroup>
                                  <Input type="text" name="companyTown" value={this.state.companyTown} onChange={this.handleInputChange} id="companyTown" placeholder="company town" />
                                  <p className='input-error-text'>{this.state.validation.companyTown.message}</p>
                                </FormGroup>
                                <FormGroup>
                                  <Input type="text" name="companyBuildingNumber" value={this.state.companyBuildingNumber} onChange={this.handleInputChange} id="companyBuildingNumber" placeholder="company building number" />
                                  <p className='input-error-text'>{this.state.validation.companyBuildingNumber.message}</p>
                                </FormGroup>
                                <FormGroup>
                                  <Input type="tel" name="companyTelephone" value={this.state.companyTelephone} onChange={this.handleInputChange} id="companyTelephone" placeholder="company telephone" />
                                  <p className='input-error-text'>{this.state.validation.companyTelephone.message}</p>
                                </FormGroup>

        
                                <Button color='primary' onClick={this.handleSubmit}>Register</Button>
        
                              </Form>
                          </div>
                        </Layout>
                    </div>
                    );
            } else {
                Router.push('/login');

                // push is async so display spinner until there is a result
                return this.renderLoadingSpinner();
            }
        }
    }
}

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

const mutator = gql`
    mutation createUser(
            $email: String!, $first_name: String!, $last_name: String!,
            $company_name: String!, $company_telephone: String!, $company_postcode: String!, $company_town: String!, $company_building_number: String!) {
                createUser(
                    email: $email, first_name: $first_name, last_name: $last_name,
                    company_name: $company_name, company_telephone: $company_telephone, company_postcode: $company_postcode,
                    company_town: $company_town, company_building_number: $company_building_number) {
                        id
                        first_name
                        last_name
                        email
                        company {
                            id
                            name
                        }
                    }
                }
`;

export default compose(
    graphql(query),
    graphql(mutator)
)(Registration);
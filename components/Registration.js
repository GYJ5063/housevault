import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import FormValidator from '../components/FormValidator';
import Layout from '../components/Layout'

import { graphql, getDataFromTree } from 'react-apollo';
import gql from 'graphql-tag';

import { Router } from '../routes'

import "../styles/signin.scss"; //import page-specific styles from registration.scsss

class Registration extends Component {
    constructor(props) {
        super(props);

        // Set rules for input fields
        this.validator = new FormValidator([
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
                field: 'password',
                method: 'isEmpty',
                validWhen: false,
                message: 'A password is required'
            },
            {
                field: 'companyName',
                method: 'isEmpty',
                validWhen: false,
                message: 'A company name is required'
            },
            {
                field: 'companyAddress',
                method: 'isEmpty',
                validWhen: false,
                message: 'A company address is required'
            },
            {
                field: 'companyTelephone',
                method: 'isEmpty',
                validWhen: false,
                message: 'A company telephone number is required'
            }
        ]);

        this.state = {
            email: '',
            password: '',
            companyName: '',
            companyAddress: '',
            companyTelephone: '',
            validation: this.validator.valid(),
            // hideLoadingSpinner: true
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.submitted = false;
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

      // Send data to database via API call
      if (validation.isValid) {
          // this.setState({hideLoadingSpinner: false});
          alert('form is valid - perform submit action')
      }
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
        console.log(this.props);
        const { loading } = this.props.data;
        if(loading) {
            console.log('loading!!!!!!');
            return this.renderLoadingSpinner();
        } else {
            const { profile } = this.props.data;
            if(profile) {
                return (
                    <div>
                        <Layout>
                          <div className="registration-container">
                              <h3>Create an account</h3>
                              <Form>
                                <FormGroup>
                                  <Input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} id="exampleEmail" placeholder="email"/>
                                  <p className='input-error-text'>{this.state.validation.email.message}</p>
                                </FormGroup>
                                <FormGroup>
                                  <Input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} id="examplePassword" placeholder="password" />
                                  <p className='input-error-text'>{this.state.validation.password.message}</p>
                                </FormGroup>
                                <FormGroup>
                                  <Input type="text" name="companyName" value={this.state.companyName} onChange={this.handleInputChange} id="exampleCompanyName" placeholder="company name" />
                                  <p className='input-error-text'>{this.state.validation.companyName.message}</p>
                                </FormGroup>
                                <FormGroup>
                                  <Input type="text" name="companyAddress" value={this.state.companyAddress} onChange={this.handleInputChange} id="exampleCompanyAddress" placeholder="company address" />
                                  <p className='input-error-text'>{this.state.validation.companyAddress.message}</p>
                                </FormGroup>
                                <FormGroup>
                                  <Input type="tel" name="companyTelephone" value={this.state.companyTelephone} onChange={this.handleInputChange} id="exampleTelephone" placeholder="company telephone" />
                                  <p className='input-error-text'>{this.state.validation.companyTelephone.message}</p>
                                </FormGroup>
        
                                <Button color='primary' onClick={this.handleSubmit}>Register</Button>
        
                              </Form>
                          </div>
                        </Layout>
                    </div>
                    );
            } else {
                console.log('no profile, redirect!!!!!!');
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

export default graphql(query)(Registration);
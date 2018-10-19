import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import FormValidator from './FormValidator';
import Layout from './Layout'

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
                field: 'firstName',
                method: 'isEmpty',
                validWhen: false,
                message: 'must provide first name'
            },
            {
                field: 'lastName',
                method: 'isEmpty',
                validWhen: false,
                message: 'must provide last name'
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
                field: 'companyId',
                method: 'isEmpty',
                validWhen: false,
                message: 'A company id is required(FOR TESTING!)'
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
    componentDidMount() {
        console.log(this.props);
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
        this.props.mutate({
            variables: {
                email: this.state.email,
                password: this.state.password,
                company_id: this.state.companyId,
                first_name: this.state.firstName,
                last_name: this.state.lastName
            }
        })
        .then(res => {
            console.log('success! ', res);
        })
        .catch(err => {
            console.log('oh no! ', err);
        });
      }
    }


    render() {
        return (
            <div>
                <Layout>
                  <div className="registration-container">
                      <h3>Create an account</h3>
                      <Form>
                        <FormGroup>
                          <Input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} id="email" placeholder="email"/>
                          <p className='input-error-text'>{this.state.validation.email.message}</p>
                        </FormGroup>
                        <FormGroup>
                          <Input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} id="firstName" placeholder="firstName"/>
                          <p className='input-error-text'>{this.state.validation.firstName.message}</p>
                        </FormGroup>
                        <FormGroup>
                          <Input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} id="lastName" placeholder="lastName"/>
                          <p className='input-error-text'>{this.state.validation.lastName.message}</p>
                        </FormGroup>
                        <FormGroup>
                          <Input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} id="password" placeholder="password" />
                          <p className='input-error-text'>{this.state.validation.password.message}</p>
                        </FormGroup>
                        <FormGroup>
                          <Input type="text" name="companyId" value={this.state.companyId} onChange={this.handleInputChange} id="companyId" placeholder="company id" />
                          <p className='input-error-text'>{this.state.validation.companyId.message}</p>
                        </FormGroup>
                        <FormGroup>
                          <Input type="text" name="companyName" value={this.state.companyName} onChange={this.handleInputChange} id="companyName" placeholder="company name" />
                          <p className='input-error-text'>{this.state.validation.companyName.message}</p>
                        </FormGroup>
                        <FormGroup>
                          <Input type="text" name="companyAddress" value={this.state.companyAddress} onChange={this.handleInputChange} id="companyAddress" placeholder="company address" />
                          <p className='input-error-text'>{this.state.validation.companyAddress.message}</p>
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
    }
}

const mutator = gql`
    mutation createUser($email: String!, $first_name: String!, $last_name: String!, $password: String!, $company_id: String!) {
        createUser(email: $email, first_name: $first_name, last_name: $last_name, password: $password, company_id: $company_id) {
            email
        }
    }
`;

export default graphql(mutator)(Registration);

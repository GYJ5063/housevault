import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import FormValidator from '../components/FormValidator';
import Layout from '../components/Layout'

import { Router } from '../routes';

import "../styles/signin.scss"; //import page-specific styles from registration.scsss

class Login extends Component {
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
                field: 'password',
                method: 'isEmpty',
                validWhen: false,
                message: 'A password is required'
            }

        ]);

        this.state = {
            email: '',
            password: '',
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

      if (validation.isValid) {
        this.props.mutate({
            variables: {
                email: this.state.email,
                password: this.state.password
            }
        })
        .then(res => {
            // store token to local storage
            if(res.data.login) {
                localStorage.setItem('token', res.data.login);
                Router.push('/dashboard');
            }
        })
        .catch(err => {
            if(err && err.graphQLErrors) {
                this.setState({ error: err.graphQLErrors[0].message });
                console.error(err.graphQLErrors[0]);
            }
        });

      }
    }

    renderLoginResult(){
        if(this.state.error) {
            return (
                <div>
                <Alert color="danger">
                    <h4 className="alert-heading">An error occurred</h4>
                    <p>{this.state.error}</p>
                </Alert>
              </div>
            );
        }
        return null;
    }

    render() {
        return (
            <div>
                <Layout>
                  <div className="registration-container">
                      {this.renderLoginResult()}
                      <h3>Log in</h3>
                      <Form>
                        <FormGroup>
                          <Input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} id="exampleEmail" placeholder="email"/>
                          <p className='input-error-text'>{this.state.validation.email.message}</p>
                        </FormGroup>
                        <FormGroup>
                          <Input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} id="examplePassword" placeholder="password" />
                          <p className='input-error-text'>{this.state.validation.password.message}</p>
                        </FormGroup>

                        <Button color='primary' onClick={this.handleSubmit}>Login</Button>

                      </Form>
                  </div>
                </Layout>
            </div>
        );
    }
}

const mutator = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`;

export default graphql(mutator)(Login);
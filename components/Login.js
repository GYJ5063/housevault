import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import FormValidator from './FormValidator';
import Layout from './Layout'
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

      // Send data to database via API call
      if (validation.isValid) {
        console.log(this.state.email, this.state.password);
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
                Router.push('/profile');
            }
            // redirect somewhere?
            console.log('token stored');
        })
        .catch(err => console.log(err));
      }
    }


    render() {
        return (
            <div>
                <Layout>
                  <div className="registration-container">
                      <h3>Log in</h3>
                      <Form>
                        <FormGroup>
                          <Input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} id="email" placeholder="email"/>
                          <p className='input-error-text'>{this.state.validation.email.message}</p>
                        </FormGroup>
                        <FormGroup>
                          <Input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} id="password" placeholder="password" />
                          <p className='input-error-text'>{this.state.validation.password.message}</p>
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
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`;

export default graphql(mutator)(Login);
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Router } from '../routes'

import FormValidator from './FormValidator';
import Layout from './Layout'

class Reset extends React.Component {
    constructor(props) {
        super(props);

        this.validator = new FormValidator([
            {
                field: 'password',
                method: 'isEmpty',
                validWhen: false,
                message: 'Password is required'
            },
            {
                field: 'confirmPassword',
                method: (value, args) => {
                    return value && args.password === args.confirmPassword;
                },
                validWhen: true,
                message: 'Passwords do not match'
            }
        ]);

        this.state = {
            password: '',
            confirmPassword: '',
            validation: this.validator.valid()
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

      renderResetResult(){
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

    handleSubmit(event) {
        event.preventDefault();

        const validation = this.validator.validate(this.state);
        this.setState({ validation });

        if(validation.isValid) {
            // api
        }
    }

    render() {
        return(
            <div>
            <Layout>
              <div className="registration-container">
                  {this.renderResetResult()}
                  <h3>Reset Password</h3>
                  <Form>
                    <FormGroup>
                      <Input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} id="password" placeholder="password"/>
                      <p className='input-error-text'>{this.state.validation.password.message}</p>
                    </FormGroup>
                    <FormGroup>
                      <Input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} id="confirmPassword" placeholder="confirm password"/>
                      <p className='input-error-text'>{this.state.validation.confirmPassword.message}</p>
                    </FormGroup>

                    <Button color='primary' onClick={this.handleSubmit}>Save</Button>

                  </Form>
              </div>
            </Layout>
        </div>
        );
    }
}

export default Reset;
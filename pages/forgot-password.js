import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import FormValidator from '../components/FormValidator';
import Layout from '../components/Layout'

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);

        this.validator = new FormValidator([
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'An email is required'
            }
        ]);

        this.state = {
            error: this.props.error,
            resetResult: null,
            email: '',
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
        if(this.state.resetResult) {
            return (
                <div>
                <Alert color="success">
                    <h4 className="alert-heading">Success</h4>
                    <p>{this.state.resetResult}</p>
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

        if (validation.isValid) {
            this.props.mutate({
                variables: {
                    email: this.state.email
                }
            })
            .then(res => {
                this.setState({ resetResult: res.data.forgotPassword, error: null });
            })
            .catch(err => {
                this.setState({ error: err.graphQLErrors[0].message });
                console.error(err.graphQLErrors[0]);
            });
    
          }
    }

    render() {
        return (
            <div>
                <Layout>
                  <div className="registration-container">
                      {this.renderResetResult()}
                      <h3>Reset Password</h3>
                      <Form>
                        <FormGroup>
                          <Input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} id="exampleEmail" placeholder="email"/>
                          <p className='input-error-text'>{this.state.validation.email.message}</p>
                        </FormGroup>

                        <Button color='primary' onClick={this.handleSubmit}>Reset</Button>

                      </Form>
                  </div>
                </Layout>
            </div>
        );
    }
}

const mutator = gql`
    mutation forgotPassword($email: String!) {
        forgotPassword(email: $email)
    }
`;

ForgotPassword.getInitialProps = async ({ query: { error }}) => {
    return { error };
};

export default ForgotPassword;